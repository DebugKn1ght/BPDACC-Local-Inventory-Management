import React, { useState } from 'react'

const Inventory = () => {
  const [selectedOffice, setSelectedOffice] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showMoreInfo, setShowMoreInfo] = useState(null)
  const [showEditModal, setShowEditModal] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [expandedItems, setExpandedItems] = useState(new Set())

  // Helper to check if date is near expiry (within 30 days)
  const isNearExpiry = (expiryDate) => {
    if (!expiryDate) return false
    const today = new Date()
    const expiry = new Date(expiryDate)
    const diffTime = expiry - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 30 && diffDays > 0
  }

  // Helper to check if date is expired
  const isExpired = (expiryDate) => {
    if (!expiryDate) return false
    const today = new Date()
    const expiry = new Date(expiryDate)
    return expiry < today
  }

  // Updated inventory data model with batches (lots)
  const inventoryItems = [
    {
      id: 1,
      sku: 'MED-001',
      name: 'Syringes 5ml',
      brand: 'BD Medical',
      location: 'Shelf A-12',
      minStock: 100,
      unit: 'pcs',
      batches: [
        { batchId: 'B-001', expiryDate: null, office: 'Hemodialysis', stock: 250 },
        { batchId: 'B-002', expiryDate: null, office: 'Clinical Laboratory', stock: 320 },
        { batchId: 'B-003', expiryDate: null, office: 'Hemodialysis', stock: 200 }
      ]
    },
    {
      id: 2,
      sku: 'MED-002',
      name: 'Gauze Pads (4x4)',
      brand: 'Johnson & Johnson',
      location: 'Shelf B-05',
      minStock: 50,
      unit: 'packs',
      batches: [
        { batchId: 'B-004', expiryDate: '2026-07-15', office: 'Radiology', stock: 80 },
        { batchId: 'B-005', expiryDate: '2027-03-20', office: 'Radiology', stock: 40 }
      ]
    },
    {
      id: 3,
      sku: 'MED-003',
      name: 'Alcohol Swabs',
      brand: 'Kendall',
      location: 'Shelf C-08',
      minStock: 100,
      unit: 'boxes',
      batches: [
        { batchId: 'B-006', expiryDate: '2026-06-30', office: 'Admin Office', stock: 35 },
        { batchId: 'B-007', expiryDate: '2026-08-10', office: 'Hemodialysis', stock: 40 }
      ]
    },
    {
      id: 4,
      sku: 'MED-004',
      name: 'Bandages (Assorted)',
      brand: '3M',
      location: 'Shelf B-10',
      minStock: 150,
      unit: 'boxes',
      batches: [
        { batchId: 'B-008', expiryDate: null, office: 'Hemodialysis', stock: 150 },
        { batchId: 'B-009', expiryDate: null, office: 'Unallocated', stock: 50 }
      ]
    },
    {
      id: 5,
      sku: 'MED-005',
      name: 'Needles 21G',
      brand: 'BD Medical',
      location: 'Shelf A-15',
      minStock: 200,
      unit: 'pcs',
      batches: [
        { batchId: 'B-010', expiryDate: '2028-12-01', office: 'Clinical Laboratory', stock: 500 }
      ]
    }
  ]

  // Calculate total stock for an item across batches
  const getTotalStock = (item) => {
    return item.batches.reduce((sum, batch) => sum + batch.stock, 0)
  }

  // Determine the most urgent status for an item based on batches
  const getItemStatus = (item) => {
    const totalStock = getTotalStock(item)
    const hasExpired = item.batches.some(batch => isExpired(batch.expiryDate))
    const hasNearExpiry = item.batches.some(batch => isNearExpiry(batch.expiryDate))
    const isLowStock = totalStock < item.minStock

    if (hasExpired) return { label: 'Expired', type: 'expired' }
    if (hasNearExpiry) return { label: 'Near Expiry', type: 'near-expiry' }
    if (isLowStock) return { label: 'Low Stock', type: 'low' }
    return { label: 'In Stock', type: 'ok' }
  }

  // Toggle expansion for item batches
  const toggleItemExpansion = (itemId) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  // Filter items based on search and office
  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesOffice = selectedOffice === 'all' || 
      item.batches.some(batch => batch.office === selectedOffice)

    return matchesSearch && matchesOffice
  })

  // Format expiry date for display
  const formatExpiryDate = (dateStr) => {
    if (!dateStr) return 'N/A'
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="inventory">
      <div className="page-header">
        <div>
          <h1 className="page-title">Inventory Management</h1>
          <p className="page-subtitle">Manage and track your medical supplies by batches</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>+ Add Item</button>
      </div>

      <div className="filters-bar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search items by name, SKU, or brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="select-input"
          value={selectedOffice}
          onChange={(e) => setSelectedOffice(e.target.value)}
        >
          <option value="all">All Offices</option>
          <option value="Hemodialysis">Hemodialysis</option>
          <option value="Clinical Laboratory">Clinical Laboratory</option>
          <option value="Radiology">Radiology</option>
          <option value="Admin Office">Admin Office</option>
        </select>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th style={{width: '40px'}}></th>
                <th>SKU</th>
                <th>Item Name</th>
                <th>Brand</th>
                <th>Total Stock</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => {
                const totalStock = getTotalStock(item)
                const status = getItemStatus(item)
                const isLowStock = totalStock < item.minStock
                const isExpanded = expandedItems.has(item.id)
                
                return (
                  <React.Fragment key={item.id}>
                    <tr className="item-row" onClick={() => toggleItemExpansion(item.id)}>
                      <td>
                        <span className="expand-icon">
                          {isExpanded ? '▼' : '▶'}
                        </span>
                      </td>
                      <td className="sku">{item.sku}</td>
                      <td>
                        <div className="item-name">{item.name}</div>
                      </td>
                      <td>
                        <span className="brand-tag">{item.brand}</span>
                      </td>
                      <td>
                        <div className={`stock-cell ${isLowStock ? 'low' : ''}`}>
                          {totalStock} {item.unit}
                        </div>
                      </td>
                      <td>{item.location}</td>
                      <td>
                        <span className={`status-badge ${status.type}`}>{status.label}</span>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <div className="actions">
                          <button 
                            className="btn-icon" 
                            title="Edit item"
                            onClick={() => setShowEditModal(item)}
                          >
                            ✏️
                          </button>
                          <button 
                            className="btn-icon" 
                            title="More info"
                            onClick={() => setShowMoreInfo(item)}
                          >
                            📋
                          </button>
                        </div>
                      </td>
                    </tr>

                    {isExpanded && (
                      <tr className="batches-row">
                        <td colSpan={8}>
                          <div className="batches-container">
                            <table className="batches-table">
                              <thead>
                                <tr>
                                  <th>Batch ID</th>
                                  <th>Office</th>
                                  <th>Stock</th>
                                  <th>Expiry Date</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.batches.map((batch, idx) => {
                                  const batchExpired = isExpired(batch.expiryDate)
                                  const batchNearExpiry = isNearExpiry(batch.expiryDate)
                                  let batchStatus = { label: 'OK', type: 'ok' }
                                  
                                  if (batchExpired) {
                                    batchStatus = { label: 'Expired', type: 'expired' }
                                  } else if (batchNearExpiry) {
                                    batchStatus = { label: 'Near Expiry', type: 'near-expiry' }
                                  }

                                  return (
                                    <tr key={idx}>
                                      <td className="batch-id">{batch.batchId}</td>
                                      <td><span className="office-tag">{batch.office}</span></td>
                                      <td>{batch.stock} {item.unit}</td>
                                      <td className={`expiry-cell ${batchNearExpiry ? 'near' : batchExpired ? 'expired' : ''}`}>
                                        {formatExpiryDate(batch.expiryDate)}
                                      </td>
                                      <td>
                                        <span className={`status-badge ${batchStatus.type}`}>
                                          {batchStatus.label}
                                        </span>
                                      </td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* More Info Modal */}
      {showMoreInfo && (
        <div className="modal-overlay" onClick={() => setShowMoreInfo(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Item Details: {showMoreInfo.name}</h2>
              <button className="close-btn" onClick={() => setShowMoreInfo(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="detail-section">
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">SKU:</span>
                    <span className="detail-value">{showMoreInfo.sku}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Brand:</span>
                    <span className="detail-value">{showMoreInfo.brand}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{showMoreInfo.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Total Stock:</span>
                    <span className="detail-value">{getTotalStock(showMoreInfo)} {showMoreInfo.unit}</span>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h4 className="detail-subtitle">Batches / Lots</h4>
                <table className="allocations-table">
                  <thead>
                    <tr>
                      <th>Batch ID</th>
                      <th>Office</th>
                      <th>Stock</th>
                      <th>Expiry Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {showMoreInfo.batches.map((batch, idx) => {
                      const batchExpired = isExpired(batch.expiryDate)
                      const batchNearExpiry = isNearExpiry(batch.expiryDate)
                      let batchStatus = { label: 'OK', type: 'ok' }
                      
                      if (batchExpired) {
                        batchStatus = { label: 'Expired', type: 'expired' }
                      } else if (batchNearExpiry) {
                        batchStatus = { label: 'Near Expiry', type: 'near-expiry' }
                      }
                      
                      return (
                        <tr key={idx}>
                          <td>{batch.batchId}</td>
                          <td>{batch.office}</td>
                          <td>{batch.stock} {showMoreInfo.unit}</td>
                          <td>{formatExpiryDate(batch.expiryDate)}</td>
                          <td>
                            <span className={`status-badge ${batchStatus.type}`}>
                              {batchStatus.label}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2}>Total</td>
                      <td>{getTotalStock(showMoreInfo)} {showMoreInfo.unit}</td>
                      <td colSpan={2}></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowMoreInfo(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Item</h2>
              <button className="close-btn" onClick={() => setShowEditModal(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-group">
                  <label className="form-label">Item Name</label>
                  <input type="text" className="form-input" defaultValue={showEditModal.name} />
                </div>
                <div className="form-group">
                  <label className="form-label">SKU</label>
                  <input type="text" className="form-input" defaultValue={showEditModal.sku} />
                </div>
                <div className="form-group">
                  <label className="form-label">Brand</label>
                  <input type="text" className="form-input" defaultValue={showEditModal.brand} />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-input" defaultValue={showEditModal.location} />
                </div>
                <div className="form-group">
                  <label className="form-label">Minimum Stock Level</label>
                  <input type="number" className="form-input" defaultValue={showEditModal.minStock} />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Batches</label>
                  <div className="batches-edit-container">
                    {showEditModal.batches.map((batch, idx) => (
                      <div key={idx} className="batch-edit-row">
                        <div className="form-group mini">
                          <label className="form-label">Batch ID</label>
                          <input type="text" className="form-input" defaultValue={batch.batchId} />
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Office</label>
                          <select className="form-input" defaultValue={batch.office}>
                            <option value="Hemodialysis">Hemodialysis</option>
                            <option value="Clinical Laboratory">Clinical Laboratory</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Admin Office">Admin Office</option>
                            <option value="Unallocated">Unallocated</option>
                          </select>
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Stock</label>
                          <input type="number" className="form-input" defaultValue={batch.stock} />
                        </div>
                        <div className="form-group mini">
                          <label className="toggle-label">
                            <input type="checkbox" defaultChecked={!!batch.expiryDate} />
                            Has Expiry
                          </label>
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Expiry Date</label>
                          <input type="date" className="form-input" defaultValue={batch.expiryDate || ''} disabled={!batch.expiryDate} />
                        </div>
                        <button className="btn-icon remove-btn" title="Remove Batch">🗑️</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary">Add Batch</button>
              <div className="button-group">
                <button className="btn-secondary" onClick={() => setShowEditModal(null)}>Cancel</button>
                <button className="btn-primary" onClick={() => setShowEditModal(null)}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Item</h2>
              <button className="close-btn" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-group">
                  <label className="form-label">Item Name</label>
                  <input type="text" className="form-input" placeholder="e.g., Syringes 5ml" />
                </div>
                <div className="form-group">
                  <label className="form-label">SKU</label>
                  <input type="text" className="form-input" placeholder="e.g., MED-006" />
                </div>
                <div className="form-group">
                  <label className="form-label">Brand</label>
                  <input type="text" className="form-input" placeholder="e.g., BD Medical" />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-input" placeholder="e.g., Shelf A-12" />
                </div>
                <div className="form-group">
                  <label className="form-label">Unit</label>
                  <select className="form-input">
                    <option value="pcs">pcs</option>
                    <option value="packs">packs</option>
                    <option value="boxes">boxes</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Minimum Stock Level</label>
                  <input type="number" className="form-input" placeholder="e.g., 50" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary">Add Initial Batch</button>
              <div className="button-group">
                <button className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button className="btn-primary" onClick={() => setShowAddModal(false)}>Add Item</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .inventory {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }

        .btn-secondary {
          background: white;
          color: #1f2937;
          border: 1px solid #e5e7eb;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }

        .filters-bar {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 0 16px;
          gap: 10px;
          min-width: 200px;
        }

        .search-icon {
          font-size: 18px;
        }

        .search-box input {
          flex: 1;
          border: none;
          padding: 12px 0;
          font-size: 14px;
          outline: none;
        }

        .select-input {
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          cursor: pointer;
          min-width: 150px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .table-container {
          overflow-x: auto;
        }

        .inventory-table {
          width: 100%;
          border-collapse: collapse;
        }

        .inventory-table th,
        .inventory-table td {
          padding: 16px 20px;
          text-align: left;
        }

        .inventory-table thead {
          background: #f9fafb;
        }

        .inventory-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .inventory-table .item-row {
          border-bottom: 1px solid #f3f4f6;
          cursor: pointer;
        }

        .inventory-table .item-row:hover {
          background: #f9fafb;
        }

        .sku {
          font-family: monospace;
          color: #6b7280;
        }

        .item-name {
          font-weight: 600;
          color: #1f2937;
        }

        .brand-tag {
          display: inline-block;
          padding: 4px 12px;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        }

        .office-tag {
          display: inline-block;
          padding: 4px 10px;
          background: #f3f4f6;
          color: #4b5563;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
        }

        .stock-cell {
          font-weight: 600;
          white-space: nowrap;
        }

        .stock-cell.low {
          color: #dc2626;
        }

        .expiry-cell {
          font-weight: 500;
          white-space: nowrap;
        }

        .expiry-cell.near {
          color: #f59e0b;
          font-weight: 600;
        }

        .expiry-cell.expired {
          color: #dc2626;
          font-weight: 600;
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .status-badge.ok {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.low {
          background: #fee2e2;
          color: #991b1b;
        }

        .status-badge.near-expiry {
          background: #fef3c7;
          color: #92400e;
        }

        .status-badge.expired {
          background: #fecaca;
          color: #7f1d1d;
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        .btn-icon {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .btn-icon:hover {
          background: #f3f4f6;
        }

        .expand-icon {
          font-size: 10px;
          color: #6b7280;
        }

        .batches-row {
          background: #f9fafb;
        }

        .batches-container {
          padding: 12px 24px 24px;
        }

        .batches-table {
          width: 100%;
          border-collapse: collapse;
        }

        .batches-table th {
          background: transparent;
          font-size: 11px;
          font-weight: 600;
          color: #6b7280;
          padding: 8px 12px;
          text-align: left;
        }

        .batches-table td {
          padding: 10px 12px;
          font-size: 13px;
        }

        .batches-table tr {
          border-bottom: 1px solid #e5e7eb;
        }

        .batch-id {
          font-family: monospace;
          color: #374151;
        }

        /* Toggle Label */
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #1f2937;
          cursor: pointer;
        }

        .toggle-label input {
          width: auto;
          cursor: pointer;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-large {
          max-width: 900px;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #f3f4f6;
        }

        .modal-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #6b7280;
          line-height: 1;
          padding: 0 8px;
          border-radius: 4px;
        }

        .close-btn:hover {
          background: #f3f4f6;
        }

        .modal-body {
          padding: 24px;
          overflow-y: auto;
        }

        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 20px 24px;
          border-top: 1px solid #f3f4f6;
        }

        .button-group {
          display: flex;
          gap: 12px;
        }

        .detail-section {
          margin-bottom: 24px;
        }

        .detail-title {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .detail-subtitle {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
        }

        .detail-label {
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .detail-value {
          font-size: 14px;
          color: #1f2937;
          font-weight: 500;
        }

        .allocations-table {
          width: 100%;
          border-collapse: collapse;
        }

        .allocations-table th,
        .allocations-table td {
          padding: 10px 14px;
          border-bottom: 1px solid #f3f4f6;
          text-align: left;
        }

        .allocations-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          background: #f9fafb;
        }

        .allocations-table td {
          font-size: 14px;
          color: #1f2937;
        }

        .allocations-table tfoot td {
          font-weight: 700;
          border-top: 2px solid #f3f4f6;
        }

        .edit-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group.mini {
          flex: 1;
          min-width: 0;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #4b5563;
        }

        .form-input {
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        .form-input:disabled {
          background: #f3f4f6;
          cursor: not-allowed;
        }

        .batches-edit-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .batch-edit-row {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
          align-items: flex-end;
        }

        .remove-btn {
          color: #dc2626;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .filters-bar {
            gap: 12px;
          }

          .search-box {
            min-width: 100%;
            order: -1;
          }

          .select-input {
            flex: 1;
          }

          .batch-edit-row {
            flex-direction: column;
            align-items: stretch;
          }

          .form-group.mini {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }

          .filters-bar {
            gap: 12px;
          }

          .select-input {
            width: 100%;
          }

          .modal {
            margin: 16px;
            border-radius: 12px;
          }

          .detail-grid {
            grid-template-columns: 1fr;
          }

          .modal-footer {
            flex-direction: column;
          }

          .button-group {
            width: 100%;
            flex-direction: column;
          }

          .button-group button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default Inventory

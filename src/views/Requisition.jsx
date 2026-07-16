import React, { useState, useEffect } from 'react'
import { useUserRole } from '../context/UserRoleContext'
import { supabaseDb } from '../utils/apiDb'
import PrintableRIS from '../components/PrintableRIS'

const Requisition = () => {
  const { currentUser, userOffice, userOfficeId } = useUserRole()
  
  // Tabs state
  const [activeTab, setActiveTab] = useState('form') // 'form' or 'history'
  
  // Form states
  const [risNo, setRisNo] = useState('')
  const [responsibilityCenterCode, setResponsibilityCenterCode] = useState('')
  const [purpose, setPurpose] = useState('')
  const [addedItems, setAddedItems] = useState([])
  
  // Dialog modal states
  const [showAddModal, setShowAddModal] = useState(false)
  const [itemsList, setItemsList] = useState([]) // For autocomplete suggestions
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [stockNumber, setStockNumber] = useState('')
  const [unit, setUnit] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  // History states
  const [history, setHistory] = useState([])
  const [loadingHistory, setLoadingHistory] = useState(false)
  const [searchHistoryQuery, setSearchHistoryQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null)
  
  // Printing state
  const [printingRequisition, setPrintingRequisition] = useState(null)
  
  // Alerts
  const [notification, setNotification] = useState(null)
  
  const showNotification = (type, message) => {
    setNotification({ type, message })
    setTimeout(() => setNotification(null), 3000)
  }

  // Current date
  const todayDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Load inventory items for autocomplete search
  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Fetch only items assigned to this office (isAdmin is false, passing office parameters)
        const items = await supabaseDb.getItems(userOffice, false, userOfficeId)
        setItemsList(items || [])
      } catch (err) {
        console.error('Error fetching items for office:', err)
      }
    }
    if (userOffice) {
      fetchItems()
    }
  }, [userOffice, userOfficeId])

  // Load history of requisitions
  const fetchHistory = async () => {
    setLoadingHistory(true)
    try {
      const data = await supabaseDb.getRequisitions()
      // Filter requisitions submitted by this user
      const userHistory = data.filter(req => req.requestedById === currentUser?.id)
      setHistory(userHistory)
    } catch (err) {
      console.error('Error fetching history:', err)
    } finally {
      setLoadingHistory(false)
    }
  }

  useEffect(() => {
    if (activeTab === 'history') {
      fetchHistory()
    }
  }, [activeTab])

  // Handle autocomplete search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([])
      return
    }
    const filtered = itemsList.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSuggestions(filtered)
  }, [searchQuery, itemsList])

  const handleSelectItem = (item) => {
    setSelectedItem(item)
    setSearchQuery(item.name)
    // Get stock number from batches (if any) or default to N/A
    const sNo = item.batches?.[0]?.stockNumber || 'N/A'
    setStockNumber(sNo)
    setUnit(item.unit || 'Pieces')
    setSuggestions([])
  }

  const handleAddConfirm = () => {
    if (!selectedItem) {
      showNotification('error', 'Please select a valid item from suggestions')
      return
    }
    if (quantity <= 0) {
      showNotification('error', 'Quantity must be greater than zero')
      return
    }

    // Check duplicate in added list
    if (addedItems.some(i => i.inventoryItemId === selectedItem.id)) {
      showNotification('error', 'This item is already added to the table')
      return
    }

    const newItem = {
      inventoryItemId: selectedItem.id,
      itemName: selectedItem.name,
      stockNumber,
      unit,
      quantity: parseInt(quantity)
    }

    setAddedItems([...addedItems, newItem])
    // Reset modal inputs
    setSearchQuery('')
    setSelectedItem(null)
    setStockNumber('')
    setUnit('')
    setQuantity(1)
    setShowAddModal(false)
    showNotification('success', 'Item added successfully')
  }

  const handleRemoveItem = (index) => {
    setAddedItems(addedItems.filter((_, i) => i !== index))
  }

  const handleFormReset = () => {
    setRisNo('')
    setResponsibilityCenterCode('')
    setPurpose('')
    setAddedItems([])
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!risNo.trim()) {
      showNotification('error', 'RIS No. is required')
      return
    }
    if (!responsibilityCenterCode.trim()) {
      showNotification('error', 'Responsibility Center Code is required')
      return
    }
    if (addedItems.length === 0) {
      showNotification('error', 'Please add at least one item to requisition')
      return
    }
    if (!purpose.trim()) {
      showNotification('error', 'Purpose field is required')
      return
    }

    try {
      const payload = {
        risNo: risNo.trim(),
        responsibilityCenterCode: responsibilityCenterCode.trim(),
        purpose: purpose.trim(),
        requestedById: currentUser.id,
        officeId: userOfficeId,
        items: addedItems
      }

      await supabaseDb.addRequisition(payload)
      showNotification('success', 'Requisition request submitted successfully!')
      handleFormReset()
      // Go to history tab
      setActiveTab('history')
    } catch (err) {
      showNotification('error', err.message || 'Failed to submit requisition')
    }
  }

  // Print function
  const handlePrint = (requisition) => {
    setPrintingRequisition(requisition)
    // Wait for state to reflect in DOM
    setTimeout(() => {
      window.print()
      setPrintingRequisition(null)
    }, 200)
  }

  // Filter history
  const filteredHistory = history.filter(req => {
    const matchesSearch = searchHistoryQuery === '' || req.items.some(item => 
      item.itemName.toLowerCase().includes(searchHistoryQuery.toLowerCase())
    )
    const matchesStatus = statusFilter === 'All' || req.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="requisition-page">
      {/* Toast Alert Notification */}
      {notification && (
        <div className={`toast toast-${notification.type}`} style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 10000 }}>
          <div className="toast-content">
            <span className="toast-icon">{notification.type === 'success' ? '✅' : '❌'}</span>
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="tabs-container no-print">
        <button 
          className={`tab-btn ${activeTab === 'form' ? 'active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          Requisition Form
        </button>
        <button 
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Request History
        </button>
      </div>

      {/* Main Content Area */}
      <div className="tab-content no-print">
        {activeTab === 'form' ? (
          <form onSubmit={handleFormSubmit} className="ris-card">
            
            {/* Logo and Header Block */}
            <div className="ris-header">
              <div className="logo-placeholder-box left-logo">
                <img src="/pho-logo.png" alt="PHO Logo" />
              </div>
              <div className="header-text-box">
                <h2>Republic of the Philippines</h2>
                <h3>PROVINCIAL OF BOHOL</h3>
                <p className="subheading-city">City of Tagbilaran</p>
                <h4>Provincial Health Office</h4>
                <h5>BOHOL PROVINCIAL DIAGNOSTIC & AMBULATORY CARE CENTER</h5>
                <p className="contact-details">Tel. No. (038) 411 - 1240 &nbsp;|&nbsp; Email: bpdac2020@gmail.com</p>
              </div>
              <div className="logo-placeholder-box right-logo">
                <img src="/bohol-logo.png" alt="Bohol Logo" />
              </div>
            </div>

            {/* RIS title */}
            <div className="ris-title-container">
              <h1>REQUISITION AND ISSUE SLIP (RIS)</h1>
            </div>

            {/* Metadata Fields Section */}
            <div className="metadata-fields-grid">
              <div className="meta-col">
                <div className="field-group">
                  <label>Division:</label>
                  <input type="text" value="BPDACC" readOnly className="readonly-input" />
                </div>
                <div className="field-group">
                  <label>Office:</label>
                  <input type="text" value={userOffice || 'N/A'} readOnly className="readonly-input" />
                </div>
              </div>
              <div className="meta-col border-left">
                <div className="field-group">
                  <label>Responsibility Center Code:</label>
                  <input 
                    type="text" 
                    value={responsibilityCenterCode} 
                    onChange={(e) => setResponsibilityCenterCode(e.target.value)} 
                    placeholder="Enter Code"
                    required
                  />
                </div>
              </div>
              <div className="meta-col border-left">
                <div className="field-group">
                  <label>RIS No.:</label>
                  <input 
                    type="text" 
                    value={risNo} 
                    onChange={(e) => setRisNo(e.target.value)} 
                    placeholder="Enter RIS No."
                    required
                  />
                </div>
                <div className="field-group">
                  <label>Date:</label>
                  <input type="text" value={todayDate} readOnly className="readonly-input" />
                </div>
              </div>
            </div>

            {/* Requisition Section Label */}
            <div className="requisition-label-bar">
              Requisition
            </div>

            {/* Main Requisitions Items Table */}
            <div className="table-wrapper">
              <table className="ris-items-table">
                <thead>
                  <tr>
                    <th style={{ width: '20%' }}>Stock No.</th>
                    <th style={{ width: '15%' }}>Unit</th>
                    <th style={{ width: '50%' }}>Description</th>
                    <th style={{ width: '15%' }}>Quantity</th>
                    <th style={{ width: '60px' }} className="no-print">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {addedItems.map((item, index) => (
                    <tr key={index}>
                      <td className="text-center">{item.stockNumber}</td>
                      <td className="text-center">{item.unit}</td>
                      <td>{item.itemName}</td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-center no-print">
                        <button 
                          type="button" 
                          className="btn-delete"
                          onClick={() => handleRemoveItem(index)}
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* Plus button row */}
                  <tr>
                    <td colSpan={addedItems.length > 0 ? 5 : 5} className="plus-btn-row text-center">
                      <button 
                        type="button" 
                        className="btn-add-item"
                        onClick={() => setShowAddModal(true)}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Purpose section */}
            <div className="purpose-section">
              <label>Purpose: <span className="text-danger">*</span></label>
              <textarea 
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="Write the purpose of this request..."
                rows={3}
                required
              />
            </div>

            {/* Template signatures table */}
            <div className="signature-template-container">
              <table className="sig-table">
                <thead>
                  <tr>
                    <th style={{ width: '16%' }}></th>
                    <th style={{ width: '21%' }}>Requested by:</th>
                    <th style={{ width: '21%' }}>Approved by:</th>
                    <th style={{ width: '21%' }}>Issued by:</th>
                    <th style={{ width: '21%' }}>Received by:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="signature-row">
                    <td className="row-title">Signature :</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="row-title">Printed Name :</td>
                    <td className="text-center val">{currentUser?.name || ''}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="row-title">Designation :</td>
                    <td className="text-center val">Office Staff</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="row-title">Date :</td>
                    <td className="text-center val">{todayDate}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Form actions */}
            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={handleFormReset}>
                CANCEL
              </button>
              <button type="submit" className="btn-submit">
                SUBMIT
              </button>
            </div>

          </form>
        ) : (
          <div className="history-section">
            
            {/* Filters Row */}
            <div className="filters-card">
              <div className="search-input-box">
                <input 
                  type="text" 
                  value={searchHistoryQuery} 
                  onChange={(e) => setSearchHistoryQuery(e.target.value)}
                  placeholder="Search by item name..."
                />
              </div>
              <div className="filter-select-box">
                <label>Status:</label>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* History List */}
            {loadingHistory ? (
              <div className="loading-state">Loading requisition history...</div>
            ) : filteredHistory.length === 0 ? (
              <div className="empty-state">No requisitions found matching the filters.</div>
            ) : (
              <div className="history-table-wrapper">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>RIS No.</th>
                      <th>Date</th>
                      <th>Items Requested</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHistory.map(req => (
                      <tr key={req.id}>
                        <td><strong>{req.risNo}</strong></td>
                        <td>{new Date(req.requestDate).toLocaleDateString()}</td>
                        <td>
                          {req.items?.map(i => i.itemName).join(', ') || 'N/A'}
                        </td>
                        <td>
                          <span className={`status-badge status-${req.status.toLowerCase()}`}>
                            {req.status}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <button 
                              className="btn-view"
                              onClick={() => setSelectedHistoryItem(req)}
                            >
                              View Details
                            </button>
                            {req.status === 'Approved' && (
                              <button 
                                className="btn-print-action"
                                onClick={() => handlePrint(req)}
                              >
                                Print
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add Item Modal Dialog */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add Requisition Item</h3>
              <button className="close-x" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="modal-form-group search-relative">
                <label>Description (Item Name) <span className="text-danger">*</span></label>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to search items..."
                  autoComplete="off"
                />
                
                {/* Suggestions List */}
                {suggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {suggestions.map(item => (
                      <li 
                        key={item.id} 
                        onClick={() => handleSelectItem(item)}
                      >
                        {item.name} (Available: {item.batches?.[0]?.stock ?? 0})
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="modal-form-group">
                <label>Stock No.</label>
                <input type="text" value={stockNumber} readOnly className="readonly-input" />
              </div>

              <div className="modal-form-group">
                <label>Unit</label>
                <input type="text" value={unit} readOnly className="readonly-input" />
              </div>

              <div className="modal-form-group">
                <label>Quantity <span className="text-danger">*</span></label>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min={1}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-modal-cancel" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="btn-modal-confirm" onClick={handleAddConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* View History Item Details Modal */}
      {selectedHistoryItem && (
        <div className="modal-overlay" onClick={() => setSelectedHistoryItem(null)}>
          <div className="modal-card details-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Requisition Details: {selectedHistoryItem.risNo}</h3>
              <button className="close-x" onClick={() => setSelectedHistoryItem(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="details-grid">
                <div><strong>RIS No:</strong> {selectedHistoryItem.risNo}</div>
                <div><strong>Date:</strong> {new Date(selectedHistoryItem.requestDate).toLocaleDateString()}</div>
                <div><strong>Responsibility Code:</strong> {selectedHistoryItem.responsibilityCenterCode}</div>
                <div>
                  <strong>Status: </strong>
                  <span className={`status-badge status-${selectedHistoryItem.status.toLowerCase()}`}>
                    {selectedHistoryItem.status}
                  </span>
                </div>
              </div>
              <div className="details-section" style={{ marginTop: '16px' }}>
                <strong>Requested Items:</strong>
                <table className="details-table" style={{ width: '100%', marginTop: '8px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Stock No.</th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Unit</th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedHistoryItem.items?.map((item, index) => (
                      <tr key={index}>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.stockNumber || '-'}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.unit}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.itemName}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="details-section" style={{ marginTop: '16px' }}>
                <strong>Purpose:</strong>
                <p style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px', marginTop: '4px' }}>
                  {selectedHistoryItem.purpose}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              {selectedHistoryItem.status === 'Approved' && (
                <button 
                  className="btn-modal-confirm" 
                  onClick={() => {
                    handlePrint(selectedHistoryItem)
                    setSelectedHistoryItem(null)
                  }}
                  style={{ background: '#3b82f6' }}
                >
                  Print
                </button>
              )}
              <button className="btn-modal-cancel" onClick={() => setSelectedHistoryItem(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Render Printable RIS form dynamically for print dialog */}
      {printingRequisition && (
        <PrintableRIS requisition={printingRequisition} />
      )}

      <style>{`
        .requisition-page {
          padding: 24px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: calc(100vh - 48px);
        }

        .tabs-container {
          display: flex;
          gap: 12px;
          border-bottom: 2px solid #e2e8f0;
          margin-bottom: 24px;
        }

        .tab-btn {
          padding: 12px 24px;
          font-size: 15px;
          font-weight: 600;
          color: #64748b;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
        }

        .tab-btn:hover {
          color: #3b82f6;
        }

        .tab-btn.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }

        /* Form Card Structure */
        .ris-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
          padding: 30px;
        }

        .ris-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 20px;
        }

        .logo-placeholder-box {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .logo-placeholder-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .header-text-box {
          text-align: center;
          padding: 0 20px;
        }

        .header-text-box h2 {
          font-size: 13px;
          font-weight: normal;
          margin: 0 0 2px 0;
          color: #020617;
        }

        .header-text-box h3 {
          font-size: 14px;
          font-weight: bold;
          margin: 0 0 2px 0;
        }

        .subheading-city {
          font-size: 12px;
          margin: 0 0 4px 0;
        }

        .header-text-box h4 {
          font-size: 15px;
          font-weight: bold;
          margin: 0 0 2px 0;
          color: #1e3a8a;
        }

        .header-text-box h5 {
          font-size: 13px;
          font-weight: bold;
          margin: 0 0 4px 0;
        }

        .contact-details {
          font-size: 11px;
          color: #475569;
        }

        .ris-title-container {
          border: 2px solid #000000;
          background: #f8fafc;
          text-align: center;
          padding: 12px;
          margin: 20px 0 0 0;
        }

        .ris-title-container h1 {
          font-size: 20px;
          font-weight: 800;
          margin: 0;
          color: #0f172a;
          letter-spacing: 0.5px;
        }

        /* Metadata Fields Grid */
        .metadata-fields-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          border: 1px solid #000000;
          border-top: none;
          margin: 0;
        }

        .meta-col {
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .meta-col.border-left {
          border-left: 1px solid #000000;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field-group label {
          font-size: 12px;
          font-weight: 700;
          color: #000000;
        }

        .field-group input {
          border: 1px solid #000000;
          border-radius: 4px;
          padding: 8px 12px;
          font-size: 13.5px;
          transition: all 0.2s;
        }

        .field-group input:focus {
          border-color: #3b82f6;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        .readonly-input {
          background-color: #f1f5f9;
          color: #475569;
          font-weight: 600;
          border-color: #000000 !important;
          cursor: not-allowed;
        }

        .requisition-label-bar {
          border-left: 1px solid #000000;
          border-right: 1px solid #000000;
          border-top: none;
          border-bottom: none;
          padding: 8px;
          text-align: center;
          font-style: italic;
          font-weight: bold;
          letter-spacing: 1px;
          font-size: 15px;
          background: #f8fafc;
          margin: 0;
        }

        /* Requisition Items Table */
        .table-wrapper {
          overflow-x: auto;
          margin: 0;
        }

        .ris-items-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #000000;
          margin-bottom: 20px;
        }

        .ris-items-table th, .ris-items-table td {
          border: 1px solid #000000;
          padding: 10px 12px;
          font-size: 14px;
        }

        .ris-items-table td {
          height: 38px;
        }

        .ris-items-table th {
          background: #f8fafc;
          font-weight: bold;
          color: #1e293b;
          text-align: left;
        }

        .ris-items-table th.text-center, .ris-items-table td.text-center {
          text-align: center;
        }

        .btn-delete {
          background: #fee2e2;
          color: #ef4444;
          border: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          transition: all 0.2s;
        }

        .btn-delete:hover {
          background: #ef4444;
          color: white;
        }

        .plus-btn-row {
          background: #f8fafc;
        }

        .btn-add-item {
          background: #eff6ff;
          color: #2563eb;
          border: 1px dashed #bfdbfe;
          width: 100%;
          padding: 8px;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .btn-add-item:hover {
          background: #dbeafe;
          border-color: #3b82f6;
        }

        /* Purpose Section */
        .purpose-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .purpose-section label {
          font-size: 14px;
          font-weight: 700;
          color: #1e293b;
        }

                .purpose-section textarea {
          border: 2px solid #000000;
          border-radius: 4px;
          padding: 12px;
          font-size: 14px;
          resize: vertical;
          transition: all 0.2s;
        }

        .purpose-section textarea:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        /* Signature Template Table */
        .signature-template-container {
          margin-bottom: 30px;
          overflow-x: auto;
        }

        .sig-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #000000;
        }

        .sig-table th, .sig-table td {
          border: 1px solid #000000;
          padding: 8px 12px;
          font-size: 13px;
          height: 35px;
        }

        .sig-table th {
          background: #f8fafc;
          font-weight: bold;
          text-align: center;
          border-top: 2px solid #000000;
          border-bottom: 2px solid #000000;
        }

        .sig-table th:first-child {
          border-left: 2px solid #000000;
        }

        .sig-table th:last-child {
          border-right: 2px solid #000000;
        }

        .sig-table tr.signature-row td {
          height: 60px;
        }

        .sig-table td.row-title {
          font-weight: bold;
          background: #f8fafc;
          text-align: left;
        }

        .sig-table td.val {
          font-weight: 600;
          color: #1e293b;
        }

        /* Action Buttons */
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
        }

        .btn-cancel {
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #cbd5e1;
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-cancel:hover {
          background: #e2e8f0;
        }

        .btn-submit {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 12px 36px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
          transition: all 0.2s;
        }

        .btn-submit:hover {
          background: #2563eb;
          box-shadow: 0 4px 6px rgba(37, 99, 235, 0.3);
        }

        /* History styling */
        .filters-card {
          background: white;
          border-radius: 8px;
          padding: 16px;
          border: 1px solid #e2e8f0;
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .search-input-box {
          flex: 1;
        }

        .search-input-box input {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          padding: 10px 14px;
          font-size: 14px;
        }

        .filter-select-box {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .filter-select-box label {
          font-size: 13.5px;
          font-weight: 600;
          color: #475569;
        }

        .filter-select-box select {
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          padding: 10px;
          font-size: 14px;
          min-width: 150px;
        }

        .history-table-wrapper {
          background: white;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          overflow-x: auto;
        }

        .history-table {
          width: 100%;
          border-collapse: collapse;
        }

        .history-table th, .history-table td {
          padding: 14px 16px;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
          font-size: 14px;
        }

        .history-table th {
          background: #f8fafc;
          font-weight: 600;
          color: #334155;
        }

        .status-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
          text-transform: capitalize;
        }

        .status-pending { background: #fef3c7; color: #d97706; }
        .status-approved { background: #dcfce7; color: #15803d; }
        .status-rejected { background: #fee2e2; color: #b91c1c; }

        .btn-view, .btn-print-action {
          padding: 6px 12px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 4px;
          cursor: pointer;
          border: 1px solid #cbd5e1;
          background: white;
          color: #475569;
          transition: all 0.2s;
        }

        .btn-view:hover {
          background: #f1f5f9;
        }

        .btn-print-action {
          background: #eff6ff;
          color: #2563eb;
          border-color: #bfdbfe;
        }

        .btn-print-action:hover {
          background: #dbeafe;
        }

        .loading-state, .empty-state {
          padding: 40px;
          text-align: center;
          background: white;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          color: #64748b;
          font-size: 14.5px;
        }

        /* Modal Dialog Styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.2s ease;
        }

        .modal-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          width: 100%;
          max-width: 500px;
          animation: scaleUp 0.2s ease;
          overflow: hidden;
        }

        .modal-card.details-card {
          max-width: 700px;
        }

        .modal-header {
          padding: 16px 20px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h3 {
          font-size: 16px;
          font-weight: 700;
          margin: 0;
          color: #0f172a;
        }

        .close-x {
          background: transparent;
          border: none;
          font-size: 24px;
          color: #94a3b8;
          cursor: pointer;
        }

        .close-x:hover {
          color: #475569;
        }

        .modal-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .modal-form-group label {
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .modal-form-group input {
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          padding: 10px;
          font-size: 14px;
        }

        .modal-footer {
          padding: 16px 20px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          background: #f8fafc;
        }

        .btn-modal-cancel {
          background: white;
          color: #475569;
          border: 1px solid #cbd5e1;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-modal-cancel:hover {
          background: #f1f5f9;
        }

        .btn-modal-confirm {
          background: #2563eb;
          color: white;
          border: none;
          padding: 8px 20px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-modal-confirm:hover {
          background: #1d4ed8;
        }

        /* Search Autocomplete relative suggestions */
        .search-relative {
          position: relative;
        }

        .suggestions-list {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          margin-top: 4px;
          max-height: 200px;
          overflow-y: auto;
          z-index: 100;
          list-style: none;
          padding: 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .suggestions-list li {
          padding: 10px 14px;
          cursor: pointer;
          font-size: 13.5px;
          border-bottom: 1px solid #f1f5f9;
        }

        .suggestions-list li:hover {
          background: #f1f5f9;
          color: #2563eb;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          background: #f8fafc;
          padding: 14px;
          border-radius: 6px;
          font-size: 13.5px;
        }

        .details-table th {
          background: #f1f5f9;
          font-weight: 600;
          font-size: 12.5px;
          color: #475569;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default Requisition

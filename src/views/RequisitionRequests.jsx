import React, { useState, useEffect } from 'react'
import { supabaseDb } from '../utils/apiDb'
import PrintableRIS from '../components/PrintableRIS'

const RequisitionRequests = () => {
  // Tabs state
  const [activeTab, setActiveTab] = useState('active')
  
  // Data states
  const [requisitions, setRequisitions] = useState([])
  const [offices, setOffices] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState(null)
  
  // Releasing items state (admin fills when approving)
  const [releaseData, setReleaseData] = useState({}) // { [itemId]: { quantityReleased, sourceOfficeId, remarks } }
  
  // Filtering & search states
  const [searchQuery, setSearchQuery] = useState('')
  const [officeFilter, setOfficeFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All') // For history tab

  // Printing state
  const [printingRequisition, setPrintingRequisition] = useState(null)

  // Alerts
  const [notification, setNotification] = useState(null)
  const [confirmDialog, setConfirmDialog] = useState(null)

  const showNotification = (type, message) => {
    setNotification({ type, message })
    setTimeout(() => setNotification(null), 4000)
  }

  // Load all requisitions and offices
  const loadData = async (showLoading = true) => {
    if (showLoading) setLoading(true)
    try {
      const [reqData, officeData] = await Promise.all([
        supabaseDb.getRequisitions(),
        supabaseDb.getOffices()
      ])
      setRequisitions(reqData || [])
      setOffices(officeData || [])
    } catch (err) {
      console.error('Error loading data:', err)
      if (showLoading) showNotification('error', 'Failed to load requisition requests')
    } finally {
      if (showLoading) setLoading(false)
    }
  }

  useEffect(() => {
    loadData(true)
    const intervalId = setInterval(() => {
      loadData(false)
    }, 5000) // Poll every 5 seconds for realtime updates
    return () => clearInterval(intervalId)
  }, [])

  // Open request details modal — reset releaseData
  const openRequestDetails = (request) => {
    setSelectedRequest(request)
    const initialRelease = {}
    request.items?.forEach(item => {
      initialRelease[item.id] = {
        quantityReleased: item.quantity,
        sourceOfficeId: null,
        remarks: ''
      }
    })
    setReleaseData(initialRelease)
  }

  // Handle Approve only
  const handleApprove = async (id) => {
    setConfirmDialog({
      title: 'Approve Request',
      message: 'Are you sure you want to approve this request?',
      onConfirm: async () => {
        try {
          const itemReleaseArray = Object.entries(releaseData).map(([itemId, data]) => ({
            requisitionItemId: parseInt(itemId),
            quantityReleased: parseInt(data.quantityReleased) || 0,
            sourceOfficeId: data.sourceOfficeId ? parseInt(data.sourceOfficeId) : null,
            remarks: data.remarks || ''
          }))
          await supabaseDb.updateRequisitionStatus(id, 'Approved', itemReleaseArray)
          showNotification('success', 'Request approved successfully')
          setSelectedRequest(null)
          loadData()
        } catch (err) {
          console.error('Error approving:', err)
          showNotification('error', err.message || 'Failed to approve request')
        }
      }
    })
  }

  // Handle Print Action
  const handlePrint = (req) => {
    setPrintingRequisition(req)
    setTimeout(() => {
      window.print()
      setPrintingRequisition(null)
    }, 200)
  }

  // Segment requisitions — Cancelled also goes to history
  const activeRequests = requisitions.filter(r => r.status === 'Pending')
  const historyRequests = requisitions.filter(r => r.status === 'Approved' || r.status === 'Cancelled')

  // Apply filters on Active requests
  const filteredActiveRequests = activeRequests.filter(req => {
    const officeName = req.office?.name || req.office || 'N/A'
    const matchesOffice = officeFilter === 'All' || officeName === officeFilter
    const matchesSearch = searchQuery === '' || req.items.some(item => 
      item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
    ) || req.risNo.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesOffice && matchesSearch
  })

  // Apply filters on History requests
  const filteredHistoryRequests = historyRequests.filter(req => {
    const officeName = req.office?.name || req.office || 'N/A'
    const matchesOffice = officeFilter === 'All' || officeName === officeFilter
    const matchesStatus = statusFilter === 'All' || req.status === statusFilter
    const matchesSearch = searchQuery === '' || req.items.some(item => 
      item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
    ) || req.risNo.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesOffice && matchesStatus && matchesSearch
  })

  // Check if a request has any stock-exceeded items (listed items only)
  const hasExceededStock = (request) => {
    return request.items?.some(item => {
      if (item.isUnlisted) return false
      // We don't have live stock here — but if isUnlisted false and item has available stock info
      return false // Will be determined server-side; flag via isUnlisted or admin review
    }) || request.items?.some(i => i.isUnlisted)
  }

  // Needs source office dropdown if item is unlisted
  const needsSourceOffice = (item) => item.isUnlisted

  const updateRelease = (itemId, field, value) => {
    setReleaseData(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], [field]: value }
    }))
  }

  return (
    <div className="page">
      {/* Confirm Dialog */}
      {confirmDialog && (
        <div className="modal-overlay no-print" style={{ zIndex: 12000 }}>
          <div className="card confirm-modal" style={{ maxWidth: '400px', width: '100%', margin: '0 20px', padding: '24px', background: '#ffffff', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '15px', color: '#1e293b' }}>{confirmDialog.title}</h3>
            <p style={{ color: '#475569', marginBottom: '24px', lineHeight: '1.5' }}>{confirmDialog.message}</p>
            <div className="modal-footer" style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: 'none', padding: 0, background: 'transparent' }}>
              <button className="btn-modal-cancel" onClick={() => setConfirmDialog(null)}>Cancel</button>
              <button className="btn-modal-confirm" onClick={() => {
                confirmDialog.onConfirm();
                setConfirmDialog(null);
              }}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* Alerts Notification */}
      {notification && (
        <div className={`toast toast-${notification.type}`} style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 10000 }}>
          <div className="toast-content">
            <span>{notification.type === 'success' ? '✅' : '❌'}</span>
            <span style={{ marginLeft: '8px' }}>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Printable template */}
      {printingRequisition && (
        <PrintableRIS requisition={printingRequisition} />
      )}

      <div className="page-header no-print">
        <h1 className="page-title">Requisition Requests</h1>
        <p className="page-description">Review, approve, and track requisition requests from offices</p>
      </div>

      {/* Tabs Menu */}
      <div className="tabs-container no-print">
        <button 
          className={`tab-btn ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => { setActiveTab('active'); setSearchQuery(''); setOfficeFilter('All') }}
        >
          Active Requests ({activeRequests.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => { setActiveTab('history'); setSearchQuery(''); setOfficeFilter('All'); setStatusFilter('All') }}
        >
          History ({historyRequests.length})
        </button>
      </div>

      {/* Filters section */}
      <div className="filters-card no-print">
        <div className="filter-group">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by item name or RIS No..."
            className="search-input"
          />
        </div>

        <div className="filter-group select-group">
          <label>Office:</label>
          <select value={officeFilter} onChange={(e) => setOfficeFilter(e.target.value)}>
            <option value="All">All Offices</option>
            {offices.map(o => (
              <option key={o.id} value={o.name}>{o.name}</option>
            ))}
          </select>
        </div>

        {activeTab === 'history' && (
          <div className="filter-group select-group">
            <label>Status:</label>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="All">All Status</option>
              <option value="Approved">Approved</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        )}
      </div>

      {/* Active/History List */}
      <div className="card no-print">
        {loading ? (
          <div className="loading-state">Loading requisitions...</div>
        ) : activeTab === 'active' ? (
          filteredActiveRequests.length === 0 ? (
            <div className="empty-state">No pending requisition requests found.</div>
          ) : (
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>RIS No.</th>
                    <th>Date</th>
                    <th>Requested By</th>
                    <th>Office</th>
                    <th>Purpose</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredActiveRequests.map(request => {
                    const officeName = request.office?.name || request.office || 'N/A'
                    const hasUnlisted = request.items?.some(i => i.isUnlisted)
                    return (
                      <tr key={request.id}>
                        <td><strong>{request.risNo}</strong></td>
                        <td>{new Date(request.requestDate).toLocaleDateString()}</td>
                        <td>
                          {request.requestedBy?.name || 'N/A'}<br/>
                          <span className="badge badge-info">{request.role || 'Staff'}</span>
                        </td>
                        <td>{officeName}</td>
                        <td className="purpose-cell-trunc">
                          {request.purpose || '-'}
                          {hasUnlisted && (
                            <span title="Contains unlisted items" style={{ marginLeft: 6, color: '#d97706' }}>⚠️ Unlisted item(s)</span>
                          )}
                        </td>
                        <td>
                          <span className="badge badge-warning">{request.status}</span>
                        </td>
                        <td>
                          <div className="actions" style={{ display: 'flex', gap: '8px' }}>
                            <button 
                              className="btn-approve font-sm"
                              onClick={() => {
                                openRequestDetails(request)
                              }}
                            >
                              Review & Approve
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )
        ) : (
          filteredHistoryRequests.length === 0 ? (
            <div className="empty-state">No history requisition requests found.</div>
          ) : (
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>RIS No.</th>
                    <th>Date</th>
                    <th>Requested By</th>
                    <th>Office</th>
                    <th>Items</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHistoryRequests.map(request => {
                    const officeName = request.office?.name || request.office || 'N/A'
                    return (
                      <tr key={request.id}>
                        <td><strong>{request.risNo}</strong></td>
                        <td>{new Date(request.requestDate).toLocaleDateString()}</td>
                        <td>
                          {request.requestedBy?.name || 'N/A'}<br/>
                          <span className="badge badge-info">{request.role || 'Staff'}</span>
                        </td>
                        <td>{officeName}</td>
                        <td>{request.items?.map(i => `${i.itemName} (x${i.quantity})`).join(', ') || 'N/A'}</td>
                        <td>
                          <span className={`badge ${request.status === 'Approved' ? 'badge-success' : 'badge-cancelled'}`}>
                            {request.status}
                          </span>
                        </td>
                        <td>
                          <div className="actions" style={{ display: 'flex', gap: '8px' }}>
                            <button 
                              className="btn-secondary font-sm"
                              onClick={() => openRequestDetails(request)}
                            >
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>

      {/* View / Approve Request Details Modal */}
      {selectedRequest && (
        <div className="modal-overlay no-print" onClick={() => setSelectedRequest(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Request Details: {selectedRequest.risNo}</h2>
              <button className="close-btn" onClick={() => setSelectedRequest(null)}>×</button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <h4 style={{ marginBottom: '4px', color: '#6b7280', fontSize: '13px' }}>Request Date</h4>
                  <p style={{ fontWeight: '600' }}>{new Date(selectedRequest.requestDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '4px', color: '#6b7280', fontSize: '13px' }}>Requested By</h4>
                  <p style={{ fontWeight: '600' }}>{selectedRequest.requestedBy?.name || 'N/A'} ({selectedRequest.role || 'Staff'})</p>
                  {selectedRequest.requestedByPrintedName && (
                    <p style={{ fontSize: '12px', color: '#6b7280' }}>Printed name: {selectedRequest.requestedByPrintedName}</p>
                  )}
                </div>
                <div>
                  <h4 style={{ marginBottom: '4px', color: '#6b7280', fontSize: '13px' }}>Office</h4>
                  <p style={{ fontWeight: '600' }}>{selectedRequest.office?.name || selectedRequest.office || 'N/A'}</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '4px', color: '#6b7280', fontSize: '13px' }}>Status</h4>
                  <span className={`badge ${ selectedRequest.status === 'Pending' ? 'badge-warning' : selectedRequest.status === 'Approved' ? 'badge-success' : 'badge-cancelled'}`}>
                    {selectedRequest.status}
                  </span>
                </div>
              </div>
              
              {/* Unlisted items notice */}
              {selectedRequest.items?.some(i => i.isUnlisted) && (
                <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 6, padding: '12px 16px', marginBottom: 16, fontSize: 13, color: '#92400e' }}>
                  ⚠️ This request contains <strong>unlisted item(s)</strong> — items not found in this office's inventory. Please select a source office to allocate these items from in the Releasing Items table below.
                </div>
              )}

              {/* Requested Items */}
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ marginBottom: '8px', color: '#6b7280', fontSize: '13px' }}>Requested Items</h4>
                <table className="table" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e5e7eb' }}>
                  <thead>
                    <tr style={{ background: '#f9fafb' }}>
                      <th style={{ border: '1px solid #e5e7eb', padding: '10px' }}>Stock No.</th>
                      <th style={{ border: '1px solid #e5e7eb', padding: '10px' }}>Unit</th>
                      <th style={{ border: '1px solid #e5e7eb', padding: '10px' }}>Description</th>
                      <th style={{ border: '1px solid #e5e7eb', padding: '10px', textAlign: 'center' }}>Qty</th>
                      <th style={{ border: '1px solid #e5e7eb', padding: '10px', textAlign: 'center' }}>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedRequest.items?.map((item, idx) => (
                      <tr key={idx}>
                        <td style={{ border: '1px solid #e5e7eb', padding: '10px', textAlign: 'center' }}>{item.isUnlisted ? '-' : (item.stockNumber || '-')}</td>
                        <td style={{ border: '1px solid #e5e7eb', padding: '10px', textAlign: 'center' }}>{item.isUnlisted ? '-' : item.unit}</td>
                        <td style={{ border: '1px solid #e5e7eb', padding: '10px' }}>
                          {item.itemName}
                          {item.isUnlisted && <span style={{ fontSize: 11, color: '#d97706', marginLeft: 6, fontWeight: 600 }}>[Unlisted]</span>}
                        </td>
                        <td style={{ border: '1px solid #e5e7eb', padding: '10px', textAlign: 'center' }}>{item.quantity}</td>
                        <td style={{ border: '1px solid #e5e7eb', padding: '10px', textAlign: 'center' }}>
                          <span style={{ fontSize: '11px', padding: '2px 6px', borderRadius: 4, background: item.isUnlisted ? '#fef3c7' : '#f0fdf4', color: item.isUnlisted ? '#d97706' : '#15803d', fontWeight: 600 }}>
                            {item.isUnlisted ? 'Unlisted' : 'Listed'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Releasing Items table — only for Pending (admin fills on approval) */}
              {selectedRequest.status === 'Pending' && (
                <div style={{ marginBottom: '16px' }}>
                  <h4 style={{ marginBottom: '8px', color: '#1d4ed8', fontSize: '13px', fontWeight: 700 }}>Releasing Item/s <span style={{ fontSize: 11, color: '#6b7280', fontWeight: 400 }}>(Fill in before approving)</span></h4>
                  <table className="table" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #bfdbfe' }}>
                    <thead>
                      <tr style={{ background: '#eff6ff' }}>
                        <th style={{ border: '1px solid #bfdbfe', padding: '10px' }}>Description</th>
                        <th style={{ border: '1px solid #bfdbfe', padding: '10px', textAlign: 'center' }}>Qty Requested</th>
                        <th style={{ border: '1px solid #bfdbfe', padding: '10px', textAlign: 'center' }}>Qty to Release</th>
                        <th style={{ border: '1px solid #bfdbfe', padding: '10px' }}>Source Office</th>
                        <th style={{ border: '1px solid #bfdbfe', padding: '10px' }}>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedRequest.items?.map((item, idx) => (
                        <tr key={idx}>
                          <td style={{ border: '1px solid #bfdbfe', padding: '8px' }}>
                            {item.itemName}
                            {item.isUnlisted && <span style={{ fontSize: 11, color: '#d97706', marginLeft: 6, fontWeight: 600 }}>[Unlisted]</span>}
                          </td>
                          <td style={{ border: '1px solid #bfdbfe', padding: '8px', textAlign: 'center' }}>{item.quantity}</td>
                          <td style={{ border: '1px solid #bfdbfe', padding: '8px', textAlign: 'center' }}>
                            <input
                              type="number"
                              min={0}
                              value={releaseData[item.id]?.quantityReleased ?? item.quantity}
                              onChange={e => updateRelease(item.id, 'quantityReleased', e.target.value)}
                              style={{ width: 70, border: '1px solid #93c5fd', borderRadius: 4, padding: '4px 6px', textAlign: 'center' }}
                            />
                          </td>
                          <td style={{ border: '1px solid #bfdbfe', padding: '8px' }}>
                            {/* Always show source office dropdown for unlisted; show for all for flexibility */}
                            <select
                              value={releaseData[item.id]?.sourceOfficeId || ''}
                              onChange={e => updateRelease(item.id, 'sourceOfficeId', e.target.value)}
                              style={{ width: '100%', border: '1px solid #93c5fd', borderRadius: 4, padding: '4px 6px', fontSize: 13 }}
                            >
                              <option value="">-- Same Office --</option>
                              {offices.map(o => (
                                <option key={o.id} value={o.id}>{o.name}</option>
                              ))}
                            </select>
                          </td>
                          <td style={{ border: '1px solid #bfdbfe', padding: '8px' }}>
                            <input
                              type="text"
                              value={releaseData[item.id]?.remarks || ''}
                              onChange={e => updateRelease(item.id, 'remarks', e.target.value)}
                              placeholder="Optional remarks..."
                              style={{ width: '100%', border: '1px solid #93c5fd', borderRadius: 4, padding: '4px 6px', fontSize: 13 }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Releasing Items display — for Approved view */}
              {selectedRequest.status === 'Approved' && selectedRequest.items?.some(i => i.release) && (
                <div style={{ marginBottom: '16px' }}>
                  <h4 style={{ marginBottom: '8px', color: '#1d4ed8', fontSize: '13px', fontWeight: 700 }}>Releasing Item/s</h4>
                  <table className="table" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #bfdbfe' }}>
                    <thead>
                      <tr style={{ background: '#eff6ff' }}>
                        <th style={{ border: '1px solid #bfdbfe', padding: '10px' }}>Description</th>
                        <th style={{ border: '1px solid #bfdbfe', padding: '10px', textAlign: 'center' }}>Qty Requested</th>
                        <th style={{ border: '1px solid #bfdbfe', padding: '10px', textAlign: 'center' }}>Qty Released</th>
                        <th style={{ border: '1px solid #bfdbfe', padding: '10px' }}>Source Office</th>
                        <th style={{ border: '1px solid #bfdbfe', padding: '10px' }}>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedRequest.items?.map((item, idx) => (
                        <tr key={idx}>
                          <td style={{ border: '1px solid #bfdbfe', padding: '10px' }}>{item.itemName}</td>
                          <td style={{ border: '1px solid #bfdbfe', padding: '10px', textAlign: 'center' }}>{item.quantity}</td>
                          <td style={{ border: '1px solid #bfdbfe', padding: '10px', textAlign: 'center' }}>{item.release?.quantityReleased ?? '-'}</td>
                          <td style={{ border: '1px solid #bfdbfe', padding: '10px' }}>{item.release?.sourceOffice?.name || 'Same Office'}</td>
                          <td style={{ border: '1px solid #bfdbfe', padding: '10px' }}>{item.release?.remarks || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div>
                <h4 style={{ marginBottom: '6px', color: '#6b7280', fontSize: '13px' }}>Purpose</h4>
                <p style={{ background: '#f9fafb', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', whiteSpace: 'pre-wrap' }}>
                  {selectedRequest.purpose || 'N/A'}
                </p>
              </div>
            </div>
            
            <div className="modal-footer">
              {selectedRequest.status === 'Pending' ? (
                <button 
                  className="btn-approve" 
                  onClick={() => handleApprove(selectedRequest.id)}
                >
                  Approve Request
                </button>
              ) : selectedRequest.status === 'Approved' ? (
                <button 
                  className="btn-print"
                  onClick={() => {
                    handlePrint(selectedRequest)
                    setSelectedRequest(null)
                  }}
                >
                  Print
                </button>
              ) : null}
              <button className="btn-secondary" onClick={() => setSelectedRequest(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .page { padding: 24px; max-width: 1400px; margin: 0 auto; }
        .page-header { margin-bottom: 24px; }
        .page-title { font-size: 28px; font-weight: 700; color: #1f2937; margin-bottom: 6px; }
        .page-description { color: #6b7280; font-size: 14px; }

        .tabs-container { display: flex; gap: 12px; border-bottom: 2px solid #e5e7eb; margin-bottom: 20px; }
        .tab-btn { padding: 12px 24px; font-size: 15px; font-weight: 600; color: #6b7280; background: transparent; border: none; cursor: pointer; transition: all 0.2s; border-bottom: 2px solid transparent; margin-bottom: -2px; }
        .tab-btn:hover { color: #3b82f6; }
        .tab-btn.active { color: #3b82f6; border-bottom-color: #3b82f6; }

        .filters-card { background: white; border-radius: 8px; padding: 16px 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; display: flex; align-items: center; gap: 24px; margin-bottom: 20px; }
        .filter-group { flex: 1; }
        .filter-group.select-group { flex: 0 1 auto; display: flex; align-items: center; gap: 10px; }
        .filter-group label { font-size: 13.5px; font-weight: 600; color: #4b5563; }
        .search-input { width: 100%; border: 1px solid #d1d5db; border-radius: 6px; padding: 9px 14px; font-size: 14px; }
        .filter-group select { border: 1px solid #d1d5db; border-radius: 6px; padding: 9px 12px; font-size: 14px; min-width: 180px; }

        .card { background: white; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; overflow: hidden; }
        .table-container { overflow-x: auto; }
        .table { width: 100%; border-collapse: collapse; }
        .table th, .table td { padding: 14px 20px; text-align: left; border-bottom: 1px solid #e5e7eb; font-size: 14.5px; }
        .table th { font-weight: 600; color: #374151; background: #f9fafb; }
        .table td { color: #4b5563; }
        .purpose-cell-trunc { max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        .badge { display: inline-block; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: capitalize; }
        .badge-success { background: #dcfce7; color: #15803d; }
        .badge-warning { background: #fef3c7; color: #d97706; }
        .badge-danger { background: #fee2e2; color: #b91c1c; }
        .badge-info { background: #dbeafe; color: #1e40af; }
        .badge-cancelled { background: #f1f5f9; color: #475569; }

        .btn-secondary { background: #f3f4f6; color: #1f2937; border: 1px solid #d1d5db; padding: 6px 12px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
        .btn-secondary:hover { background: #e5e7eb; }
        .btn-approve { background: #10b981; color: white; border: none; padding: 6px 14px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
        .btn-approve:hover { background: #059669; }
        .btn-print { background: #3b82f6; color: white; border: none; padding: 6px 14px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
        .btn-print:hover { background: #2563eb; }
        .font-sm { font-size: 12.5px; }

        .loading-state, .empty-state { padding: 40px; text-align: center; color: #6b7280; font-size: 15px; }

        .btn-modal-cancel { background: white; color: #475569; border: 1px solid #cbd5e1; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; }
        .btn-modal-cancel:hover { background: #f1f5f9; }
        .btn-modal-confirm { background: #2563eb; color: white; border: none; padding: 8px 20px; border-radius: 6px; font-weight: 600; cursor: pointer; }
        .btn-modal-confirm:hover { background: #1d4ed8; }

        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; z-index: 1000; animation: fadeIn 0.2s ease; }
        .modal { background: white; border-radius: 10px; max-width: 850px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); animation: scaleUp 0.2s ease; }
        .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; background: white; z-index: 10; }
        .modal-title { font-size: 17px; font-weight: 700; color: #111827; }
        .close-btn { background: none; border: none; font-size: 24px; color: #9ca3af; cursor: pointer; }
        .close-btn:hover { color: #374151; }
        .modal-body { padding: 20px; }
        .modal-footer { display: flex; justify-content: flex-end; gap: 12px; padding: 16px 20px; border-top: 1px solid #e5e7eb; background: #f9fafb; position: sticky; bottom: 0; }

        .toast { display: flex; align-items: center; padding: 14px 20px; border-radius: 8px; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-size: 14px; font-weight: 500; }
        .toast-content { display: flex; align-items: center; }
        .toast-success { background: #dcfce7; color: #15803d; border: 1px solid #bbf7d0; }
        .toast-error { background: #fee2e2; color: #b91c1c; border: 1px solid #fecaca; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        @media print { .no-print { display: none !important; } }
      `}</style>
    </div>
  )
}

export default RequisitionRequests

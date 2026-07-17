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
  const [requestedByPrintedName, setRequestedByPrintedName] = useState('')
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
  const [isUnlisted, setIsUnlisted] = useState(false)
  const [unlistedName, setUnlistedName] = useState('')
  const [stockWarning, setStockWarning] = useState(null) // stock exceeded warning in modal
  
  // Edit modal states
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingRequisition, setEditingRequisition] = useState(null)
  const [editPurpose, setEditPurpose] = useState('')
  const [editPrintedName, setEditPrintedName] = useState('')
  const [editItems, setEditItems] = useState([])
  const [showEditAddModal, setShowEditAddModal] = useState(false)
  const [editSearchQuery, setEditSearchQuery] = useState('')
  const [editSuggestions, setEditSuggestions] = useState([])
  const [editSelectedItem, setEditSelectedItem] = useState(null)
  const [editStockNumber, setEditStockNumber] = useState('')
  const [editUnit, setEditUnit] = useState('')
  const [editQuantity, setEditQuantity] = useState(1)
  const [editIsUnlisted, setEditIsUnlisted] = useState(false)
  const [editUnlistedName, setEditUnlistedName] = useState('')

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
  const [confirmDialog, setConfirmDialog] = useState(null)
  
  const showNotification = (type, message) => {
    setNotification({ type, message })
    setTimeout(() => setNotification(null), 4000)
  }

  // Current date
  const todayDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Auto-generate RIS No. when form tab is opened
  useEffect(() => {
    if (activeTab === 'form' && !risNo) {
      supabaseDb.generateRisNo().then(res => {
        setRisNo(res.risNo)
      }).catch(err => console.error('Error generating RIS No.:', err))
    }
  }, [activeTab])

  // Load inventory items for autocomplete search
  useEffect(() => {
    const fetchItems = async () => {
      try {
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
  const fetchHistory = async (showLoading = true) => {
    if (showLoading) setLoadingHistory(true)
    try {
      const data = await supabaseDb.getRequisitions()
      const userHistory = data.filter(req => req.requestedById === currentUser?.id)
      setHistory(userHistory)
    } catch (err) {
      console.error('Error fetching history:', err)
    } finally {
      if (showLoading) setLoadingHistory(false)
    }
  }

  useEffect(() => {
    if (activeTab === 'history') {
      fetchHistory(true)
      const intervalId = setInterval(() => {
        fetchHistory(false)
      }, 5000)
      return () => clearInterval(intervalId)
    }
  }, [activeTab])

  // Handle autocomplete search for Add Item modal
  useEffect(() => {
    if (isUnlisted) {
      setSuggestions([])
      return
    }
    if (searchQuery.trim() === '') {
      setSuggestions([])
      return
    }
    const filtered = itemsList.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSuggestions(filtered)
  }, [searchQuery, itemsList, isUnlisted])

  // Handle autocomplete for edit modal
  useEffect(() => {
    if (editIsUnlisted) {
      setEditSuggestions([])
      return
    }
    if (editSearchQuery.trim() === '') {
      setEditSuggestions([])
      return
    }
    const filtered = itemsList.filter(item => 
      item.name.toLowerCase().includes(editSearchQuery.toLowerCase())
    )
    setEditSuggestions(filtered)
  }, [editSearchQuery, itemsList, editIsUnlisted])

  // Check stock warning when quantity changes in Add Item modal
  useEffect(() => {
    if (selectedItem && !isUnlisted) {
      const availableStock = selectedItem.batches?.reduce((sum, b) => sum + (b.stock || 0), 0) ?? 0
      if (quantity > availableStock) {
        setStockWarning(`⚠️ Requested quantity (${quantity}) exceeds available stock (${availableStock}). Admin will allocate from another office.`)
      } else {
        setStockWarning(null)
      }
    } else {
      setStockWarning(null)
    }
  }, [quantity, selectedItem, isUnlisted])

  const handleSelectItem = (item) => {
    setSelectedItem(item)
    setSearchQuery(item.name)
    const sNo = item.batches?.[0]?.stockNumber || 'N/A'
    setStockNumber(sNo)
    setUnit(item.unit || 'Pieces')
    setSuggestions([])
  }

  const handleAddConfirm = () => {
    if (isUnlisted) {
      if (!unlistedName.trim()) {
        showNotification('error', 'Please enter the item name for the unlisted item')
        return
      }
      if (quantity <= 0) {
        showNotification('error', 'Quantity must be greater than zero')
        return
      }
      const newItem = {
        inventoryItemId: null,
        itemName: unlistedName.trim(),
        stockNumber: '',
        unit: '',
        quantity: parseInt(quantity),
        isUnlisted: true
      }
      setAddedItems([...addedItems, newItem])
      resetAddModal()
      showNotification('success', 'Unlisted item added')
      return
    }

    if (!selectedItem) {
      showNotification('error', 'Please select a valid item from suggestions')
      return
    }
    if (quantity <= 0) {
      showNotification('error', 'Quantity must be greater than zero')
      return
    }
    if (addedItems.some(i => i.inventoryItemId === selectedItem.id)) {
      showNotification('error', 'This item is already added to the table')
      return
    }

    const newItem = {
      inventoryItemId: selectedItem.id,
      itemName: selectedItem.name,
      stockNumber,
      unit,
      quantity: parseInt(quantity),
      isUnlisted: false,
      availableStock: selectedItem.batches?.reduce((sum, b) => sum + (b.stock || 0), 0) ?? 0
    }

    setAddedItems([...addedItems, newItem])
    resetAddModal()
    showNotification('success', 'Item added successfully')
  }

  const resetAddModal = () => {
    setSearchQuery('')
    setSelectedItem(null)
    setStockNumber('')
    setUnit('')
    setQuantity(1)
    setIsUnlisted(false)
    setUnlistedName('')
    setStockWarning(null)
    setShowAddModal(false)
  }

  const handleRemoveItem = (index) => {
    setAddedItems(addedItems.filter((_, i) => i !== index))
  }

  const handleFormReset = () => {
    setRequestedByPrintedName('')
    setPurpose('')
    setAddedItems([])
    // Re-generate RIS No.
    supabaseDb.generateRisNo().then(res => setRisNo(res.risNo)).catch(() => {})
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!risNo.trim()) {
      showNotification('error', 'RIS No. is required')
      return
    }
    if (!requestedByPrintedName.trim()) {
      showNotification('error', 'Please enter your printed name')
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

    setConfirmDialog({
      title: 'Submit Requisition',
      message: 'Are you sure you want to submit this requisition?',
      onConfirm: async () => {
        try {
          const payload = {
            risNo: risNo.trim(),
            requestedByPrintedName: requestedByPrintedName.trim(),
            purpose: purpose.trim(),
            requestedById: currentUser.id,
            officeId: userOfficeId,
            items: addedItems.map(i => ({
              inventoryItemId: i.inventoryItemId || null,
              itemName: i.itemName,
              quantity: i.quantity,
              unit: i.unit || '',
              stockNumber: i.stockNumber || null,
              isUnlisted: i.isUnlisted || false
            }))
          }

          await supabaseDb.addRequisition(payload)
          showNotification('success', 'Requisition request submitted successfully!')
          handleFormReset()
          setActiveTab('history')
        } catch (err) {
          showNotification('error', err.message || 'Failed to submit requisition')
        }
      }
    })
  }

  // Print function — only for Pending
  const handlePrint = (requisition) => {
    setPrintingRequisition(requisition)
    setTimeout(() => {
      window.print()
      setPrintingRequisition(null)
    }, 200)
  }

  // Cancel a pending requisition
  const handleCancel = async (req) => {
    setConfirmDialog({
      title: 'Cancel Requisition',
      message: `Are you sure you want to cancel requisition ${req.risNo}? This cannot be undone.`,
      onConfirm: async () => {
        try {
          await supabaseDb.cancelRequisition(req.id)
          showNotification('success', 'Requisition cancelled successfully')
          fetchHistory()
        } catch (err) {
          showNotification('error', err.message || 'Failed to cancel requisition')
        }
      }
    })
  }

  // Open edit modal
  const handleOpenEdit = (req) => {
    setEditingRequisition(req)
    setEditPurpose(req.purpose || '')
    setEditPrintedName(req.requestedByPrintedName || '')
    setEditItems(req.items?.map(i => ({
      inventoryItemId: i.inventoryItemId,
      itemName: i.itemName,
      stockNumber: i.stockNumber || '',
      unit: i.unit || '',
      quantity: i.quantity,
      isUnlisted: i.isUnlisted || false
    })) || [])
    setShowEditModal(true)
  }

  const handleEditSelectItem = (item) => {
    setEditSelectedItem(item)
    setEditSearchQuery(item.name)
    setEditStockNumber(item.batches?.[0]?.stockNumber || 'N/A')
    setEditUnit(item.unit || 'Pieces')
    setEditSuggestions([])
  }

  const handleEditAddItem = () => {
    if (editIsUnlisted) {
      if (!editUnlistedName.trim()) return
      setEditItems([...editItems, {
        inventoryItemId: null,
        itemName: editUnlistedName.trim(),
        stockNumber: '', unit: '',
        quantity: parseInt(editQuantity),
        isUnlisted: true
      }])
      setEditSearchQuery(''); setEditSelectedItem(null); setEditStockNumber(''); setEditUnit('')
      setEditQuantity(1); setEditIsUnlisted(false); setEditUnlistedName('')
      setShowEditAddModal(false)
      return
    }
    if (!editSelectedItem) return
    setEditItems([...editItems, {
      inventoryItemId: editSelectedItem.id,
      itemName: editSelectedItem.name,
      stockNumber: editStockNumber,
      unit: editUnit,
      quantity: parseInt(editQuantity),
      isUnlisted: false
    }])
    setEditSearchQuery(''); setEditSelectedItem(null); setEditStockNumber(''); setEditUnit('')
    setEditQuantity(1); setEditIsUnlisted(false); setEditUnlistedName('')
    setShowEditAddModal(false)
  }

  const handleEditSubmit = async () => {
    if (!editPrintedName.trim()) { showNotification('error', 'Printed name is required'); return }
    if (!editPurpose.trim()) { showNotification('error', 'Purpose is required'); return }
    if (editItems.length === 0) { showNotification('error', 'At least one item is required'); return }

    setConfirmDialog({
      title: 'Save Changes',
      message: 'Are you sure you want to save the changes to this requisition?',
      onConfirm: async () => {
        try {
          await supabaseDb.updateRequisition(editingRequisition.id, {
            requestedByPrintedName: editPrintedName.trim(),
            purpose: editPurpose.trim(),
            items: editItems
          })
          showNotification('success', 'Requisition updated successfully')
          setShowEditModal(false)
          setEditingRequisition(null)
          fetchHistory()
        } catch (err) {
          showNotification('error', err.message || 'Failed to update requisition')
        }
      }
    })
  }

  // Filter history — no Rejected option since admin can't reject
  const filteredHistory = history.filter(req => {
    const matchesSearch = searchHistoryQuery === '' || req.items.some(item => 
      item.itemName.toLowerCase().includes(searchHistoryQuery.toLowerCase())
    ) || req.risNo.toLowerCase().includes(searchHistoryQuery.toLowerCase())
    const matchesStatus = statusFilter === 'All' || req.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="requisition-page">
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
                <h5>BOHOL PROVINCIAL DIAGNOSTIC &amp; AMBULATORY CARE CENTER</h5>
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

            {/* Metadata Fields Section - 2 columns (removed Responsibility Center Code) */}
            <div className="metadata-fields-grid" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
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
                  <label>RIS No.:</label>
                  <input 
                    type="text" 
                    value={risNo} 
                    readOnly
                    className="readonly-input"
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
                    <th style={{ width: '45%' }}>Description</th>
                    <th style={{ width: '12%' }}>Quantity</th>
                    <th style={{ width: '8%' }} className="no-print">Type</th>
                    <th style={{ width: '60px' }} className="no-print">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {addedItems.map((item, index) => (
                    <tr key={index}>
                      <td className="text-center">{item.isUnlisted ? '-' : (item.stockNumber || '-')}</td>
                      <td className="text-center">{item.isUnlisted ? '-' : item.unit}</td>
                      <td>
                        {item.itemName}
                        {item.isUnlisted && <span style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 600, marginLeft: 6 }}>[Unlisted]</span>}
                        {!item.isUnlisted && item.availableStock !== undefined && item.quantity > item.availableStock && (
                          <span style={{ fontSize: '11px', color: '#ef4444', marginLeft: 6 }}>⚠️ Exceeds stock ({item.availableStock} available)</span>
                        )}
                      </td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-center no-print">
                        <span style={{ fontSize: '11px', padding: '2px 6px', borderRadius: 4, background: item.isUnlisted ? '#fef3c7' : '#f0fdf4', color: item.isUnlisted ? '#d97706' : '#15803d', fontWeight: 600 }}>
                          {item.isUnlisted ? 'Unlisted' : 'Listed'}
                        </span>
                      </td>
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
                    <td colSpan={6} className="plus-btn-row text-center">
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
                    <td className="text-center val">
                      <input
                        type="text"
                        value={requestedByPrintedName}
                        onChange={e => setRequestedByPrintedName(e.target.value)}
                        placeholder="Enter your full name"
                        style={{ width: '100%', border: '1px solid #cbd5e1', borderRadius: 4, padding: '4px 8px', fontSize: 13, textAlign: 'center' }}
                      />
                    </td>
                    <td className="text-center val" style={{ whiteSpace: 'nowrap' }}>Alexchito M. Lofranco</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="row-title">Designation :</td>
                    <td className="text-center val">Office Staff</td>
                    <td className="text-center val" style={{ whiteSpace: 'nowrap' }}>Supply Officer II</td>
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
                  placeholder="Search by item name or RIS No..."
                />
              </div>
              <div className="filter-select-box">
                <label>Status:</label>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Cancelled">Cancelled</option>
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
                          {req.items?.some(i => !i.isUnlisted && i.quantity > (i.availableStock ?? Infinity)) && (
                            <span style={{ color: '#f59e0b', marginLeft: 6 }}>⚠️</span>
                          )}
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

      {/* ===================== Add Item Modal Dialog ===================== */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => { resetAddModal() }}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add Requisition Item</h3>
              <button className="close-x" onClick={() => resetAddModal()}>×</button>
            </div>
            <div className="modal-body">

              {/* Unlisted checkbox */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: '#fefce8', border: '1px solid #fde68a', borderRadius: 6 }}>
                <input
                  type="checkbox"
                  id="unlistedCheck"
                  checked={isUnlisted}
                  onChange={e => {
                    setIsUnlisted(e.target.checked)
                    setSelectedItem(null)
                    setSearchQuery('')
                    setStockNumber('')
                    setUnit('')
                    setStockWarning(null)
                    setSuggestions([])
                  }}
                  style={{ width: 16, height: 16, cursor: 'pointer' }}
                />
                <label htmlFor="unlistedCheck" style={{ fontSize: 13, fontWeight: 600, color: '#92400e', cursor: 'pointer' }}>
                  Unlisted Item — Item not found in inventory (admin will source from another office)
                </label>
              </div>

              {isUnlisted ? (
                <div className="modal-form-group">
                  <label>Item Name / Description <span className="text-danger">*</span></label>
                  <input 
                    type="text" 
                    value={unlistedName}
                    onChange={e => setUnlistedName(e.target.value)}
                    placeholder="Enter item description..."
                  />
                </div>
              ) : (
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
                          {item.name} (Available: {item.batches?.reduce((s, b) => s + (b.stock || 0), 0) ?? 0})
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* No results hint */}
                  {searchQuery.trim() !== '' && suggestions.length === 0 && !selectedItem && (
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
                      No items found. Check "Unlisted Item" above to submit a request for an unlisted item.
                    </div>
                  )}
                </div>
              )}

              {!isUnlisted && (
                <>
                  <div className="modal-form-group">
                    <label>Stock No.</label>
                    <input type="text" value={stockNumber} readOnly className="readonly-input" />
                  </div>

                  <div className="modal-form-group">
                    <label>Unit</label>
                    <input type="text" value={unit} readOnly className="readonly-input" />
                  </div>
                </>
              )}

              <div className="modal-form-group">
                <label>Quantity <span className="text-danger">*</span></label>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min={1}
                />
              </div>

              {/* Stock exceeded warning */}
              {stockWarning && (
                <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 6, padding: '10px 14px', fontSize: 13, color: '#92400e', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ fontSize: 16 }}>⚠️</span>
                  <span>{stockWarning}</span>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn-modal-cancel" onClick={() => resetAddModal()}>Cancel</button>
              <button className="btn-modal-confirm" onClick={handleAddConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* ===================== View History Item Details Modal ===================== */}
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
                <div><strong>Office:</strong> {selectedHistoryItem.office?.name || 'N/A'}</div>
                <div>
                  <strong>Status: </strong>
                  <span className={`status-badge status-${selectedHistoryItem.status.toLowerCase()}`}>
                    {selectedHistoryItem.status}
                  </span>
                </div>
              </div>

              {/* Stock exceeded warning in detail view */}
              {selectedHistoryItem.items?.some(i => !i.isUnlisted && i.quantity > (i.availableStock ?? Infinity)) && (
                <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 6, padding: '10px 14px', fontSize: 13, color: '#92400e' }}>
                  ⚠️ Some items in this request exceed available stock. Admin will allocate the remaining quantity from another office.
                </div>
              )}

              <div className="details-section" style={{ marginTop: '8px' }}>
                <strong>Requested Items:</strong>
                <table className="details-table" style={{ width: '100%', marginTop: '8px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Stock No.</th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Unit</th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Qty</th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedHistoryItem.items?.map((item, index) => (
                      <tr key={index}>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.isUnlisted ? '-' : (item.stockNumber || '-')}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.isUnlisted ? '-' : item.unit}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                          {item.itemName}
                          {item.isUnlisted && <span style={{ fontSize: 11, color: '#d97706', marginLeft: 6, fontWeight: 600 }}>[Unlisted]</span>}
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.quantity}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                          <span style={{ fontSize: '11px', padding: '2px 6px', borderRadius: 4, background: item.isUnlisted ? '#fef3c7' : '#f0fdf4', color: item.isUnlisted ? '#d97706' : '#15803d', fontWeight: 600 }}>
                            {item.isUnlisted ? 'Unlisted' : 'Listed'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Releasing Items section — visible only when Approved */}
              {selectedHistoryItem.status === 'Approved' && selectedHistoryItem.items?.some(i => i.release) && (
                <div className="details-section" style={{ marginTop: '16px' }}>
                  <strong style={{ color: '#1d4ed8' }}>Releasing Item/s:</strong>
                  <table className="details-table" style={{ width: '100%', marginTop: '8px', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: '#eff6ff' }}>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Qty Requested</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Qty Released</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Source Office</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedHistoryItem.items?.map((item, index) => (
                        <tr key={index}>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.itemName}</td>
                          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.quantity}</td>
                          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                            {item.release?.quantityReleased ?? '-'}
                          </td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            {item.release?.sourceOffice?.name || '-'}
                          </td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            {item.release?.remarks || '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="details-section" style={{ marginTop: '12px' }}>
                <strong>Purpose:</strong>
                <p style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px', marginTop: '4px' }}>
                  {selectedHistoryItem.purpose}
                </p>
              </div>
            </div>
            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              {selectedHistoryItem.status === 'Pending' && (
                <>
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
                  <button 
                    className="btn-edit-action" 
                    onClick={() => {
                      handleOpenEdit(selectedHistoryItem)
                      setSelectedHistoryItem(null)
                    }}
                    style={{ padding: '8px 16px', fontSize: '14px' }}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-cancel-action" 
                    onClick={() => {
                      handleCancel(selectedHistoryItem)
                      setSelectedHistoryItem(null)
                    }}
                    style={{ padding: '8px 16px', fontSize: '14px' }}
                  >
                    Cancel Requisition
                  </button>
                </>
              )}
              <button className="btn-modal-cancel" onClick={() => setSelectedHistoryItem(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ===================== Edit Requisition Modal ===================== */}
      {showEditModal && editingRequisition && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-card details-card" style={{ maxWidth: 750 }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Edit Requisition: {editingRequisition.risNo}</h3>
              <button className="close-x" onClick={() => setShowEditModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="modal-form-group">
                <label>Requested By (Printed Name) *</label>
                <input type="text" value={editPrintedName} onChange={e => setEditPrintedName(e.target.value)} placeholder="Enter your full name" />
              </div>
              <div className="modal-form-group">
                <label>Purpose *</label>
                <textarea value={editPurpose} onChange={e => setEditPurpose(e.target.value)} rows={3} style={{ border: '1px solid #cbd5e1', borderRadius: 6, padding: 10, fontSize: 14, resize: 'vertical' }} />
              </div>
              <div>
                <strong style={{ fontSize: 13 }}>Items:</strong>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 8, fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc' }}>
                      <th style={{ border: '1px solid #e2e8f0', padding: 8 }}>Description</th>
                      <th style={{ border: '1px solid #e2e8f0', padding: 8 }}>Qty</th>
                      <th style={{ border: '1px solid #e2e8f0', padding: 8 }}>Type</th>
                      <th style={{ border: '1px solid #e2e8f0', padding: 8 }}>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {editItems.map((item, idx) => (
                      <tr key={idx}>
                        <td style={{ border: '1px solid #e2e8f0', padding: 8 }}>{item.itemName}</td>
                        <td style={{ border: '1px solid #e2e8f0', padding: 8, textAlign: 'center' }}>{item.quantity}</td>
                        <td style={{ border: '1px solid #e2e8f0', padding: 8, textAlign: 'center' }}>
                          <span style={{ fontSize: '11px', padding: '2px 6px', borderRadius: 4, background: item.isUnlisted ? '#fef3c7' : '#f0fdf4', color: item.isUnlisted ? '#d97706' : '#15803d', fontWeight: 600 }}>
                            {item.isUnlisted ? 'Unlisted' : 'Listed'}
                          </span>
                        </td>
                        <td style={{ border: '1px solid #e2e8f0', padding: 8, textAlign: 'center' }}>
                          <button type="button" className="btn-delete" onClick={() => setEditItems(editItems.filter((_, i) => i !== idx))}>×</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button type="button" className="btn-add-item" style={{ marginTop: 8, padding: '6px', fontSize: 16 }} onClick={() => setShowEditAddModal(true)}>+ Add Item</button>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-modal-cancel" onClick={() => setShowEditModal(false)}>Cancel</button>
              <button className="btn-modal-confirm" onClick={handleEditSubmit}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit — Add Item Sub-modal */}
      {showEditAddModal && (
        <div className="modal-overlay" style={{ zIndex: 11000 }} onClick={() => setShowEditAddModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add Item to Requisition</h3>
              <button className="close-x" onClick={() => setShowEditAddModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: '#fefce8', border: '1px solid #fde68a', borderRadius: 6 }}>
                <input type="checkbox" id="editUnlistedCheck" checked={editIsUnlisted} onChange={e => { setEditIsUnlisted(e.target.checked); setEditSelectedItem(null); setEditSearchQuery('') }} style={{ width: 16, height: 16 }} />
                <label htmlFor="editUnlistedCheck" style={{ fontSize: 13, fontWeight: 600, color: '#92400e', cursor: 'pointer' }}>Unlisted Item</label>
              </div>
              {editIsUnlisted ? (
                <div className="modal-form-group">
                  <label>Item Name *</label>
                  <input type="text" value={editUnlistedName} onChange={e => setEditUnlistedName(e.target.value)} placeholder="Enter item name..." />
                </div>
              ) : (
                <div className="modal-form-group search-relative">
                  <label>Description *</label>
                  <input type="text" value={editSearchQuery} onChange={e => setEditSearchQuery(e.target.value)} placeholder="Type to search..." autoComplete="off" />
                  {editSuggestions.length > 0 && (
                    <ul className="suggestions-list">
                      {editSuggestions.map(item => (
                        <li key={item.id} onClick={() => handleEditSelectItem(item)}>{item.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              <div className="modal-form-group">
                <label>Quantity *</label>
                <input type="number" value={editQuantity} onChange={e => setEditQuantity(e.target.value)} min={1} />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-modal-cancel" onClick={() => setShowEditAddModal(false)}>Cancel</button>
              <button className="btn-modal-confirm" onClick={handleEditAddItem}>Add</button>
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

        .tab-btn:hover { color: #3b82f6; }
        .tab-btn.active { color: #3b82f6; border-bottom-color: #3b82f6; }

        .ris-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
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
          width: 90px; height: 90px;
          display: flex; align-items: center; justify-content: center;
          background: transparent;
        }
        .logo-placeholder-box img { width: 100%; height: 100%; object-fit: contain; }

        .header-text-box { text-align: center; padding: 0 20px; }
        .header-text-box h2 { font-size: 13px; font-weight: normal; margin: 0 0 2px 0; color: #020617; }
        .header-text-box h3 { font-size: 14px; font-weight: bold; margin: 0 0 2px 0; }
        .subheading-city { font-size: 12px; margin: 0 0 4px 0; }
        .header-text-box h4 { font-size: 15px; font-weight: bold; margin: 0 0 2px 0; color: #1e3a8a; }
        .header-text-box h5 { font-size: 13px; font-weight: bold; margin: 0 0 4px 0; }
        .contact-details { font-size: 11px; color: #475569; }

        .ris-title-container {
          border: 2px solid #000000;
          background: #f8fafc;
          text-align: center;
          padding: 12px;
          margin: 20px 0 0 0;
        }
        .ris-title-container h1 {
          font-size: 20px; font-weight: 800; margin: 0; color: #0f172a; letter-spacing: 0.5px;
        }

        .metadata-fields-grid {
          display: grid;
          border: 1px solid #000000;
          border-top: none;
          margin: 0;
        }
        .meta-col { padding: 15px; display: flex; flex-direction: column; gap: 12px; }
        .meta-col.border-left { border-left: 1px solid #000000; }
        .field-group { display: flex; flex-direction: column; gap: 6px; }
        .field-group label { font-size: 12px; font-weight: 700; color: #000000; }
        .field-group input { border: 1px solid #000000; border-radius: 4px; padding: 8px 12px; font-size: 13.5px; transition: all 0.2s; }
        .field-group input:focus { border-color: #3b82f6; outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
        .readonly-input { background-color: #f1f5f9; color: #475569; font-weight: 600; border-color: #000000 !important; cursor: not-allowed; }

        .requisition-label-bar {
          border-left: 1px solid #000000; border-right: 1px solid #000000;
          border-top: none; border-bottom: none;
          padding: 8px; text-align: center; font-style: italic;
          font-weight: bold; letter-spacing: 1px; font-size: 15px;
          background: #f8fafc; margin: 0;
        }

        .table-wrapper { overflow-x: auto; margin: 0; }
        .ris-items-table { width: 100%; border-collapse: collapse; border: 1px solid #000000; margin-bottom: 20px; }
        .ris-items-table th, .ris-items-table td { border: 1px solid #000000; padding: 10px 12px; font-size: 14px; }
        .ris-items-table td { height: 38px; }
        .ris-items-table th { background: #f8fafc; font-weight: bold; color: #1e293b; text-align: left; }
        .ris-items-table th.text-center, .ris-items-table td.text-center { text-align: center; }

        .btn-delete {
          background: #fee2e2; color: #ef4444; border: none; width: 28px; height: 28px;
          border-radius: 50%; cursor: pointer; font-size: 18px; line-height: 1;
          display: flex; align-items: center; justify-content: center; margin: 0 auto; transition: all 0.2s;
        }
        .btn-delete:hover { background: #ef4444; color: white; }

        .plus-btn-row { background: #f8fafc; }
        .btn-add-item {
          background: #eff6ff; color: #2563eb; border: 1px dashed #bfdbfe;
          width: 100%; padding: 8px; font-size: 20px; font-weight: bold;
          cursor: pointer; border-radius: 6px; transition: all 0.2s;
        }
        .btn-add-item:hover { background: #dbeafe; border-color: #3b82f6; }

        .purpose-section { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
        .purpose-section label { font-size: 14px; font-weight: 700; color: #1e293b; }
        .purpose-section textarea { border: 2px solid #000000; border-radius: 4px; padding: 12px; font-size: 14px; resize: vertical; transition: all 0.2s; }
        .purpose-section textarea:focus { outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }

        .signature-template-container { margin-bottom: 30px; overflow-x: auto; }
        .sig-table { width: 100%; border-collapse: collapse; border: 1px solid #000000; }
        .sig-table th, .sig-table td { border: 1px solid #000000; padding: 8px 12px; font-size: 13px; height: 35px; text-align: center; }
        .sig-table th { background: #f8fafc; font-weight: bold; text-align: center; border-top: 2px solid #000000; border-bottom: 2px solid #000000; }
        .sig-table th:first-child { border-left: 2px solid #000000; }
        .sig-table th:last-child { border-right: 2px solid #000000; }
        .sig-table tr.signature-row td { height: 60px; }
        .sig-table td.row-title { font-weight: bold; background: #f8fafc; text-align: left; }
        .sig-table td.val { font-weight: 600; color: #1e293b; text-align: center; }

        .form-actions { display: flex; justify-content: flex-end; gap: 16px; }
        .btn-cancel { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; padding: 12px 30px; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s; }
        .btn-cancel:hover { background: #e2e8f0; }
        .btn-submit { background: #3b82f6; color: white; border: none; padding: 12px 36px; border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; box-shadow: 0 2px 4px rgba(59,130,246,0.2); transition: all 0.2s; }
        .btn-submit:hover { background: #2563eb; box-shadow: 0 4px 6px rgba(37,99,235,0.3); }

        .filters-card { background: white; border-radius: 8px; padding: 16px; border: 1px solid #e2e8f0; display: flex; gap: 20px; margin-bottom: 20px; }
        .search-input-box { flex: 1; }
        .search-input-box input { width: 100%; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px 14px; font-size: 14px; }
        .filter-select-box { display: flex; align-items: center; gap: 10px; }
        .filter-select-box label { font-size: 13.5px; font-weight: 600; color: #475569; }
        .filter-select-box select { border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; font-size: 14px; min-width: 150px; }

        .history-table-wrapper { background: white; border-radius: 8px; border: 1px solid #e2e8f0; overflow-x: auto; }
        .history-table { width: 100%; border-collapse: collapse; }
        .history-table th, .history-table td { padding: 14px 16px; text-align: left; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
        .history-table th { background: #f8fafc; font-weight: 600; color: #334155; }

        .status-badge { display: inline-block; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: capitalize; }
        .status-pending { background: #fef3c7; color: #d97706; }
        .status-approved { background: #dcfce7; color: #15803d; }
        .status-rejected { background: #fee2e2; color: #b91c1c; }
        .status-cancelled { background: #f1f5f9; color: #475569; }

        .btn-view, .btn-print-action, .btn-edit-action, .btn-cancel-action {
          padding: 6px 12px; font-size: 12px; font-weight: 600; border-radius: 4px; cursor: pointer;
          border: 1px solid #cbd5e1; background: white; color: #475569; transition: all 0.2s;
        }
        .btn-view:hover { background: #f1f5f9; }
        .btn-print-action { background: #eff6ff; color: #2563eb; border-color: #bfdbfe; }
        .btn-print-action:hover { background: #dbeafe; }
        .btn-edit-action { background: #f0fdf4; color: #16a34a; border-color: #bbf7d0; }
        .btn-edit-action:hover { background: #dcfce7; }
        .btn-cancel-action { background: #fef2f2; color: #dc2626; border-color: #fecaca; }
        .btn-cancel-action:hover { background: #fee2e2; }

        .loading-state, .empty-state { padding: 40px; text-align: center; background: white; border-radius: 8px; border: 1px solid #e2e8f0; color: #64748b; font-size: 14.5px; }

        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; z-index: 9999; animation: fadeIn 0.2s ease; }
        .modal-card { background: white; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); width: 100%; max-width: 500px; animation: scaleUp 0.2s ease; overflow: hidden; }
        .modal-card.details-card { max-width: 700px; }
        .modal-header { padding: 16px 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
        .modal-header h3 { font-size: 16px; font-weight: 700; margin: 0; color: #0f172a; }
        .close-x { background: transparent; border: none; font-size: 24px; color: #94a3b8; cursor: pointer; }
        .close-x:hover { color: #475569; }
        .modal-body { padding: 20px; display: flex; flex-direction: column; gap: 16px; max-height: 70vh; overflow-y: auto; }
        .modal-form-group { display: flex; flex-direction: column; gap: 6px; }
        .modal-form-group label { font-size: 13px; font-weight: 600; color: #334155; }
        .modal-form-group input { border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; font-size: 14px; }
        .modal-footer { padding: 16px 20px; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 12px; background: #f8fafc; }
        .btn-modal-cancel { background: white; color: #475569; border: 1px solid #cbd5e1; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; }
        .btn-modal-cancel:hover { background: #f1f5f9; }
        .btn-modal-confirm { background: #2563eb; color: white; border: none; padding: 8px 20px; border-radius: 6px; font-weight: 600; cursor: pointer; }
        .btn-modal-confirm:hover { background: #1d4ed8; }

        .search-relative { position: relative; }
        .suggestions-list { position: absolute; top: 100%; left: 0; right: 0; background: white; border: 1px solid #cbd5e1; border-radius: 6px; margin-top: 4px; max-height: 200px; overflow-y: auto; z-index: 100; list-style: none; padding: 0; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .suggestions-list li { padding: 10px 14px; cursor: pointer; font-size: 13.5px; border-bottom: 1px solid #f1f5f9; }
        .suggestions-list li:hover { background: #f1f5f9; color: #2563eb; }

        .details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #f8fafc; padding: 14px; border-radius: 6px; font-size: 13.5px; }
        .details-table th { background: #f1f5f9; font-weight: 600; font-size: 12.5px; color: #475569; }

        .text-danger { color: #ef4444; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        @media print {
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  )
}

export default Requisition

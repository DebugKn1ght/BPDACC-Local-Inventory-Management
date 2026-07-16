/**
 * Inventory Management Page
 * Features:
 * - Batch-level inventory tracking
 * - Stock Card generation (printable formal documents)
 * - Add/Edit/Delete inventory items & batches
 * - Transaction management (receipts, issuances)
 * - Search & Office filtering
 */

import React, { useState, useEffect } from 'react'
import Icon from '../components/Icon'
import { supabaseDb } from '../utils/apiDb'
import { useUserRole } from '../context/UserRoleContext'
import { useUI } from '../context/UIContext'

// Import inventory management icons from assets
import searchIcon from '../assets/icons/inventory/search-icon.svg'
import expandIcon from '../assets/icons/inventory/expand-icon.svg'
import collapseIcon from '../assets/icons/inventory/collapse-icon.svg'
import editIcon from '../assets/icons/inventory/edit-icon.svg'
import stockCardIcon from '../assets/icons/inventory/stockcard-icon.svg'
import deleteIcon from '../assets/icons/inventory/delete-icon.svg'
import addItemIcon from '../assets/icons/inventory/additem-icon.svg'
import restockIcon from '../assets/icons/inventory/restock-icon.svg'

import closeIcon from '../assets/icons/inventory/close-icon.svg'
import printIcon from '../assets/icons/inventory/print-icon.svg'

const Inventory = () => {
  const { currentUser, userOffice, userOfficeId, isAdmin } = useUserRole()
  
  // ==========================================
  // STATE VARIABLES
  // ==========================================
  
  // Filter states for searching and office filtering
  const [selectedOffice, setSelectedOffice] = useState('All') // 'All' or specific office name
  const [searchQuery, setSearchQuery] = useState('') // Search term for item name or SKU
  
  // Modal visibility states
  const [showMoreInfo, setShowMoreInfo] = useState(null) // Stock Card modal (shows full item + transactions)
  const [showEditModal, setShowEditModal] = useState(null) // Edit Item modal
  const [showAddModal, setShowAddModal] = useState(false) // Add New Item modal
  const [showTransactionModal, setShowTransactionModal] = useState({ visible: false, isEdit: false, index: null, isRestock: false }) // Transaction add/edit modal
  const [showRestockModal, setShowRestockModal] = useState(null) // Restock modal item
  const [restockForm, setRestockForm] = useState({
    date: '',
    restockQty: '',
    ptrNo: '',
    remarks: '',
    costPerUnit: '',
    assignedFor: 'Hemodialysis',
    batchId: ''
  })
  
  // Form data states
  const [transactionForm, setTransactionForm] = useState({
    date: '',
    reference: '',
    selectedBatch: null,
    receiptQty: 0,
    issuanceQty: 0,
    office: 'Hemodialysis',
    balance: 0
  })
  const [expandedItems, setExpandedItems] = useState(new Set()) // Tracks which items have their batches expanded in the table
  const [addFormData, setAddFormData] = useState({
    name: '',
    sku: '',
    location: '',
    unit: 'Pieces',
    minStock: '',
    initialBatch: {
      batchId: '',
      sku: '',
      quantity: '',
      assignedFor: 'Hemodialysis',
      brand: '',
      supplier: '',
      ptr: '',
      costPerUnit: '',
      remarks: ''
    }
  })
  
  const [editFormData, setEditFormData] = useState(null)
  const [notification, setNotification] = useState(null) // { type: 'success' | 'error', message: string }
  const [confirmation, setConfirmation] = useState(null) // { title: string, message: string, onConfirm: function, onCancel: function }

  // ==========================================
  // DATA (Loaded from Supabase)
  // ==========================================
  const [inventoryItems, setInventoryItems] = useState([])
  const [loading, setLoading] = useState(true)

  // Helper to show notifications
  const showNotification = (type, message) => {
    setNotification({ type, message })
    // Auto hide after 3 seconds
    setTimeout(() => setNotification(null), 3000)
  }

  // Helper to show custom confirmation dialog
  const showConfirmation = (title, message, onConfirm, onCancel) => {
    setConfirmation({ title, message, onConfirm, onCancel })
  }

  const loadItems = async () => {
    console.log('[Inventory loadItems] Calling getItems with:', { selectedOffice, isAdmin, userOfficeId })
    setLoading(true)
    try {
      const items = await supabaseDb.getItems(selectedOffice, isAdmin, userOfficeId)
      console.log('[Inventory loadItems] Got items back:', items)
      setInventoryItems(items)
    } catch (e) {
      console.error('Failed to load items:', e)
      setInventoryItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadItems()
  }, [selectedOffice, isAdmin, userOfficeId])

  /**
   * Check if a date is near expiry (within 30 days)
   * @param {string} expiryDate - Date string to check
   * @returns {boolean} True if date is within 30 days from today
   */
  const isNearExpiry = (expiryDate) => {
    if (!expiryDate) return false
    const today = new Date()
    const expiry = new Date(expiryDate)
    // Calculate 2 months before expiry date
    const twoMonthsBefore = new Date(expiry)
    twoMonthsBefore.setMonth(twoMonthsBefore.getMonth() - 2)
    // Check if today is between 2 months before expiry and expiry date
    return today >= twoMonthsBefore && today <= expiry
  }

  /**
   * Check if a date has expired
   * @param {string} expiryDate - Date string to check
   * @returns {boolean} True if date is before today
   */
  const isExpired = (expiryDate) => {
    if (!expiryDate) return false
    const today = new Date()
    const expiry = new Date(expiryDate)
    return expiry < today
  }

  /**
   * Generate a random 10-digit alphanumeric string
   * @returns {string} Random alphanumeric string
   */
  const generateRandomAlphanumeric = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  /**
   * Generate a new unique 10-digit alphanumeric SKU
   * Checks existing SKUs and regenerates if needed
   * @returns {string} New unique SKU
   */
  const generateSKU = () => {
    const existingSkus = new Set(inventoryItems.map(item => item.sku))
    let sku
    let attempts = 0
    const maxAttempts = 1000

    do {
      sku = generateRandomAlphanumeric()
      attempts++
    } while (existingSkus.has(sku) && attempts < maxAttempts)

    if (attempts >= maxAttempts) {
      // If random attempts fail, fall back to sequential alphanumeric
      let counter = 0
      const baseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      do {
        let num = counter
        sku = ''
        for (let i = 0; i < 10; i++) {
          sku = baseChars[num % 36] + sku
          num = Math.floor(num / 36)
        }
        counter++
      } while (existingSkus.has(sku))
    }

    return sku
  }

  /**
   * Calculate total stock for an item across all batches
   * @param {Object} item - Inventory item
   * @returns {number} Total stock
   */
  const getTotalStock = (item) => {
    return item.batches.reduce((sum, batch) => sum + batch.stock, 0)
  }

  /**
   * Determine item status based on batches (priority: Expired > Near Expiry > Low Stock > In Stock)
   * @param {Object} item - Inventory item
   * @returns {Object} { label: string, type: string }
   */
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

  /**
   * Toggle expand/collapse for an item's batches
   * @param {number} itemId - ID of item to toggle
   */
  const toggleItemExpansion = (itemId) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  /**
   * Filter items by search query and selected office
   * @returns {Array} Filtered items
   */
  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesOffice = selectedOffice === 'All' || 
      item.batches.some(batch => batch.office === selectedOffice)

    return matchesSearch && matchesOffice
  })

  /**
   * Format expiry date for display
   * @param {string} dateStr - Date string
   * @returns {string} Formatted date or 'N/A'
   */
  const formatExpiryDate = (dateStr) => {
    if (!dateStr) return 'N/A'
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  // ==========================================
  // HANDLER FUNCTIONS
  // ==========================================

  /**
   * Add a new inventory item with initial batch and transaction
   */
  const handleOpenAddModal = () => {
    const nextSku = generateSKU()
    setAddFormData({
      name: '',
      sku: nextSku,
      location: '',
      unit: 'Pieces',
      minStock: '',
      initialBatch: {
        batchId: `${nextSku}-001`,
        sku: nextSku,
        quantity: '',
        assignedFor: 'Hemodialysis',
        brand: '',
        supplier: '',
        ptr: '',
        costPerUnit: '',
        remarks: ''
      }
    })
    setShowAddModal(true)
  }

  const handleAddItem = async () => {
    const minStockVal = parseInt(addFormData.minStock)
    const qtyVal = parseInt(addFormData.initialBatch.quantity)
    
    if (!addFormData.name.trim()) {
      showToast('Item Name is required!', 'error')
      return
    }
    if (isNaN(minStockVal) || minStockVal <= 0) {
      showToast('Minimum Stock Level must be a number greater than 0!', 'error')
      return
    }
    if (isNaN(qtyVal) || qtyVal < 0) {
      showToast('Initial Batch Quantity must be a number 0 or greater!', 'error')
      return
    }

    const nextSku = addFormData.sku || generateSKU()
    const newItem = {
      sku: nextSku,
      name: addFormData.name,
      location: addFormData.location,
      unit: addFormData.unit,
      minStock: minStockVal,
      batches: [
        {
          batchId: addFormData.initialBatch.batchId || `${nextSku}-001`,
          brand: addFormData.initialBatch.brand,
          supplier: addFormData.initialBatch.supplier,
          stockNumber: `SN-${Date.now().toString().slice(-4)}`,
          expiryDate: null,
          office: addFormData.initialBatch.assignedFor,
          stock: qtyVal,
          transactionCount: 0,
          ptr: addFormData.initialBatch.ptr,
          costPerUnit: addFormData.initialBatch.costPerUnit,
          remarks: addFormData.initialBatch.remarks
        }
      ],
      transactions: [
        {
          date: new Date().toISOString().split('T')[0],
          reference: addFormData.initialBatch.batchId || `${nextSku}-001`,
          selectedBatch: addFormData.initialBatch.batchId || `${nextSku}-001`,
          receiptQty: qtyVal,
          issuanceQty: 0,
          office: addFormData.initialBatch.assignedFor,
          balance: qtyVal,
          ptr: addFormData.initialBatch.ptr,
          costPerUnit: addFormData.initialBatch.costPerUnit,
          remarks: addFormData.initialBatch.remarks || `${addFormData.initialBatch.assignedFor} - Opening Stock`
        }
      ]
    }

    try {
      await supabaseDb.addItem(newItem)
      
      // Log the activity
      await supabaseDb.addActivity({
        item: newItem.name,
        office: newItem.batches[0].office,
        action: 'Added',
        type: 'added'
      })
      
      await loadItems() // Refresh the list from DB
      setShowAddModal(false)
      showNotification('success', 'Item added successfully!')
    } catch (e) {
      console.error('Failed to add item:', e)
      showNotification('error', 'Failed to add item: ' + e.message)
    }
  }

  const handleOpenEditModal = (item) => {
    setEditFormData(JSON.parse(JSON.stringify(item)))
    setShowEditModal(item)
  }

  const handleSaveItemEdit = async () => {
    if (!editFormData) return
    const minStockVal = parseInt(editFormData.minStock)
    if (isNaN(minStockVal) || minStockVal <= 0) {
      showToast('Minimum Stock Level must be a number greater than 0!', 'error')
      return
    }
    if (!editFormData.name.trim()) {
      showToast('Item Name is required!', 'error')
      return
    }

    // Show confirmation dialog
    showConfirmation(
      'Confirm Save',
      'Are you sure you want to save changes to this item?',
      async () => { // On confirm
        try {
          await supabaseDb.updateItem({
            ...editFormData,
            minStock: minStockVal
          })
          await loadItems() // Refresh from DB
          setShowEditModal(null)
          setEditFormData(null)
          showNotification('success', 'Item updated successfully!')
        } catch (e) {
          console.error('Failed to update item:', e)
          showNotification('error', 'Failed to update item: ' + e.message)
        } finally {
          setConfirmation(null)
        }
      },
      () => { setConfirmation(null) } // On cancel
    )
  }

  const handleAddBatchInEdit = () => {
    const nextBatchNum = editFormData.batches.length + 1
    const newBatch = {
      batchId: `${editFormData.sku}-${String(nextBatchNum).padStart(3, '0')}`,
      brand: '',
      supplier: '',
      stockNumber: `SN-${Date.now().toString().slice(-4)}`,
      office: 'Hemodialysis',
      stock: 0,
      expiryDate: null,
      transactionCount: 0,
      ptr: '',
      costPerUnit: '',
      remarks: ''
    }
    setEditFormData({
      ...editFormData,
      batches: [...editFormData.batches, newBatch]
    })
  }

  const handleRemoveBatchInEdit = (idx) => {
    if (editFormData.batches.length <= 1) {
      showToast('An item must have at least one batch!', 'error')
      return
    }
    const updatedBatches = [...editFormData.batches]
    updatedBatches.splice(idx, 1)
    setEditFormData({
      ...editFormData,
      batches: updatedBatches
    })
  }

  /**
   * Open transaction modal for adding or editing
   * @param {boolean} isEdit - True if editing existing transaction
   * @param {number|null} index - Index of transaction to edit (if isEdit is true)
   */
  const handleOpenTransactionModal = (isEdit = false, index = null) => {
    if (isEdit && showMoreInfo && showMoreInfo.transactions && showMoreInfo.transactions[index]) {
      // Editing: Populate form with existing transaction data
      const tx = showMoreInfo.transactions[index]
      setTransactionForm({
        date: tx.date,
        reference: tx.reference,
        selectedBatch: tx.selectedBatch || null,
        receiptQty: tx.receiptQty,
        issuanceQty: tx.issuanceQty,
        office: tx.office,
        balance: tx.balance
      })
    } else {
      // Adding: Initialize form with defaults
      setTransactionForm({
        date: new Date().toISOString().split('T')[0],
        reference: '',
        selectedBatch: null,
        receiptQty: 0,
        issuanceQty: 0,
        office: 'Hemodialysis',
        balance: showMoreInfo ? getTotalStock(showMoreInfo) : 0
      })
    }
    setShowTransactionModal({ visible: true, isEdit, index })
  }

  /**
   * Save transaction (add new or update existing)
   */
  const handleSaveTransaction = async () => {
    if (!showMoreInfo) return

    if (showTransactionModal.isEdit && showTransactionModal.index !== null) {
      // Show confirmation dialog for edit
      showConfirmation(
        'Confirm Save',
        'Are you sure you want to save changes to this transaction?',
        async () => {
          try {
            await supabaseDb.updateTransaction(showMoreInfo.id, showTransactionModal.index, transactionForm)
            await supabaseDb.recalculateBalances(showMoreInfo.id)
            showNotification('success', 'Transaction updated successfully!')
            await loadItems() // Refresh
            const refreshedItems = await supabaseDb.getItems()
            const refreshedItem = refreshedItems.find(i => i.id === showMoreInfo.id)
            setShowMoreInfo(refreshedItem)
            setShowTransactionModal({ visible: false, isEdit: false, index: null })
          } catch (e) {
            console.error('Failed to save transaction:', e)
            showNotification('error', 'Failed to save transaction: ' + e.message)
          } finally {
            setConfirmation(null)
          }
        },
        () => setConfirmation(null)
      )
    } else {
      // Add new transaction, no confirmation needed
      try {
        const itemTransactions = (inventoryItems.find(i => i.id === showMoreInfo.id)?.transactions || [])
        const lastTx = itemTransactions.length > 0 ? itemTransactions[itemTransactions.length - 1] : null
        const newBalance = lastTx
          ? lastTx.balance + transactionForm.receiptQty - transactionForm.issuanceQty
          : transactionForm.receiptQty - transactionForm.issuanceQty

        let reference = transactionForm.reference
        if (transactionForm.selectedBatch) {
          const batch = showMoreInfo.batches.find(b => b.batchId === transactionForm.selectedBatch)
          if (batch) {
            if (!reference) {
              reference = `${transactionForm.selectedBatch}-${String((batch.transactionCount || 0) + 1).padStart(3, '0')}`
            }
          }
        }

        await supabaseDb.addTransaction(showMoreInfo.id, {
          ...transactionForm,
          reference,
          balance: newBalance
        })
        showNotification('success', 'Transaction added successfully!')
        await loadItems() // Refresh
        const refreshedItems = await supabaseDb.getItems()
        const refreshedItem = refreshedItems.find(i => i.id === showMoreInfo.id)
        setShowMoreInfo(refreshedItem)
        setShowTransactionModal({ visible: false, isEdit: false, index: null })
      } catch (e) {
        console.error('Failed to save transaction:', e)
        showNotification('error', 'Failed to save transaction: ' + e.message)
      }
    }
  }

  /**
   * Open transaction modal for restocking an item
   * @param {Object} item - The inventory item to restock
   */
  const handleRestock = (item) => {
    setShowMoreInfo(item)
    setTransactionForm({
      date: new Date().toISOString().split('T')[0],
      reference: '',
      selectedBatch: item.batches.length > 0 ? item.batches[0].batchId : null,
      receiptQty: 0,
      issuanceQty: 0,
      office: item.batches.length > 0 ? item.batches[0].office : 'Hemodialysis',
      balance: getTotalStock(item)
    })
    setShowTransactionModal({ visible: true, isEdit: false, index: null })
  }

  /**
   * Open restock modal with prepopulated data
   */
  const handleOpenRestockModal = (item) => {
    const computeNextBatchId = (sku, existingBatchIds) => {
      const prefix = `${sku}-`
      let maxNum = 0
      for (const id of existingBatchIds) {
        if (!id || typeof id !== 'string') continue
        if (!id.startsWith(prefix)) continue
        const suffix = id.slice(prefix.length)
        const num = Number(suffix)
        if (!Number.isNaN(num) && num > maxNum) maxNum = num
      }
      return `${sku}-${String(maxNum + 1).padStart(3, '0')}`
    }

    setShowRestockModal(item)
    const nextBatchId = computeNextBatchId(item.sku, (item.batches || []).map(b => b.batchId))
    setRestockForm({
      date: new Date().toISOString().split('T')[0],
      restockQty: '',
      ptrNo: '',
      remarks: '',
      costPerUnit: item.batches.length > 0 ? item.batches[0].costPerUnit || '' : '',
      assignedFor: item.batches.length > 0 ? item.batches[0].office || 'Hemodialysis' : 'Hemodialysis',
      batchId: nextBatchId
    })
  }

  /**
   * Handle restock form submission
   */
  const handleSaveRestock = async () => {
    if (!showRestockModal) return
    const qty = Number(restockForm.restockQty)
    if (!restockForm.restockQty.trim() || isNaN(qty) || qty <= 0) {
      showToast('Restock quantity must be a number greater than 0!', 'error')
      return
    }

    // Show confirmation dialog
    showConfirmation(
      'Confirm Restock',
      `Are you sure you want to restock this item with ${qty} units?`,
      async () => {
        try {
          const office = restockForm.assignedFor || 'Hemodialysis'
            
          await supabaseDb.restockItem(showRestockModal.id, {
        ...restockForm,
        quantity: qty,
        office
      })
      
      // Log the restock activity
      await supabaseDb.addActivity({
        item: showRestockModal.name,
        office: office,
        action: 'Restocked',
        type: 'restocked'
      })
      
      await loadItems() // Refresh
      const refreshedItems = await supabaseDb.getItems()
      const refreshedItem = refreshedItems.find(i => i.id === showRestockModal.id)
      setShowMoreInfo(refreshedItem)
      setShowRestockModal(null)
      showNotification('success', 'Item restocked successfully!')
        } catch (e) {
          console.error('Failed to restock:', e)
          showNotification('error', 'Failed to restock: ' + e.message)
        } finally {
          setConfirmation(null)
        }
      },
      () => { setConfirmation(null) }
    )
  }

  /**
   * Delete transaction and recalculate all balances
   * @param {number} index - Index of transaction to delete
   */
  const handleDeleteTransaction = async (index) => {
    if (!showMoreInfo) return

    // Show confirmation dialog
    showConfirmation(
      'Confirm Deletion',
      'Are you sure you want to delete this transaction?',
      async () => {
        try {
          await supabaseDb.deleteTransaction(showMoreInfo.id, index)
          await supabaseDb.recalculateBalances(showMoreInfo.id)
          await loadItems()
          const refreshedItems = await supabaseDb.getItems()
          const refreshedItem = refreshedItems.find(i => i.id === showMoreInfo.id)
          setShowMoreInfo(refreshedItem)
          showNotification('success', 'Transaction deleted successfully!')
        } catch (e) {
          console.error('Failed to delete transaction:', e)
          showNotification('error', 'Failed to delete transaction: ' + e.message)
        } finally {
          setConfirmation(null)
        }
      },
      () => setConfirmation(null)
    )
  }

  return (
    <div className="inventory">
      {/* Notification */}
      {notification && (
        <div 
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '16px 24px',
            borderRadius: '8px',
            color: '#fff',
            fontWeight: '600',
            zIndex: 9999,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            backgroundColor: notification.type === 'success' ? '#4ade80' : '#f87171'
          }}
        >
          {notification.message}
        </div>
      )}

      {/* Custom Confirmation Modal */}
      {confirmation && (
        <div 
          className="modal-overlay" 
          onClick={() => { /* Do nothing when clicking overlay, since we have cancel button */ }}
          style={{ zIndex: 10000 }}
        >
          <div className="modal" style={{ maxWidth: '400px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{confirmation.title}</h2>
            </div>
            <div className="modal-body" style={{ padding: '24px' }}>
              <p style={{ margin: 0, color: '#374151', fontSize: '16px' }}>{confirmation.message}</p>
            </div>
            <div className="modal-footer" style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button 
                className="btn-secondary" 
                onClick={() => { 
                  if (confirmation.onCancel) confirmation.onCancel() 
                }}
              >
                Cancel
              </button>
              <button 
                className="btn-primary" 
                onClick={() => { 
                  if (confirmation.onConfirm) confirmation.onConfirm() 
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ==========================================
          PAGE HEADER
          ========================================== */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Inventory Management</h1>
          <p className="page-subtitle">Manage and track your medical supplies by batches</p>
        </div>
        {isAdmin && (
          <button className="btn-primary" onClick={handleOpenAddModal}>
            <Icon src={addItemIcon} alt="Add Item" size={20} />
            Add Item
          </button>
        )}
      </div>

      {/* ==========================================
          FILTERS BAR (Search + Office Filter)
          ========================================== */}
      <div className="filters-bar">
        <div className="search-box">
          <span className="search-icon">
            <Icon src={searchIcon} alt="Search" size={20} />
          </span>
          <input
            type="text"
            placeholder="Search items by name or SKU..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {isAdmin && (
          <select
            className="select-input"
            value={selectedOffice}
            onChange={(e) => setSelectedOffice(e.target.value)}
          >
            <option value="All">All Offices</option>
            <option value="Hemodialysis">Hemodialysis</option>
            <option value="Clinical Laboratory">Clinical Laboratory</option>
            <option value="Radiology">Radiology</option>
            <option value="Admin Office">Admin Office</option>
            <option value="Unallocated">Unallocated</option>
          </select>
        )}
      </div>

      {/* ==========================================
          INVENTORY TABLE
          ========================================== */}
      <div className="card">
        <div className="table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th style={{width: '40px'}}></th>
                <th>SKU</th>
                <th>Item Name</th>
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
                    {/* MAIN ITEM ROW */}
                    <tr className="item-row" onClick={() => toggleItemExpansion(item.id)}>
                      <td>
                        <span className="expand-icon">
                          <Icon src={isExpanded ? collapseIcon : expandIcon} alt={isExpanded ? "Collapse" : "Expand"} size={20} />
                        </span>
                      </td>
                      <td className="sku">{item.sku}</td>
                      <td>
                        <div className="item-name">{item.name}</div>
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
                      <td onClick={(e) => e.stopPropagation()}> {/* Prevent row expansion when clicking action buttons */}
                        <div className="actions">
                          {isAdmin && (
                            <>
                              <button 
                                className="btn-icon" 
                                title="Restock Item"
                                onClick={() => handleOpenRestockModal(item)}
                              >
                                <Icon src={restockIcon} alt="Restock" size={20} />
                              </button>
                              <button 
                                className="btn-icon" 
                                title="Edit Item"
                                onClick={() => handleOpenEditModal(item)}
                              >
                                <Icon src={editIcon} alt="Edit" size={20} />
                              </button>
                            </>
                          )}
                          <button 
                            className="btn-icon" 
                            title="View Stock Card"
                            onClick={() => setShowMoreInfo(item)}
                          >
                            <Icon src={stockCardIcon} alt="Stock Card" size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* BATCHES ROW (Expanded) */}
                    {isExpanded && (
                      <tr className="batches-row">
                        <td colSpan={7}>
                          <div className="batches-container">
                            <table className="batches-table">
                              <thead>
                                <tr>
                                  <th>Batch ID</th>
                                  <th>Brand</th>
                                  <th>Supplier</th>
                                  <th>Stock #</th>
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
                                      <td>{batch.brand || '-'}</td>
                                      <td>{batch.supplier || '-'}</td>
                                      <td>{batch.stockNumber || '-'}</td>
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

      {/* ==========================================
          MODALS
          ========================================== */}

      {/* STOCK CARD MODAL - Shows full item details + transactions */}
      {showMoreInfo && (
        <div className="modal-overlay" onClick={() => setShowMoreInfo(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header no-print"> {/* no-print class hides this when printing */}
              <h2 className="modal-title">Stock Card: {showMoreInfo.name}</h2>
              <button className="close-btn" onClick={() => setShowMoreInfo(null)}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <div className="modal-body">
              {/* Stock Card Header - New format */}
              <div className="stock-card-header" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', marginBottom: '24px', backgroundColor: '#f9fafb' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'start' }}>
                  <div>
                    <div style={{ display: 'flex', marginBottom: '12px' }}>
                      <span style={{ width: '140px', fontWeight: '600', color: '#4b5563' }}>Location:</span>
                      <span style={{ color: '#1f2937' }}>{showMoreInfo.location || '-'}</span>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '12px' }}>
                      <span style={{ width: '140px', fontWeight: '600', color: '#4b5563' }}>Item Description:</span>
                      <span style={{ color: '#1f2937', fontWeight: '500' }}>{showMoreInfo.name}</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <span style={{ width: '140px', fontWeight: '600', color: '#4b5563' }}>Unit of Measure:</span>
                      <span style={{ color: '#1f2937' }}>{showMoreInfo.unit}</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <span style={{ fontWeight: '600', color: '#4b5563' }}>Stock No.:</span>
                      <span style={{ marginLeft: '8px', color: '#1f2937', fontWeight: '500' }}>{showMoreInfo.sku}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stock Card Transaction Table - Updated format */}
              <div className="stock-card-table-container">
                <table className="stock-card-table" style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <thead style={{ backgroundColor: '#f3f4f6', color: '#000', fontSize: '18px', fontWeight: '700' }}>
                    <tr>
                      <th rowSpan={2} style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>Date</th>
                      <th colSpan={3} style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>Quantity</th>
                      <th rowSpan={2} style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>Cost<br/>(Price/Unit)</th>
                      <th rowSpan={2} style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>IR/DR/SI/RIS/PTR/BL No.<br/>No.</th>
                      <th rowSpan={2} style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>Recipient/Remarks</th>
                    </tr>
                    <tr>
                      <th style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>Received</th>
                      <th style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>Issued</th>
                      <th style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {showMoreInfo.transactions && showMoreInfo.transactions.map((tx, idx) => (
                      <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#f9fafb' : '#fff' }}>
                        <td style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>
                          {new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                        <td style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>
                          {tx.receiptQty > 0 ? tx.receiptQty : ''}
                        </td>
                        <td style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>
                          {tx.issuanceQty > 0 ? tx.issuanceQty : ''}
                        </td>
                        <td style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>
                          {tx.balance}
                        </td>
                        <td style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>
                          {tx.costPerUnit || '-'}
                        </td>
                        <td style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'center' }}>
                          {tx.ptr || tx.reference || '-'}
                        </td>
                        <td style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'left' }}>
                          {tx.remarks || tx.office || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer no-print">
              <button className="btn-primary" onClick={() => window.print()}>
                <Icon src={printIcon} alt="Print" size={20} />
                Print
              </button>
              <button className="btn-secondary" onClick={() => setShowMoreInfo(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT ITEM MODAL */}
      {showEditModal && editFormData && (
        <div className="modal-overlay" onClick={() => { setShowEditModal(null); setEditFormData(null); }}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Item</h2>
              <button className="close-btn" onClick={() => { setShowEditModal(null); setEditFormData(null); }}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-group">
                  <label className="form-label">Item Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={editFormData.name} 
                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">SKU</label>
                  <input type="text" className="form-input" value={editFormData.sku} disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={editFormData.location} 
                    onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Minimum Stock Level</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={editFormData.minStock} 
                    onChange={(e) => setEditFormData({ ...editFormData, minStock: e.target.value })}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Batches</label>
                  <div className="batches-edit-container">
                    {editFormData.batches.map((batch, idx) => (
                      <div key={idx} className="batch-edit-row">
                        <div className="form-group mini">
                          <label className="form-label">Batch ID</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            value={batch.batchId} 
                            onChange={(e) => {
                              const updatedBatches = [...editFormData.batches]
                              updatedBatches[idx] = { ...batch, batchId: e.target.value }
                              setEditFormData({ ...editFormData, batches: updatedBatches })
                            }}
                          />
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Brand</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            value={batch.brand} 
                            onChange={(e) => {
                              const updatedBatches = [...editFormData.batches]
                              updatedBatches[idx] = { ...batch, brand: e.target.value }
                              setEditFormData({ ...editFormData, batches: updatedBatches })
                            }}
                          />
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Supplier</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            value={batch.supplier} 
                            onChange={(e) => {
                              const updatedBatches = [...editFormData.batches]
                              updatedBatches[idx] = { ...batch, supplier: e.target.value }
                              setEditFormData({ ...editFormData, batches: updatedBatches })
                            }}
                          />
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Stock #</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            value={batch.stockNumber} 
                            onChange={(e) => {
                              const updatedBatches = [...editFormData.batches]
                              updatedBatches[idx] = { ...batch, stockNumber: e.target.value }
                              setEditFormData({ ...editFormData, batches: updatedBatches })
                            }}
                          />
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Office</label>
                          <select 
                            className="form-input" 
                            value={batch.office}
                            onChange={(e) => {
                              const updatedBatches = [...editFormData.batches]
                              updatedBatches[idx] = { ...batch, office: e.target.value }
                              setEditFormData({ ...editFormData, batches: updatedBatches })
                            }}
                          >
                            <option value="Hemodialysis">Hemodialysis</option>
                            <option value="Clinical Laboratory">Clinical Laboratory</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Admin Office">Admin Office</option>
                            <option value="Unallocated">Unallocated</option>
                          </select>
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Stock</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            value={batch.stock} 
                            onChange={(e) => {
                              const updatedBatches = [...editFormData.batches]
                              updatedBatches[idx] = { ...batch, stock: parseInt(e.target.value) || 0 }
                              setEditFormData({ ...editFormData, batches: updatedBatches })
                            }}
                          />
                        </div>
                        <div className="form-group mini">
                        <label className="toggle-label">
                          <input 
                            type="checkbox" 
                            checked={!!batch.expiryDate} 
                            onChange={(e) => {
                              const updatedBatches = [...editFormData.batches]
                              updatedBatches[idx] = { ...batch, expiryDate: e.target.checked ? new Date().toISOString().split('T')[0] : null }
                              setEditFormData({ ...editFormData, batches: updatedBatches })
                            }}
                          />
                          Has Expiry
                        </label>
                      </div>
                      <div className="form-group mini">
                        <label className="form-label">Expiry Date</label>
                        <input 
                          type="date" 
                          className="form-input" 
                          value={batch.expiryDate || ''} 
                          disabled={!batch.expiryDate}
                          onChange={(e) => {
                            const updatedBatches = [...editFormData.batches]
                            updatedBatches[idx] = { ...batch, expiryDate: e.target.value }
                            setEditFormData({ ...editFormData, batches: updatedBatches })
                          }}
                        />
                      </div>
                      <div className="form-group mini">
                        <label className="form-label">PTR (Document Serial)</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          value={batch.ptr || ''} 
                          onChange={(e) => {
                            const updatedBatches = [...editFormData.batches]
                            updatedBatches[idx] = { ...batch, ptr: e.target.value }
                            setEditFormData({ ...editFormData, batches: updatedBatches })
                          }}
                        />
                      </div>
                      <div className="form-group mini">
                        <label className="form-label">Cost per Unit</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          value={batch.costPerUnit || ''} 
                          onChange={(e) => {
                            const updatedBatches = [...editFormData.batches]
                            updatedBatches[idx] = { ...batch, costPerUnit: e.target.value }
                            setEditFormData({ ...editFormData, batches: updatedBatches })
                          }}
                        />
                      </div>
                        <button className="btn-icon remove-btn" title="Remove Batch" onClick={() => handleRemoveBatchInEdit(idx)}>
                          <Icon src={deleteIcon} alt="Remove" size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={handleAddBatchInEdit}>Add Batch</button>
              <div className="button-group">
                <button className="btn-secondary" onClick={() => { setShowEditModal(null); setEditFormData(null); }}>Cancel</button>
                <button className="btn-primary" onClick={handleSaveItemEdit}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TRANSACTION ADD/EDIT MODAL */}
      {showTransactionModal.visible && (
        <div className="modal-overlay" onClick={() => setShowTransactionModal({ visible: false, isEdit: false, index: null })}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {showTransactionModal.isEdit ? 'Edit Transaction' : 'Add Transaction'}
              </h2>
              <button className="close-btn" onClick={() => setShowTransactionModal({ visible: false, isEdit: false, index: null })}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={transactionForm.date}
                    onChange={(e) => setTransactionForm({ ...transactionForm, date: e.target.value })}
                  />
                </div>
                {/* Batch Selector (auto-generates reference based on batch) */}
                {showMoreInfo && showMoreInfo.batches && showMoreInfo.batches.length > 0 && (
                  <div className="form-group">
                    <label className="form-label">Batch</label>
                    <select
                      className="form-input"
                      value={transactionForm.selectedBatch || ''}
                      onChange={(e) => {
                        const selectedBatch = e.target.value || null
                        let reference = transactionForm.reference
                        if (selectedBatch) {
                          const batch = showMoreInfo.batches.find(b => b.batchId === selectedBatch)
                          const nextCount = (batch?.transactionCount || 0) + 1
                          reference = `${selectedBatch}-${String(nextCount).padStart(3, '0')}`
                        }
                        setTransactionForm({ ...transactionForm, selectedBatch, reference })
                      }}
                    >
                      <option value="">Select a Batch</option>
                      {showMoreInfo.batches.map((batch, idx) => (
                        <option key={idx} value={batch.batchId}>
                          {batch.batchId} - {batch.brand || 'No Brand'} ({batch.stock} {showMoreInfo.unit}) - Issued {batch.transactionCount || 0}x
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="form-group">
                  <label className="form-label">Reference</label>
                  <input
                    type="text"
                    className="form-input"
                    value={transactionForm.reference}
                    onChange={(e) => setTransactionForm({ ...transactionForm, reference: e.target.value })}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-group">
                    <label className="form-label">Receipt Qty</label>
                    <input
                      type="number"
                      className="form-input"
                      value={transactionForm.receiptQty}
                      onChange={(e) => setTransactionForm({ ...transactionForm, receiptQty: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Issuance Qty</label>
                    <input
                      type="number"
                      className="form-input"
                      value={transactionForm.issuanceQty}
                      onChange={(e) => setTransactionForm({ ...transactionForm, issuanceQty: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Office</label>
                  <select
                    className="form-input"
                    value={transactionForm.office}
                    onChange={(e) => setTransactionForm({ ...transactionForm, office: e.target.value })}
                  >
                    <option value="Hemodialysis">Hemodialysis</option>
                    <option value="Clinical Laboratory">Clinical Laboratory</option>
                    <option value="Radiology">Radiology</option>
                    <option value="Admin Office">Admin Office</option>
                    <option value="All">All</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowTransactionModal({ visible: false, isEdit: false, index: null })}>
                Cancel
              </button>
              <button className="btn-primary" onClick={handleSaveTransaction}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESTOCK MODAL */}
      {showRestockModal && (
        <div className="modal-overlay" onClick={() => setShowRestockModal(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Restock Item: {showRestockModal.name}</h2>
              <button className="close-btn" onClick={() => setShowRestockModal(null)}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                {/* Uneditable Item Info */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                  <div className="form-group">
                    <label className="form-label">Item Name</label>
                    <input type="text" className="form-input" value={showRestockModal.name} disabled />
                  </div>
                  <div className="form-group">
                    <label className="form-label">SKU</label>
                    <input type="text" className="form-input" value={showRestockModal.sku} disabled />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Current Stock</label>
                    <input type="text" className="form-input" value={`${getTotalStock(showRestockModal)} ${showRestockModal.unit}`} disabled />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Current PTR No.</label>
                    <input type="text" className="form-input" value={restockForm.ptrNo || showRestockModal.batches[0]?.ptr || '-'} disabled />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Current Department</label>
                    <input type="text" className="form-input" value={showRestockModal.batches[0]?.office || 'Hemodialysis'} disabled />
                  </div>
                </div>

                {/* Editable Fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Date of Restock</label>
                    <input
                      type="date"
                      className="form-input"
                      value={restockForm.date}
                      onChange={(e) => setRestockForm({ ...restockForm, date: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Quantity to Add</label>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      className="form-input"
                      placeholder="Enter quantity"
                      value={restockForm.restockQty}
                      onChange={(e) => setRestockForm({ ...restockForm, restockQty: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">PTR No.</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter PTR No."
                      value={restockForm.ptrNo}
                      onChange={(e) => setRestockForm({ ...restockForm, ptrNo: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Cost per Unit</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter cost per unit"
                      value={restockForm.costPerUnit}
                      onChange={(e) => setRestockForm({ ...restockForm, costPerUnit: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">New Batch ID</label>
                    <input type="text" className="form-input" value={restockForm.batchId} disabled />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Assign New Batch To</label>
                    <select
                      className="form-input"
                      value={restockForm.assignedFor}
                      onChange={(e) => setRestockForm({ ...restockForm, assignedFor: e.target.value })}
                    >
                      <option value="Hemodialysis">Hemodialysis</option>
                      <option value="Clinical Laboratory">Clinical Laboratory</option>
                      <option value="Radiology">Radiology</option>
                      <option value="Admin Office">Admin Office</option>
                      <option value="Unallocated">Unallocated</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">Remarks</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter remarks"
                      value={restockForm.remarks}
                      onChange={(e) => setRestockForm({ ...restockForm, remarks: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowRestockModal(null)}>Cancel</button>
              <button className="btn-primary" onClick={handleSaveRestock}>Save Restock</button>
            </div>
          </div>
        </div>
      )}

      {/* ADD ITEM MODAL */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Item</h2>
              <button className="close-btn" onClick={() => setShowAddModal(false)}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                {/* Item Details Section */}
                <h3 style={{ marginBottom: '16px', color: '#1f2937' }}>Item Details</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  <div className="form-group">
                    <label className="form-label">Item Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Enter item name"
                      value={addFormData.name}
                      onChange={(e) => setAddFormData({...addFormData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">SKU </label>
                    <input type="text" className="form-input" value={addFormData.sku} disabled />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Unit of Measurement</label>
                    <select 
                      className="form-input"
                      value={addFormData.unit}
                      onChange={(e) => setAddFormData({...addFormData, unit: e.target.value})}
                    >
                      <option value="Pieces">Pieces</option>
                      <option value="Packs">Packs</option>
                      <option value="Boxes">Boxes</option>
                      <option value="Bottles">Bottles</option>
                      <option value="Vials">Vials</option>
                      <option value="Sets">Sets</option>
                      <option value="Tablets">Tablets</option>
                      <option value="Ampoules">Ampoules</option>
                      <option value="Kits">Kits</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Enter location"
                      value={addFormData.location}
                      onChange={(e) => setAddFormData({...addFormData, location: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Minimum Stock Level</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Enter minimum stock"
                      value={addFormData.minStock}
                      onChange={(e) => setAddFormData({...addFormData, minStock: e.target.value})}
                    />
                  </div>
                </div>

                {/* Initial Batch Section */}
                <h3 style={{ marginBottom: '16px', color: '#1f2937' }}>
                  Add Initial Batch 
                  <span style={{color: '#dc2626', marginLeft: '8px'}}>(Required)</span>
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Batch ID</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={addFormData.initialBatch.batchId}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">SKU</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={addFormData.initialBatch.sku}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Quantity</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Enter quantity"
                      value={addFormData.initialBatch.quantity}
                      onChange={(e) => setAddFormData({...addFormData, initialBatch: {...addFormData.initialBatch, quantity: e.target.value}})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Assigned For</label>
                    <select 
                      className="form-input"
                      value={addFormData.initialBatch.assignedFor}
                      onChange={(e) => setAddFormData({
                        ...addFormData, 
                        initialBatch: {...addFormData.initialBatch, assignedFor: e.target.value}
                      })}
                    >
                      <option value="Hemodialysis">Hemodialysis</option>
                      <option value="Clinical Laboratory">Clinical Laboratory</option>
                      <option value="Radiology">Radiology</option>
                      <option value="Admin Office">Admin Office</option>
                      <option value="Unallocated">Unallocated</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Brand</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Enter brand"
                      value={addFormData.initialBatch.brand}
                      onChange={(e) => setAddFormData({
                        ...addFormData, 
                        initialBatch: {...addFormData.initialBatch, brand: e.target.value}
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Supplier</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Enter supplier"
                      value={addFormData.initialBatch.supplier}
                      onChange={(e) => setAddFormData({
                        ...addFormData, 
                        initialBatch: {...addFormData.initialBatch, supplier: e.target.value}
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">PTR (Document Serial)</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Enter PTR"
                      value={addFormData.initialBatch.ptr}
                      onChange={(e) => setAddFormData({
                        ...addFormData, 
                        initialBatch: {...addFormData.initialBatch, ptr: e.target.value}
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Cost per Unit</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Enter Cost"
                      value={addFormData.initialBatch.costPerUnit}
                      onChange={(e) => setAddFormData({
                        ...addFormData, 
                        initialBatch: {...addFormData.initialBatch, costPerUnit: e.target.value}
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Date (Auto-generated)</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={new Date().toISOString().split('T')[0]}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Remarks</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Enter remarks"
                      value={addFormData.initialBatch.remarks}
                      onChange={(e) => setAddFormData({
                        ...addFormData, 
                        initialBatch: {...addFormData.initialBatch, remarks: e.target.value}
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="button-group" style={{marginLeft: 'auto'}}>
                <button className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button className="btn-primary" onClick={handleAddItem}>
                  <Icon src={addItemIcon} alt="Add" size={20} />
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
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

        /* Print Styles */
        @media print {
          .no-print {
            display: none !important;
          }
          .modal {
            box-shadow: none !important;
            max-width: 100% !important;
            max-height: none !important;
            overflow: visible !important;
          }
          .stock-card-table-container {
            overflow: visible !important;
          }
          .modal-body {
            overflow: visible !important;
            padding: 0 !important;
          }
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
          max-width: 1100px;
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

        /* Stock Card Styles */
        .stock-card-header {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 24px;
          border: 2px solid #1f2937;
          padding: 20px;
          border-radius: 8px;
        }

        .clinic-info {
          text-align: center;
        }

        .clinic-info h3 {
          margin: 0 0 4px 0;
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
        }

        .clinic-info p {
          margin: 0;
          font-size: 14px;
          color: #4b5563;
        }

        .stock-card-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .stock-card-field {
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        .field-label {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
        }

        .field-value {
          font-size: 14px;
          color: #4b5563;
        }

        .stock-card-table-container {
          overflow-x: auto;
        }

        .stock-card-table {
          width: 100%;
          border-collapse: collapse;
        }

        .stock-card-table th,
        .stock-card-table td {
          border: 1px solid #000;
          padding: 10px;
          text-align: left;
        }

        .stock-card-table th {
          background: #f3f4f6;
          font-weight: 700;
          font-size: 12px;
          text-align: center;
        }

        .table-header-group {
          border-left: 1px solid #000;
          background: #e5e7eb;
        }

        .table-header-space {
          width: 40px;
        }

        .transaction-actions {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .actions-header {
          width: 100px;
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
          flex-wrap: wrap;
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

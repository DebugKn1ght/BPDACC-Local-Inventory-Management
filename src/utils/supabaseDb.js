import { supabase } from './supabaseClient'

// Helper function to map Supabase rows to app data
const mapSupabaseItemToAppItem = (item, batches = [], transactions = []) => {
  // First get office names for batches
  const batchesWithOfficeNames = batches.map(b => ({
    batchId: b.batch_id,
    brand: b.brand,
    supplier: b.supplier,
    stockNumber: b.stock_number,
    expiryDate: b.expiry_date,
    office: b.office_name || 'Unallocated',
    stock: b.stock,
    transactionCount: b.transaction_count,
    ptr: b.ptr,
    costPerUnit: b.cost_per_unit,
    remarks: b.remarks
  }))

  // Get office names for transactions
  const transactionsWithOfficeNames = transactions.map(t => ({
    date: t.date,
    reference: t.reference,
    selectedBatch: t.batch_id,
    receiptQty: t.receipt_qty,
    issuanceQty: t.issuance_qty,
    office: t.office_name || 'Unallocated',
    balance: t.balance,
    ptr: t.ptr,
    costPerUnit: t.cost_per_unit,
    remarks: t.remarks
  }))

  return {
    id: item.id,
    sku: item.sku,
    name: item.name,
    location: item.location,
    minStock: item.min_stock,
    unit: item.unit,
    batches: batchesWithOfficeNames,
    transactions: transactionsWithOfficeNames
  }
}

const getOfficeIdByName = async (officeName) => {
  if (!officeName || officeName === 'All' || officeName === 'Unallocated') return null;
  const { data } = await supabase
    .from('offices')
    .select('id')
    .eq('name', officeName)
    .single()
  return data?.id || null
}

export const supabaseDb = {
  async getOffices() {
    const { data, error } = await supabase.from('offices').select('*')
    if (error) {
      console.error('Failed to load offices:', error)
      return []
    }
    return data || []
  },

  async getUsers() {
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select(`
        *,
        offices (name)
      `)
    if (usersError) {
      console.error('Failed to load users:', usersError)
      return []
    }
    return (users || []).map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      office: u.offices?.name || 'All',
      status: u.status
    }))
  },

  async getItems() {
    try {
      const { data: items, error: itemsError } = await supabase.from('inventory_items').select('*')
      if (itemsError) throw itemsError

      if (!items || items.length === 0) return []

      const itemIds = items.map(i => i.id)
      const { data: batches, error: batchesError } = await supabase
        .from('inventory_batches')
        .select(`
          *,
          offices (name)
        `)
        .in('inventory_item_id', itemIds)
      if (batchesError) throw batchesError

      const { data: transactions, error: txError } = await supabase
        .from('inventory_transactions')
        .select(`
          *,
          offices (name),
          inventory_batches (batch_id)
        `)
        .in('inventory_item_id', itemIds)
        .order('id')
      if (txError) throw txError

      // Process batches to include office name
      const processedBatches = (batches || []).map(b => ({
        ...b,
        office_name: b.offices?.name || 'Unallocated'
      }))

      // Process transactions to include office name and batch_id
      const processedTransactions = (transactions || []).map(t => ({
        ...t,
        office_name: t.offices?.name || 'Unallocated',
        batch_id: t.inventory_batches?.batch_id
      }))

      const groupedBatches = processedBatches.reduce((acc, b) => {
        if (!acc[b.inventory_item_id]) acc[b.inventory_item_id] = []
        acc[b.inventory_item_id].push(b)
        return acc
      }, {})

      const groupedTransactions = processedTransactions.reduce((acc, t) => {
        if (!acc[t.inventory_item_id]) acc[t.inventory_item_id] = []
        acc[t.inventory_item_id].push(t)
        return acc
      }, {})

      return items.map(item => mapSupabaseItemToAppItem(
        item, groupedBatches[item.id] || [], groupedTransactions[item.id] || []
      ))
    } catch (e) {
      console.error('Failed to load items:', e)
      return []
    }
  },

  async addItem(itemData) {
    try {
      // Insert inventory item
      const { data: newItem, error: itemError } = await supabase
        .from('inventory_items')
        .insert({
          sku: itemData.sku,
          name: itemData.name,
          location: itemData.location,
          min_stock: itemData.minStock,
          unit: itemData.unit
        })
        .select()
        .single()

      if (itemError) throw itemError

      if (itemData.batches && itemData.batches.length > 0) {
        for (const batch of itemData.batches) {
          const officeId = await getOfficeIdByName(batch.office)
          await this.addBatch(newItem.id, batch)
        }
      }

      if (itemData.transactions && itemData.transactions.length > 0) {
        for (const tx of itemData.transactions) {
          await this.addTransaction(newItem.id, tx)
        }
      }

      return newItem
    } catch (e) {
      console.error('Failed to add item:', e)
      throw e
    }
  },

  async addBatch(itemId, batchData) {
    try {
      const officeId = await getOfficeIdByName(batchData.office)

      const { data: newBatch, error: batchError } = await supabase
        .from('inventory_batches')
        .insert({
          inventory_item_id: itemId,
          batch_id: batchData.batchId,
          brand: batchData.brand,
          supplier: batchData.supplier,
          stock_number: batchData.stockNumber,
          expiry_date: batchData.expiryDate,
          office_id: officeId,
          stock: batchData.stock,
          transaction_count: batchData.transactionCount,
          ptr: batchData.ptr,
          cost_per_unit: batchData.costPerUnit,
          remarks: batchData.remarks
        })
        .select()
        .single()

      if (batchError) throw batchError
      return newBatch
    } catch (e) {
      console.error('Failed to add batch:', e)
      throw e
    }
  },

  async updateBatch(itemId, oldBatchId, batchData) {
    try {
      // First get the batch id
      const { data: existingBatch } = await supabase
        .from('inventory_batches')
        .select('id')
        .eq('inventory_item_id', itemId)
        .eq('batch_id', oldBatchId)
        .single()

      if (!existingBatch) return null

      const officeId = await getOfficeIdByName(batchData.office)

      const { data: updatedBatch, error: batchError } = await supabase
        .from('inventory_batches')
        .update({
          batch_id: batchData.batchId,
          brand: batchData.brand,
          supplier: batchData.supplier,
          stock_number: batchData.stockNumber,
          expiry_date: batchData.expiryDate,
          office_id: officeId,
          stock: batchData.stock,
          transaction_count: batchData.transactionCount,
          ptr: batchData.ptr,
          cost_per_unit: batchData.costPerUnit,
          remarks: batchData.remarks
        })
        .eq('id', existingBatch.id)
        .select()
        .single()

      if (batchError) throw batchError
      return updatedBatch
    } catch (e) {
      console.error('Failed to update batch:', e)
      throw e
    }
  },

  async deleteBatch(itemId, batchId) {
    try {
      const { error } = await supabase
        .from('inventory_batches')
        .delete()
        .eq('inventory_item_id', itemId)
        .eq('batch_id', batchId)

      if (error) throw error
    } catch (e) {
      console.error('Failed to delete batch:', e)
      throw e
    }
  },

  async addTransaction(itemId, txData) {
    try {
      // Get batch id if selected
      let batchDbId = null
      let officeId = await getOfficeIdByName(txData.office)

      if (txData.selectedBatch) {
        const { data: batch } = await supabase
          .from('inventory_batches')
          .select('id')
          .eq('inventory_item_id', itemId)
          .eq('batch_id', txData.selectedBatch)
          .single()
        batchDbId = batch?.id || null
      }

      const { data: newTx, error: txError } = await supabase
        .from('inventory_transactions')
        .insert({
          inventory_item_id: itemId,
          inventory_batch_id: batchDbId,
          date: txData.date,
          reference: txData.reference,
          receipt_qty: txData.receiptQty,
          issuance_qty: txData.issuanceQty,
          balance: txData.balance,
          office_id: officeId,
          ptr: txData.ptr,
          cost_per_unit: txData.costPerUnit,
          remarks: txData.remarks
        })
        .select()
        .single()

      if (txError) throw txError

      // Also update batch stock and transaction count if needed
      if (batchDbId && (txData.receiptQty > 0 || txData.issuanceQty > 0)) {
        await this.updateBatchStockAndCount(batchDbId)
      }

      return newTx
    } catch (e) {
      console.error('Failed to add transaction:', e)
      throw e
    }
  },

  async updateTransaction(itemId, txIndex, txData) {
    try {
      // Since we don't have transaction IDs stored in app, let's get all transactions for item
      const { data: transactions, error: listError } = await supabase
        .from('inventory_transactions')
        .select('id')
        .eq('inventory_item_id', itemId)
        .order('id')

      if (listError) throw listError

      if (!transactions || !transactions[txIndex]) return null

      let batchDbId = null
      let officeId = await getOfficeIdByName(txData.office)

      if (txData.selectedBatch) {
        const { data: batch } = await supabase
          .from('inventory_batches')
          .select('id')
          .eq('inventory_item_id', itemId)
          .eq('batch_id', txData.selectedBatch)
          .single()
        batchDbId = batch?.id || null
      }

      const { data: updatedTx, error: txError } = await supabase
        .from('inventory_transactions')
        .update({
          inventory_batch_id: batchDbId,
          date: txData.date,
          reference: txData.reference,
          receipt_qty: txData.receiptQty,
          issuance_qty: txData.issuanceQty,
          balance: txData.balance,
          office_id: officeId,
          ptr: txData.ptr,
          cost_per_unit: txData.costPerUnit,
          remarks: txData.remarks
        })
        .eq('id', transactions[txIndex].id)
        .select()
        .single()

      if (txError) throw txError
      return updatedTx
    } catch (e) {
      console.error('Failed to update transaction:', e)
      throw e
    }
  },

  async deleteTransaction(itemId, txIndex) {
    try {
      const { data: transactions, error: listError } = await supabase
        .from('inventory_transactions')
        .select('id')
        .eq('inventory_item_id', itemId)
        .order('id')

      if (listError) throw listError
      if (!transactions || !transactions[txIndex]) return

      const { error } = await supabase
        .from('inventory_transactions')
        .delete()
        .eq('id', transactions[txIndex].id)

      if (error) throw error
    } catch (e) {
      console.error('Failed to delete transaction:', e)
      throw e
    }
  },

  async recalculateBalances(itemId) {
    try {
      const { data: transactions, error: listError } = await supabase
        .from('inventory_transactions')
        .select('*')
        .eq('inventory_item_id', itemId)
        .order('id')

      if (listError) throw listError

      let balance = 0
      for (const tx of transactions) {
        balance = balance + tx.receipt_qty - tx.issuance_qty
        await supabase
          .from('inventory_transactions')
          .update({ balance })
          .eq('id', tx.id)
      }
    } catch (e) {
      console.error('Failed to recalculate balances:', e)
      throw e
    }
  },

  async updateBatchStockAndCount(batchDbId) {
    try {
      // Get all transactions for this batch and recalculate stock
      const { data: transactions, error: txError } = await supabase
        .from('inventory_transactions')
        .select('receipt_qty, issuance_qty')
        .eq('inventory_batch_id', batchDbId)

      if (txError) throw txError

      let totalStock = 0
      const txCount = transactions?.length || 0
      transactions?.forEach(tx => {
        totalStock += tx.receipt_qty - tx.issuance_qty
      })

      await supabase
        .from('inventory_batches')
        .update({
          stock: totalStock,
          transaction_count: txCount
        })
        .eq('id', batchDbId)
    } catch (e) {
      console.error('Failed to update batch stock and count:', e)
      throw e
    }
  },

  async updateItem(itemData) {
    try {
      // Update the main item
      const { error: itemError } = await supabase
        .from('inventory_items')
        .update({
          name: itemData.name,
          location: itemData.location,
          min_stock: itemData.minStock,
          unit: itemData.unit
        })
        .eq('id', itemData.id)

      if (itemError) throw itemError

      // Get existing batches from DB
      const { data: existingBatches } = await supabase
        .from('inventory_batches')
        .select('id, batch_id')
        .eq('inventory_item_id', itemData.id)

      const existingBatchIds = new Set(existingBatches?.map(b => b.batch_id) || [])
      const newBatchIds = new Set(itemData.batches?.map(b => b.batchId) || [])

      // Delete batches that are no longer present
      for (const batch of existingBatches || []) {
        if (!newBatchIds.has(batch.batch_id)) {
          await this.deleteBatch(itemData.id, batch.batch_id)
        }
      }

      // Update or add batches
      if (itemData.batches) {
        for (const batch of itemData.batches) {
          if (existingBatchIds.has(batch.batchId)) {
            await this.updateBatch(itemData.id, batch.batchId, batch)
          } else {
            await this.addBatch(itemData.id, batch)
          }
        }
      }

      return itemData
    } catch (e) {
      console.error('Failed to update item:', e)
      throw e
    }
  },

  async restockItem(itemId, restockData) {
    try {
      // Find the batch
      const { data: batch } = await supabase
        .from('inventory_batches')
        .select('id, stock, transaction_count')
        .eq('inventory_item_id', itemId)
        .eq('batch_id', restockData.selectedBatch)
        .single()

      if (!batch) throw new Error('Batch not found')

      // Update batch
      await supabase
        .from('inventory_batches')
        .update({
          stock: batch.stock + restockData.quantity,
          transaction_count: batch.transaction_count + 1,
          ptr: restockData.ptrNo || batch.ptr,
          cost_per_unit: restockData.costPerUnit || batch.cost_per_unit
        })
        .eq('id', batch.id)

      // Get current balance
      const { data: transactions } = await supabase
        .from('inventory_transactions')
        .select('balance')
        .eq('inventory_item_id', itemId)
        .order('id', { ascending: false })
        .limit(1)

      const lastBalance = transactions?.[0]?.balance || 0
      const newBalance = lastBalance + restockData.quantity

      // Add transaction
      await this.addTransaction(itemId, {
        date: restockData.date,
        reference: `${restockData.selectedBatch}-${String(batch.transaction_count + 1).padStart(3, '0')}`,
        selectedBatch: restockData.selectedBatch,
        receiptQty: restockData.quantity,
        issuanceQty: 0,
        office: restockData.office || 'Unallocated',
        balance: newBalance,
        ptr: restockData.ptrNo,
        costPerUnit: restockData.costPerUnit,
        remarks: restockData.remarks || 'Restock'
      })

      return true
    } catch (e) {
      console.error('Failed to restock item:', e)
      throw e
    }
  },

  async deleteItem(itemId) {
    try {
      const { error } = await supabase
        .from('inventory_items')
        .delete()
        .eq('id', itemId)

      if (error) throw error
      return true
    } catch (e) {
      console.error('Failed to delete item:', e)
      throw e
    }
  },

  async saveItems() {
    // Not used anymore, individual operations are used
  },
  async getRequisitions() { return [] },
  async getActivities() { return [] },
  async addActivity() {},
  async issueItem() {},
  async createRequisition() {},
  async approveRequisition() {},
  async rejectRequisition() {}
}

/**
 * API client to replace Supabase direct database calls.
 * This interacts with the Next.js backend API routes.
 */

async function rpcCall(method, ...args) {
  const res = await fetch(`/api/rpc?t=${Date.now()}`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache'
    },
    body: JSON.stringify({ method, args }),
    cache: 'no-store'
  });
  
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.error || 'API Error');
  }
  return json.data;
}

export const supabaseDb = {
  // We keep the object name `supabaseDb` in the exports so we don't have to rewrite 
  // every single reference in Inventory.jsx and Dashboard.jsx
  login: (email, password) => rpcCall('login', email, password),
  getItems: (office, isAdmin, userOfficeId) => rpcCall('getItems', office, isAdmin, userOfficeId),
  searchInventoryItems: (query) => rpcCall('searchInventoryItems', query),
  getOfficesWithStockForItem: (inventoryItemId) => rpcCall('getOfficesWithStockForItem', inventoryItemId),
  getBatchesWithStockForItem: (inventoryItemId) => rpcCall('getBatchesWithStockForItem', inventoryItemId),
  addItem: (item) => rpcCall('addItem', item),
  updateItem: (item) => rpcCall('updateItem', item),
  addTransaction: (itemId, data) => rpcCall('addTransaction', itemId, data),
  updateTransaction: (itemId, index, data) => rpcCall('updateTransaction', itemId, index, data),
  deleteTransaction: (itemId, index) => rpcCall('deleteTransaction', itemId, index),
  recalculateBalances: (itemId) => rpcCall('recalculateBalances', itemId),
  restockItem: (itemId, data) => rpcCall('restockItem', itemId, data),
  addActivity: (data) => rpcCall('addActivity', data),
  deleteItem: (itemId) => rpcCall('deleteItem', itemId),
  getActivities: (role, office) => rpcCall('getActivities', role, office),
  getOffices: () => rpcCall('getOffices'),
  addItem: (item) => rpcCall('addItem', item),
  updateItem: (item) => rpcCall('updateItem', item),
  addTransaction: (itemId, data) => rpcCall('addTransaction', itemId, data),
  updateTransaction: (itemId, index, data) => rpcCall('updateTransaction', itemId, index, data),
  deleteTransaction: (itemId, index) => rpcCall('deleteTransaction', itemId, index),
  recalculateBalances: (itemId) => rpcCall('recalculateBalances', itemId),
  restockItem: (itemId, data) => rpcCall('restockItem', itemId, data),
  addActivity: (data) => rpcCall('addActivity', data),
  deleteItem: (itemId) => rpcCall('deleteItem', itemId),
  getActivities: (role, office) => rpcCall('getActivities', role, office),
  getOffices: () => rpcCall('getOffices'),
  getRequisitions: () => rpcCall('getRequisitions'),
  generateRisNo: () => rpcCall('generateRisNo'),
  addRequisition: (requisitionData) => rpcCall('addRequisition', requisitionData),
  updateRequisition: (requisitionId, updateData) => rpcCall('updateRequisition', requisitionId, updateData),
  cancelRequisition: (requisitionId) => rpcCall('cancelRequisition', requisitionId),
  updateRequisitionStatus: (requisitionId, newStatus, releaseData) => rpcCall('updateRequisitionStatus', requisitionId, newStatus, releaseData),
  getItemStockForOffice: (inventoryItemId, officeId) => rpcCall('getItemStockForOffice', inventoryItemId, officeId),
  getRsmiReportData: (year, month) => rpcCall('getRsmiReportData', year, month),
  getRpciReportData: (year) => rpcCall('getRpciReportData', year),
  getUsers: () => rpcCall('getUsers'),
  addUser: (userData) => rpcCall('addUser', userData),
  updateUser: (userData) => rpcCall('updateUser', userData),
  updateUserStatus: (userId, status) => rpcCall('updateUserStatus', userId, status),
  heartbeat: (userId) => rpcCall('heartbeat', userId),
  deleteUser: (userId) => rpcCall('deleteUser', userId),
  addEditLog: (logData) => rpcCall('addEditLog', logData),
  getEditLogs: () => rpcCall('getEditLogs')
};

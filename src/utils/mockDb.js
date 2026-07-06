// Mock Database Utility using localStorage for BPDACC Inventory

const DB_KEYS = {
  ITEMS: 'bpdacc_db_items',
  REQUISITIONS: 'bpdacc_db_requisitions',
  USERS: 'bpdacc_db_users',
  OFFICES: 'bpdacc_db_offices',
  ACTIVITIES: 'bpdacc_db_activities'
};

const DEFAULT_OFFICES = [
  { id: 1, name: 'Hemodialysis', description: 'Dialysis Unit' },
  { id: 2, name: 'Clinical Laboratory', description: 'Lab Testing' },
  { id: 3, name: 'Radiology', description: 'Imaging Department' },
  { id: 4, name: 'Admin Office', description: 'Administration' },
  { id: 5, name: 'Unallocated', description: 'Unassigned Stock' }
];

const DEFAULT_USERS = [
  { id: 1, name: 'John Doe', email: 'john@clinic.com', role: 'Admin', office: 'All', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@clinic.com', role: 'Nurse', office: 'Hemodialysis', status: 'Active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@clinic.com', role: 'Pharmacist', office: 'Admin Office', status: 'Active' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@clinic.com', role: 'Lab Tech', office: 'Clinical Laboratory', status: 'Inactive' }
];

const DEFAULT_ITEMS = [
  {
    id: 1,
    sku: 'MED-001',
    name: 'Syringes 5ml',
    location: 'Shelf A-12',
    minStock: 100,
    unit: 'pieces',
    batches: [
      { batchId: 'B-001', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-001', expiryDate: null, office: 'Hemodialysis', stock: 250, transactionCount: 3, ptr: '1.50', remarks: 'Standard syringe supply' },
      { batchId: 'B-002', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-002', expiryDate: null, office: 'Clinical Laboratory', stock: 320, transactionCount: 1, ptr: '1.50', remarks: 'For clinical laboratory use' },
      { batchId: 'B-003', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-003', expiryDate: null, office: 'Hemodialysis', stock: 200, transactionCount: 0, ptr: '1.60', remarks: 'Emergency backup batch' }
    ],
    transactions: [
      { date: '2026-06-01', reference: 'Initial Stock', selectedBatch: null, receiptQty: 770, issuanceQty: 0, office: 'All', balance: 770, ptr: '1.50', remarks: 'Opening inventory' },
      { date: '2026-06-05', reference: 'MED-001B-001-1', selectedBatch: 'B-001', receiptQty: 0, issuanceQty: 50, office: 'Hemodialysis', balance: 720, ptr: '1.50', remarks: '' },
      { date: '2026-06-06', reference: 'MED-001B-001-2', selectedBatch: 'B-001', receiptQty: 0, issuanceQty: 40, office: 'Hemodialysis', balance: 680, ptr: '1.50', remarks: '' },
      { date: '2026-06-07', reference: 'MED-001B-001-3', selectedBatch: 'B-001', receiptQty: 0, issuanceQty: 30, office: 'Hemodialysis', balance: 650, ptr: '1.50', remarks: '' },
      { date: '2026-06-10', reference: 'MED-001B-003-1', selectedBatch: 'B-003', receiptQty: 200, issuanceQty: 0, office: 'Hemodialysis', balance: 850, ptr: '1.60', remarks: 'Added restock' },
      { date: '2026-06-15', reference: 'MED-001B-002-1', selectedBatch: 'B-002', receiptQty: 0, issuanceQty: 80, office: 'Clinical Laboratory', balance: 770, ptr: '1.50', remarks: '' }
    ]
  },
  {
    id: 2,
    sku: 'MED-002',
    name: 'Gauze Pads (4x4)',
    location: 'Shelf B-05',
    minStock: 50,
    unit: 'packs',
    batches: [
      { batchId: 'B-004', brand: 'Johnson & Johnson', supplier: 'Healthcare Plus', stockNumber: 'SN-004', expiryDate: '2026-07-15', office: 'Radiology', stock: 80, transactionCount: 1, ptr: '3.20', remarks: 'Keep in dry place' },
      { batchId: 'B-005', brand: 'Johnson & Johnson', supplier: 'Healthcare Plus', stockNumber: 'SN-005', expiryDate: '2027-03-20', office: 'Radiology', stock: 40, transactionCount: 0, ptr: '3.20', remarks: 'Backup packs' }
    ],
    transactions: [
      { date: '2026-06-02', reference: 'Initial Stock', selectedBatch: null, receiptQty: 120, issuanceQty: 0, office: 'All', balance: 120, ptr: '3.20', remarks: 'Opening inventory' },
      { date: '2026-06-08', reference: 'MED-002B-004-1', selectedBatch: 'B-004', receiptQty: 0, issuanceQty: 40, office: 'Radiology', balance: 80, ptr: '3.20', remarks: '' }
    ]
  },
  {
    id: 3,
    sku: 'MED-003',
    name: 'Alcohol Swabs',
    location: 'Shelf C-08',
    minStock: 100,
    unit: 'boxes',
    batches: [
      { batchId: 'B-006', brand: 'Kendall', supplier: 'Pharmacy Supply Co', stockNumber: 'SN-006', expiryDate: '2026-06-30', office: 'Admin Office', stock: 35, transactionCount: 1, ptr: '4.50', remarks: 'Standard brand' },
      { batchId: 'B-007', brand: 'Kendall', supplier: 'Pharmacy Supply Co', stockNumber: 'SN-007', expiryDate: '2026-08-10', office: 'Hemodialysis', stock: 40, transactionCount: 0, ptr: '4.50', remarks: 'Near expiry warnings' }
    ],
    transactions: [
      { date: '2026-06-03', reference: 'Initial Stock', selectedBatch: null, receiptQty: 75, issuanceQty: 0, office: 'All', balance: 75, ptr: '4.50', remarks: 'Initial setup' }
    ]
  },
  {
    id: 4,
    sku: 'MED-004',
    name: 'Bandages (Assorted)',
    location: 'Shelf B-10',
    minStock: 150,
    unit: 'boxes',
    batches: [
      { batchId: 'B-008', brand: '3M', supplier: 'Healthcare Plus', stockNumber: 'SN-008', expiryDate: null, office: 'Hemodialysis', stock: 150, transactionCount: 0, ptr: '5.00', remarks: '' },
      { batchId: 'B-009', brand: '3M', supplier: 'Healthcare Plus', stockNumber: 'SN-009', expiryDate: null, office: 'Unallocated', stock: 50, transactionCount: 0, ptr: '5.00', remarks: '' }
    ],
    transactions: [
      { date: '2026-06-03', reference: 'Initial Stock', selectedBatch: null, receiptQty: 200, issuanceQty: 0, office: 'All', balance: 200, ptr: '5.00', remarks: 'Initial setup' }
    ]
  },
  {
    id: 5,
    sku: 'MED-005',
    name: 'Needles 21G',
    location: 'Shelf A-15',
    minStock: 100,
    unit: 'pieces',
    batches: [
      { batchId: 'B-010', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-010', expiryDate: '2026-08-01', office: 'Clinical Laboratory', stock: 45, transactionCount: 0, ptr: '0.80', remarks: '' }
    ],
    transactions: [
      { date: '2026-06-04', reference: 'Initial Stock', selectedBatch: null, receiptQty: 45, issuanceQty: 0, office: 'All', balance: 45, ptr: '0.80', remarks: 'Initial setup' }
    ]
  }
];

const DEFAULT_REQUISITIONS = [
  {
    id: 1,
    risNo: 'RIS-2026-001',
    requestDate: '2026-06-29',
    requestedBy: 'Jane Smith',
    role: 'Nurse',
    office: 'Hemodialysis',
    purpose: 'For daily dialysis patient requirements',
    items: [
      { name: 'Syringes 5ml', quantity: 50, unit: 'pieces' },
      { name: 'Gauze Pads (4x4)', quantity: 20, unit: 'packs' }
    ],
    status: 'Pending'
  },
  {
    id: 2,
    risNo: 'RIS-2026-002',
    requestDate: '2026-06-28',
    requestedBy: 'Sarah Williams',
    role: 'Lab Tech',
    office: 'Clinical Laboratory',
    purpose: 'Standard clinical diagnostics procedures',
    items: [
      { name: 'Needles 21G', quantity: 20, unit: 'pieces' }
    ],
    status: 'Approved'
  },
  {
    id: 3,
    risNo: 'RIS-2026-003',
    requestDate: '2026-06-27',
    requestedBy: 'Mike Johnson',
    role: 'Pharmacist',
    office: 'Radiology',
    purpose: 'X-Ray room sanitation and dressings',
    items: [
      { name: 'Gauze Pads (4x4)', quantity: 30, unit: 'packs' }
    ],
    status: 'Rejected'
  }
];

const DEFAULT_ACTIVITIES = [
  { id: 1, item: 'Syringes 5ml', office: 'Hemodialysis', action: 'Issued', time: '2 hours ago', type: 'issued' },
  { id: 2, item: 'Alcohol Swabs', office: 'Admin Office', action: 'Expired', time: '3 hours ago', type: 'expired' },
  { id: 3, item: 'Gauze Pads (4x4)', office: 'Radiology', action: 'About to Expire', time: '4 hours ago', type: 'warning' },
  { id: 4, item: 'Bandages (Assorted)', office: 'Hemodialysis', action: 'Allocated', time: '5 hours ago', type: 'allocated' },
  { id: 5, item: 'Needles 21G', office: 'Clinical Laboratory', action: 'Added', time: '6 hours ago', type: 'added' }
];

// Helper functions to interact with LocalStorage
const getFromStorage = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  if (!value) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    console.error(`Error parsing key: ${key}`, e);
    return defaultValue;
  }
};

const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const mockDb = {
  // Items & Stock
  getItems: () => getFromStorage(DB_KEYS.ITEMS, DEFAULT_ITEMS),
  saveItems: (items) => saveToStorage(DB_KEYS.ITEMS, items),
  
  // Requisitions
  getRequisitions: () => getFromStorage(DB_KEYS.REQUISITIONS, DEFAULT_REQUISITIONS),
  saveRequisitions: (reqs) => saveToStorage(DB_KEYS.REQUISITIONS, reqs),

  // Users
  getUsers: () => getFromStorage(DB_KEYS.USERS, DEFAULT_USERS),
  saveUsers: (users) => saveToStorage(DB_KEYS.USERS, users),

  // Offices
  getOffices: () => getFromStorage(DB_KEYS.OFFICES, DEFAULT_OFFICES),
  saveOffices: (offices) => saveToStorage(DB_KEYS.OFFICES, offices),

  // Activity feed
  getActivities: () => getFromStorage(DB_KEYS.ACTIVITIES, DEFAULT_ACTIVITIES),
  saveActivities: (activities) => saveToStorage(DB_KEYS.ACTIVITIES, activities),

  addActivity: (item, office, action, type) => {
    const activities = getFromStorage(DB_KEYS.ACTIVITIES, DEFAULT_ACTIVITIES);
    const newActivity = {
      id: Date.now(),
      item,
      office,
      action,
      time: 'Just now',
      type
    };
    const updated = [newActivity, ...activities.slice(0, 19)]; // Limit to 20 activities
    saveToStorage(DB_KEYS.ACTIVITIES, updated);
    return updated;
  },

  // Database mutations
  restockItem: (itemId, batchId, qty, reference, office, ptr = '0.00', remarks = '') => {
    const items = mockDb.getItems();
    const updated = items.map(item => {
      if (item.id === itemId) {
        const batches = item.batches.map(b => {
          if (b.batchId === batchId) {
            return { ...b, stock: b.stock + qty };
          }
          return b;
        });

        // Recalculate transaction balance
        const prevBalance = item.transactions.length > 0 ? item.transactions[item.transactions.length - 1].balance : 0;
        const newTx = {
          date: new Date().toISOString().split('T')[0],
          reference: reference || `RESTOCK-${Date.now().toString().slice(-4)}`,
          selectedBatch: batchId,
          receiptQty: qty,
          issuanceQty: 0,
          office: office,
          balance: prevBalance + qty,
          ptr,
          remarks
        };

        return {
          ...item,
          batches,
          transactions: [...item.transactions, newTx]
        };
      }
      return item;
    });
    mockDb.saveItems(updated);
    return updated;
  },

  issueItem: (itemId, batchId, qty, reference, office, ptr = '0.00', remarks = '') => {
    const items = mockDb.getItems();
    let success = false;
    let errorMsg = '';
    const updated = items.map(item => {
      if (item.id === itemId) {
        const batch = item.batches.find(b => b.batchId === batchId);
        if (!batch || batch.stock < qty) {
          errorMsg = `Insufficient stock in batch ${batchId}. Available: ${batch ? batch.stock : 0}`;
          return item;
        }

        success = true;
        const batches = item.batches.map(b => {
          if (b.batchId === batchId) {
            return { ...b, stock: b.stock - qty, transactionCount: (b.transactionCount || 0) + 1 };
          }
          return b;
        });

        const prevBalance = item.transactions.length > 0 ? item.transactions[item.transactions.length - 1].balance : 0;
        const newTx = {
          date: new Date().toISOString().split('T')[0],
          reference: reference || `ISSUE-${Date.now().toString().slice(-4)}`,
          selectedBatch: batchId,
          receiptQty: 0,
          issuanceQty: qty,
          office: office,
          balance: prevBalance - qty,
          ptr,
          remarks
        };

        return {
          ...item,
          batches,
          transactions: [...item.transactions, newTx]
        };
      }
      return item;
    });

    if (success) {
      mockDb.saveItems(updated);
      return { success: true, items: updated };
    }
    return { success: false, error: errorMsg };
  },

  createRequisition: (req) => {
    const requisitions = mockDb.getRequisitions();
    const newReq = {
      id: Date.now(),
      risNo: req.risNo,
      requestDate: req.date || new Date().toISOString().split('T')[0],
      requestedBy: req.requestedBy,
      role: req.role || 'Nurse',
      office: req.office,
      purpose: req.purpose || '',
      items: req.items, // Array of { name, quantity, unit }
      status: 'Pending'
    };
    const updated = [...requisitions, newReq];
    mockDb.saveRequisitions(updated);
    mockDb.addActivity(
      req.items.map(i => `${i.name} (${i.quantity})`).join(', '),
      req.office,
      'Requested Requisition',
      'allocated'
    );
    return updated;
  },

  approveRequisition: (reqId) => {
    const requisitions = mockDb.getRequisitions();
    let success = true;
    let warningDetails = [];

    const req = requisitions.find(r => r.id === reqId);
    if (!req) return { success: false, error: 'Requisition not found' };

    // Deduct stock for each requested item
    const items = mockDb.getItems();
    const updatedItems = [...items];

    for (const reqItem of req.items) {
      const dbItem = updatedItems.find(i => i.name.toLowerCase() === reqItem.name.toLowerCase());
      if (dbItem) {
        // Find a batch that matches the office or is unallocated, otherwise use the first batch with stock
        let targetBatch = dbItem.batches.find(b => b.office === req.office && b.stock >= reqItem.quantity);
        if (!targetBatch) {
          targetBatch = dbItem.batches.find(b => b.stock >= reqItem.quantity);
        }

        if (targetBatch) {
          // Deduct stock
          targetBatch.stock -= reqItem.quantity;
          targetBatch.transactionCount = (targetBatch.transactionCount || 0) + 1;
          
          // Log transaction
          const prevBalance = dbItem.transactions.length > 0 ? dbItem.transactions[dbItem.transactions.length - 1].balance : 0;
          dbItem.transactions.push({
            date: new Date().toISOString().split('T')[0],
            reference: req.risNo,
            selectedBatch: targetBatch.batchId,
            receiptQty: 0,
            issuanceQty: reqItem.quantity,
            office: req.office,
            balance: prevBalance - reqItem.quantity,
            ptr: targetBatch.ptr || '0.00',
            remarks: 'Approved via Requisition Requisition'
          });
        } else {
          // If no batch has enough stock, do a partial deduction or mark warning
          warningDetails.push(`Could not automatically deduct stock for ${reqItem.name} - insufficient stock in any single batch.`);
        }
      } else {
        warningDetails.push(`Item "${reqItem.name}" was not found in active inventory catalog.`);
      }
    }

    // Save items if we updated them
    mockDb.saveItems(updatedItems);

    // Update Requisition status
    const updatedReqs = requisitions.map(r => {
      if (r.id === reqId) {
        return { ...r, status: 'Approved' };
      }
      return r;
    });
    mockDb.saveRequisitions(updatedReqs);

    mockDb.addActivity(
      req.items.map(i => `${i.name} (${i.quantity})`).join(', '),
      req.office,
      'Approved & Issued Requisition',
      'issued'
    );

    return { success: true, warning: warningDetails.length > 0 ? warningDetails.join(' | ') : null };
  },

  rejectRequisition: (reqId) => {
    const requisitions = mockDb.getRequisitions();
    const updatedReqs = requisitions.map(r => {
      if (r.id === reqId) {
        return { ...r, status: 'Rejected' };
      }
      return r;
    });
    mockDb.saveRequisitions(updatedReqs);

    const req = requisitions.find(r => r.id === reqId);
    if (req) {
      mockDb.addActivity(
        req.items.map(i => `${i.name} (${i.quantity})`).join(', '),
        req.office,
        'Rejected Requisition',
        'expired'
      );
    }

    return updatedReqs;
  }
};

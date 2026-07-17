import { NextResponse } from 'next/server';
import prisma from '../../../lib/db';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const body = await req.json();
    const { method, args } = body;

    let result;
    switch (method) {
      case 'login': {
        const [email, password] = args;
        const user = await prisma.user.findUnique({
          where: { email },
          include: { office: true }
        });
        if (!user) {
          throw new Error('Invalid email or password');
        }
        
        const isMatch = user.password.startsWith('$2a$') || user.password.startsWith('$2b$') 
          ? await bcrypt.compare(password, user.password)
          : user.password === password;

        if (!isMatch) {
          throw new Error('Invalid email or password');
        }
        if (user.status !== 'Active') {
          throw new Error('User account is inactive');
        }
        result = {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          office: user.office ? user.office.name : 'N/A',
          officeId: user.officeId
        };
        break;
      }

      case 'getUsers': {
        const users = await prisma.user.findMany({
          include: { office: true },
          orderBy: { name: 'asc' }
        });
        result = users.map(u => {
          const { password, ...userWithoutPassword } = u;
          return {
            ...userWithoutPassword,
            officeName: u.office ? u.office.name : 'N/A'
          };
        });
        break;
      }

      case 'addUser': {
        const [userData] = args;
        
        const existingUser = await prisma.user.findUnique({
          where: { email: userData.email }
        });
        if (existingUser) {
          throw new Error('A user with this email already exists');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        let officeId = null;
        if (userData.office) {
          const office = await prisma.office.findFirst({
            where: { name: userData.office }
          });
          if (office) officeId = office.id;
        }

        const newUser = await prisma.user.create({
          data: {
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
            officeId: officeId,
            status: userData.status || 'Active'
          }
        });
        
        const { password, ...userWithoutPassword } = newUser;
        result = userWithoutPassword;
        break;
      }

      case 'updateUser': {
        const [userData] = args;
        
        let officeId = null;
        if (userData.office) {
          const office = await prisma.office.findFirst({
            where: { name: userData.office }
          });
          if (office) officeId = office.id;
        }

        const dataToUpdate = {
          name: userData.name,
          email: userData.email,
          officeId: officeId,
          status: userData.status
        };

        if (userData.password && userData.password.trim() !== '') {
          const salt = await bcrypt.genSalt(10);
          dataToUpdate.password = await bcrypt.hash(userData.password, salt);
        }

        const updatedUser = await prisma.user.update({
          where: { id: userData.id },
          data: dataToUpdate
        });
        
        const { password, ...userWithoutPassword } = updatedUser;
        result = userWithoutPassword;
        break;
      }

      case 'deleteUser': {
        const [userId] = args;
        
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (user && user.isAdmin) {
          throw new Error('Cannot delete super admin account');
        }

        result = await prisma.user.delete({ where: { id: userId } });
        break;
      }

      case 'getItems': {
        const [office, isAdmin, userOfficeId] = args;
        console.log('[API getItems] args:', { office, isAdmin, userOfficeId });
        
        let officeCondition = undefined;
        let batchCondition = undefined;
        let txCondition = undefined;
        
        if (!isAdmin && userOfficeId) {
          officeCondition = { batches: { some: { officeId: userOfficeId } } };
          batchCondition = { where: { officeId: userOfficeId }, orderBy: { id: 'asc' }, include: { office: true } };
          txCondition = { where: { officeId: userOfficeId }, orderBy: { id: 'asc' }, include: { office: true } };
        } else if (office && office !== 'All') {
          if (office === 'Unallocated') {
             officeCondition = { batches: { some: { officeId: null } } };
             batchCondition = { where: { officeId: null }, orderBy: { id: 'asc' }, include: { office: true } };
             txCondition = { where: { officeId: null }, orderBy: { id: 'asc' }, include: { office: true } };
          } else {
             officeCondition = { batches: { some: { office: { name: office } } } };
             batchCondition = { where: { office: { name: office } }, orderBy: { id: 'asc' }, include: { office: true } };
             txCondition = { where: { office: { name: office } }, orderBy: { id: 'asc' }, include: { office: true } };
          }
        } else {
           batchCondition = { orderBy: { id: 'asc' }, include: { office: true } };
           txCondition = { orderBy: { id: 'asc' }, include: { office: true } };
        }

        const items = await prisma.inventoryItem.findMany({
          where: officeCondition,
          include: {
            batches: batchCondition,
            transactions: txCondition
          },
          orderBy: { id: 'asc' }
        });

        result = items.map(item => ({
           ...item,
           batches: item.batches.map(b => ({ ...b, office: b.office ? b.office.name : 'Unallocated' })),
           transactions: item.transactions.map(t => ({ ...t, office: t.office ? t.office.name : 'Unallocated' }))
        }));
        break;
      }
      
      case 'addItem': {
        const [newItem] = args;
        const allOffices = await prisma.office.findMany();
        const officeMap = allOffices.reduce((map, o) => { map[o.name] = o.id; return map; }, {});
        
        result = await prisma.$transaction(async (tx) => {
          const item = await tx.inventoryItem.create({
            data: {
              sku: newItem.sku,
              name: newItem.name,
              location: newItem.location,
              minStock: newItem.minStock,
              unit: newItem.unit || 'Pieces',
              batches: {
                create: newItem.batches.map(b => ({
                  batchId: b.batchId,
                  brand: b.brand,
                  supplier: b.supplier,
                  stockNumber: b.stockNumber,
                  expiryDate: b.expiryDate ? new Date(b.expiryDate) : null,
                  officeId: officeMap[b.office] || null,
                  stock: b.stock,
                  transactionCount: b.transactionCount,
                  ptr: b.ptr,
                  costPerUnit: b.costPerUnit,
                  remarks: b.remarks
                }))
              },
              transactions: {
                create: newItem.transactions.map(t => ({
                  date: new Date(t.date),
                  reference: t.reference,
                  receiptQty: t.receiptQty,
                  issuanceQty: t.issuanceQty,
                  officeId: officeMap[t.office] || null,
                  balance: t.balance,
                  ptr: t.ptr,
                  costPerUnit: t.costPerUnit,
                  remarks: t.remarks
                }))
              }
            }
          });
          return item;
        });
        break;
      }
      
      case 'updateItem': {
        const [itemData] = args;
        const allOffices = await prisma.office.findMany();
        const officeMap = allOffices.reduce((map, o) => { map[o.name] = o.id; return map; }, {});

        result = await prisma.$transaction(async (tx) => {
          const updatedItem = await tx.inventoryItem.update({
            where: { id: itemData.id },
            data: {
              name: itemData.name,
              location: itemData.location,
              minStock: itemData.minStock,
              unit: itemData.unit
            }
          });

          if (itemData.batches) {
            const existingBatches = await tx.inventoryBatch.findMany({
              where: { inventoryItemId: itemData.id }
            });
            
            const newBatchIds = itemData.batches.filter(b => b.id).map(b => b.id);
            
            const batchesToDelete = existingBatches.filter(b => !newBatchIds.includes(b.id));
            for (const b of batchesToDelete) {
              await tx.inventoryBatch.delete({ where: { id: b.id } });
            }

            for (const b of itemData.batches) {
              if (b.id) {
                await tx.inventoryBatch.update({
                  where: { id: b.id },
                  data: {
                    batchId: b.batchId,
                    brand: b.brand,
                    supplier: b.supplier,
                    stockNumber: b.stockNumber,
                    expiryDate: b.expiryDate ? new Date(b.expiryDate) : null,
                    officeId: officeMap[b.office] || null,
                    ptr: b.ptr,
                    costPerUnit: b.costPerUnit,
                    remarks: b.remarks
                  }
                });
              } else {
                await tx.inventoryBatch.create({
                  data: {
                    inventoryItemId: itemData.id,
                    batchId: b.batchId,
                    brand: b.brand,
                    supplier: b.supplier,
                    stockNumber: b.stockNumber,
                    expiryDate: b.expiryDate ? new Date(b.expiryDate) : null,
                    officeId: officeMap[b.office] || null,
                    stock: b.stock || 0,
                    transactionCount: b.transactionCount || 0,
                    ptr: b.ptr,
                    costPerUnit: b.costPerUnit,
                    remarks: b.remarks
                  }
                });
              }
            }
          }

          return updatedItem;
        });
        break;
      }
      
      case 'addActivity': {
        const [data] = args;
        result = await prisma.activity.create({
          data: {
            item: data.item,
            office: data.office,
            action: data.action,
            type: data.type,
            time: new Date().toLocaleTimeString()
          }
        });
        break;
      }

      case 'getActivities': {
        const [role, office] = args;
        result = await prisma.activity.findMany({ orderBy: { id: 'desc' } });
        break;
      }
      
      case 'getOffices': {
        result = await prisma.office.findMany();
        break;
      }

      case 'getRequisitions': {
        result = await prisma.requisition.findMany({
          include: {
            items: {
              include: {
                release: {
                  include: { sourceOffice: true }
                }
              }
            },
            requestedBy: true,
            office: true
          },
          orderBy: { id: 'desc' }
        });
        break;
      }

      // Auto-generate RIS No. in format RIS-YYMM-XXXX
      // Counter is based on total requisitions submitted this month (shared across all users)
      case 'generateRisNo': {
        const now = new Date();
        const yy = String(now.getFullYear()).slice(-2);
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const yearMonth = `${yy}${mm}`;

        const counterRecord = await prisma.risCounter.findUnique({
          where: { yearMonth }
        });

        const nextNumber = (counterRecord ? counterRecord.counter : 0) + 1;

        result = { risNo: `RIS-${yearMonth}-${String(nextNumber).padStart(4, '0')}` };
        break;
      }

      case 'addRequisition': {
        const [requisitionData] = args;
        
        result = await prisma.$transaction(async (tx) => {
          const now = new Date();
          const yy = String(now.getFullYear()).slice(-2);
          const mm = String(now.getMonth() + 1).padStart(2, '0');
          const yearMonth = `${yy}${mm}`;

          const counterRecord = await tx.risCounter.upsert({
            where: { yearMonth },
            update: { counter: { increment: 1 } },
            create: { yearMonth, counter: 1 }
          });

          const finalRisNo = `RIS-${yearMonth}-${String(counterRecord.counter).padStart(4, '0')}`;

          const req = await tx.requisition.create({
            data: {
              risNo: finalRisNo,
              requestedByPrintedName: requisitionData.requestedByPrintedName || null,
              purpose: requisitionData.purpose,
              requestedById: requisitionData.requestedById,
              officeId: requisitionData.officeId,
              status: 'Pending',
              items: {
                create: requisitionData.items.map(item => ({
                  inventoryItemId: item.inventoryItemId || null,
                  itemName: item.itemName,
                  quantity: item.quantity,
                  unit: item.unit || '',
                  stockNumber: item.stockNumber || null,
                  isUnlisted: item.isUnlisted || false
                }))
              }
            },
            include: { items: true }
          });
          
          return req;
        });
        break;
      }

      // Non-admin edits a pending requisition
      case 'updateRequisition': {
        const [requisitionId, updateData] = args;

        const req = await prisma.requisition.findUnique({ where: { id: requisitionId } });
        if (!req) throw new Error('Requisition not found');
        if (req.status !== 'Pending') throw new Error('Only pending requisitions can be edited');

        result = await prisma.$transaction(async (tx) => {
          // Delete existing items and recreate
          await tx.requisitionItem.deleteMany({ where: { requisitionId } });

          const updated = await tx.requisition.update({
            where: { id: requisitionId },
            data: {
              requestedByPrintedName: updateData.requestedByPrintedName || null,
              purpose: updateData.purpose,
              items: {
                create: updateData.items.map(item => ({
                  inventoryItemId: item.inventoryItemId || null,
                  itemName: item.itemName,
                  quantity: item.quantity,
                  unit: item.unit || '',
                  stockNumber: item.stockNumber || null,
                  isUnlisted: item.isUnlisted || false
                }))
              }
            },
            include: { items: true }
          });

          return updated;
        });
        break;
      }

      // Non-admin cancels a pending requisition
      case 'cancelRequisition': {
        const [requisitionId] = args;

        const req = await prisma.requisition.findUnique({ where: { id: requisitionId } });
        if (!req) throw new Error('Requisition not found');
        if (req.status !== 'Pending') throw new Error('Only pending requisitions can be cancelled');

        result = await prisma.requisition.update({
          where: { id: requisitionId },
          data: { status: 'Cancelled' }
        });
        break;
      }

      // Admin approves (only) with releasing data per item
      case 'updateRequisitionStatus': {
        const [requisitionId, newStatus, releaseData] = args;

        if (newStatus !== 'Approved') {
          throw new Error('Only Approved status is allowed');
        }

        result = await prisma.$transaction(async (tx) => {
          const requisition = await tx.requisition.update({
            where: { id: requisitionId },
            data: { status: newStatus },
            include: { items: true, requestedBy: true, office: true }
          });

          // Process each item's release data
          for (const reqItem of requisition.items) {
            const releaseInfo = releaseData?.find(r => r.requisitionItemId === reqItem.id);
            const inventoryItemId = reqItem.inventoryItemId;
            const issuanceQty = releaseInfo?.quantityReleased ?? Number(reqItem.quantity) ?? 0;
            const sourceOfficeId = releaseInfo?.sourceOfficeId || requisition.officeId || null;
            const releaseRemarks = releaseInfo?.remarks || null;

            // Create the RequisitionItemRelease record
            await tx.requisitionItemRelease.create({
              data: {
                requisitionItemId: reqItem.id,
                sourceOfficeId: sourceOfficeId,
                quantityReleased: issuanceQty,
                remarks: releaseRemarks
              }
            });

            // Only deduct from inventory for listed (non-unlisted) items
            if (!reqItem.isUnlisted && inventoryItemId && issuanceQty > 0) {
              // Try to find batch for the source office
              let batch = null;
              if (reqItem.stockNumber) {
                batch = await tx.inventoryBatch.findFirst({
                  where: { inventoryItemId, stockNumber: reqItem.stockNumber }
                });
              }
              if (!batch) {
                batch = await tx.inventoryBatch.findFirst({
                  where: { inventoryItemId, ...(sourceOfficeId ? { officeId: sourceOfficeId } : {}) },
                  orderBy: { id: 'asc' }
                });
              }
              if (!batch) {
                batch = await tx.inventoryBatch.findFirst({
                  where: { inventoryItemId },
                  orderBy: { id: 'asc' }
                });
              }

              const lastTx = await tx.inventoryTransaction.findFirst({
                where: { inventoryItemId },
                orderBy: { id: 'desc' }
              });
              const lastBalance = lastTx ? Number(lastTx.balance) : (batch ? Number(batch.stock) : 0);
              const newBalance = lastBalance - issuanceQty;

              const costPerUnit = batch && batch.costPerUnit ? Number(batch.costPerUnit) : null;

              await tx.inventoryTransaction.create({
                data: {
                  inventoryItemId,
                  inventoryBatchId: batch ? batch.id : null,
                  date: new Date(),
                  reference: requisition.risNo,
                  receiptQty: 0,
                  issuanceQty: issuanceQty,
                  balance: newBalance,
                  officeId: sourceOfficeId,
                  ptr: requisition.risNo,
                  costPerUnit: costPerUnit,
                  remarks: releaseRemarks || `BPDACC - ${requisition.office?.name || ''}`
                }
              });

              if (batch) {
                await tx.inventoryBatch.update({
                  where: { id: batch.id },
                  data: {
                    stock: Math.max(0, Number(batch.stock) - issuanceQty),
                    transactionCount: { increment: 1 }
                  }
                });
              }
            }
          }

          return requisition;
        });

        break;
      }

      // Get available stock for a specific item in a specific office
      case 'getItemStockForOffice': {
        const [inventoryItemId, officeId] = args;
        const batches = await prisma.inventoryBatch.findMany({
          where: {
            inventoryItemId,
            officeId: officeId || null
          }
        });
        const totalStock = batches.reduce((sum, b) => sum + Number(b.stock), 0);
        result = { stock: totalStock };
        break;
      }
      
      case 'deleteItem': {
        const [itemId] = args;
        result = await prisma.inventoryItem.delete({ where: { id: itemId } });
        break;
      }

      case 'addTransaction': {
        const [itemId, data] = args;
        const allOffices = await prisma.office.findMany();
        const officeMap = allOffices.reduce((map, o) => { map[o.name] = o.id; return map; }, {});
        result = await prisma.inventoryTransaction.create({
          data: {
            inventoryItemId: itemId,
            date: new Date(data.date),
            reference: data.reference,
            receiptQty: data.receiptQty,
            issuanceQty: data.issuanceQty,
            balance: data.balance,
            officeId: officeMap[data.office] || null,
            ptr: data.ptr,
            costPerUnit: data.costPerUnit,
            remarks: data.remarks
          }
        });
        break;
      }

      case 'updateTransaction': {
        const [itemId, index, data] = args;
        const txs = await prisma.inventoryTransaction.findMany({
          where: { inventoryItemId: itemId },
          orderBy: { id: 'asc' }
        });
        const allOffices = await prisma.office.findMany();
        const officeMap = allOffices.reduce((map, o) => { map[o.name] = o.id; return map; }, {});
        if (txs[index]) {
          result = await prisma.inventoryTransaction.update({
            where: { id: txs[index].id },
            data: {
              date: new Date(data.date),
              reference: data.reference,
              receiptQty: data.receiptQty,
              issuanceQty: data.issuanceQty,
              balance: data.balance,
              officeId: officeMap[data.office] || null,
              ptr: data.ptr,
              costPerUnit: data.costPerUnit,
              remarks: data.remarks
            }
          });
        }
        break;
      }

      case 'deleteTransaction': {
        const [itemId, index] = args;
        const txs = await prisma.inventoryTransaction.findMany({
          where: { inventoryItemId: itemId },
          orderBy: { id: 'asc' }
        });
        if (txs[index]) {
          result = await prisma.inventoryTransaction.delete({
            where: { id: txs[index].id }
          });
        }
        break;
      }

      case 'recalculateBalances': {
        const [itemId] = args;
        const txs = await prisma.inventoryTransaction.findMany({
          where: { inventoryItemId: itemId },
          orderBy: { id: 'asc' }
        });
        let balance = 0;
        for (const tx of txs) {
          balance += tx.receiptQty - tx.issuanceQty;
          await prisma.inventoryTransaction.update({
            where: { id: tx.id },
            data: { balance }
          });
        }
        const batches = await prisma.inventoryBatch.findMany({
          where: { inventoryItemId: itemId },
          orderBy: { id: 'asc' }
        });
        if (batches.length > 0) {
          await prisma.inventoryBatch.update({
            where: { id: batches[0].id },
            data: { stock: balance }
          });
        }
        result = { success: true };
        break;
      }

      case 'restockItem': {
        const [itemId, data] = args;
        const allOffices = await prisma.office.findMany();
        const officeMap = allOffices.reduce((map, o) => { map[o.name] = o.id; return map; }, {});

        const existingBatches = await prisma.inventoryBatch.findMany({
          where: { inventoryItemId: itemId },
          select: { batchId: true },
          orderBy: { id: 'asc' }
        });

        const item = await prisma.inventoryItem.findUnique({
          where: { id: itemId },
          select: { sku: true }
        });

        const computeNextBatchId = (sku, batchIds) => {
          const prefix = `${sku}-`;
          let maxNum = 0;
          for (const raw of batchIds) {
            const id = raw?.batchId;
            if (!id || typeof id !== 'string') continue;
            if (!id.startsWith(prefix)) continue;
            const suffix = id.slice(prefix.length);
            const num = Number(suffix);
            if (!Number.isNaN(num) && num > maxNum) maxNum = num;
          }
          return `${sku}-${String(maxNum + 1).padStart(3, '0')}`;
        };

        const batchId = data.batchId || (item?.sku ? computeNextBatchId(item.sku, existingBatches) : null);
        if (!batchId) {
          throw new Error('Unable to generate batchId for restock.');
        }

        const officeId = officeMap[data.office] || null;
        const qty = Number(data.quantity);
        if (!Number.isFinite(qty) || qty <= 0) {
          throw new Error('Restock quantity must be a number greater than 0.');
        }

        const newBatch = await prisma.inventoryBatch.create({
          data: {
            inventoryItemId: itemId,
            batchId,
            stockNumber: `SN-${Date.now().toString().slice(-6)}`,
            expiryDate: null,
            officeId,
            stock: qty,
            transactionCount: 0,
            ptr: data.ptrNo || null,
            costPerUnit: data.costPerUnit ? parseFloat(data.costPerUnit) : null,
            remarks: data.remarks || null
          }
        });

        const txs = await prisma.inventoryTransaction.findMany({
          where: { inventoryItemId: itemId },
          orderBy: { id: 'asc' }
        });
        const lastBalance = txs.length > 0 ? txs[txs.length - 1].balance : 0;

        result = await prisma.inventoryTransaction.create({
          data: {
            inventoryItemId: itemId,
            inventoryBatchId: newBatch.id,
            date: new Date(data.date),
            reference: data.ptrNo || batchId,
            receiptQty: qty,
            issuanceQty: 0,
            balance: lastBalance + qty,
            officeId,
            ptr: data.ptrNo || null,
            costPerUnit: data.costPerUnit ? parseFloat(data.costPerUnit) : null,
            remarks: data.remarks || null
          }
        });
        break;
      }

      default:
        return NextResponse.json({ error: 'Method not found: ' + method }, { status: 404 });
    }

    return NextResponse.json({ data: result });
  } catch (error) {
    console.error('RPC Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

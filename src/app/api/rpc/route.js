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
        
        // We will support both bcrypt hashes and raw passwords (for the initial seeded admin)
        // However, we should encourage encrypting all passwords. If it's the old 'admin' plain text, 
        // we'll allow it for now, but newly created accounts use bcrypt.
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
          office: user.office ? user.office.name : 'N/A'
        };
        break;
      }

      case 'getUsers': {
        const users = await prisma.user.findMany({
          include: { office: true },
          orderBy: { name: 'asc' }
        });
        // Remove passwords before sending to client
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
        
        // Check if email already exists
        const existingUser = await prisma.user.findUnique({
          where: { email: userData.email }
        });
        if (existingUser) {
          throw new Error('A user with this email already exists');
        }

        // Hash the password
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
        
        // Ensure user is not an admin
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (user && user.isAdmin) {
          throw new Error('Cannot delete super admin account');
        }

        result = await prisma.user.delete({ where: { id: userId } });
        break;
      }

      case 'getItems': {
        const [office] = args;
        const items = await prisma.inventoryItem.findMany({
          where: office && office !== 'All' ? {
            batches: {
              some: { office: { name: office } }
            }
          } : undefined,
          include: {
            batches: office && office !== 'All' ? {
              where: { office: { name: office } },
              orderBy: { id: 'asc' }
            } : {
              orderBy: { id: 'asc' }
            },
            transactions: office && office !== 'All' ? {
              where: { office: { name: office } },
              orderBy: { id: 'asc' }
            } : {
              orderBy: { id: 'asc' }
            }
          },
          orderBy: { id: 'asc' }
        });
        result = items;
        break;
      }
      
      case 'addItem': {
        const [newItem] = args;
        
        // Prisma transaction to insert item, batches, and transactions
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
        result = await prisma.inventoryItem.update({
          where: { id: itemData.id },
          data: {
            name: itemData.name,
            location: itemData.location,
            minStock: itemData.minStock,
            unit: itemData.unit
          }
        });
        // Note: we might need to update batches too if they were edited
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
        // In the future we might filter activities by role/office
        result = await prisma.activity.findMany({ orderBy: { id: 'desc' } });
        break;
      }
      
      case 'getOffices': {
        result = await prisma.office.findMany();
        break;
      }

      case 'getRequisitions': {
        result = await prisma.requisition.findMany({
          include: { items: true, requestedBy: true, office: true },
          orderBy: { id: 'desc' }
        });
        break;
      }
      
      case 'deleteItem': {
        const [itemId] = args;
        result = await prisma.inventoryItem.delete({ where: { id: itemId } });
        break;
      }

      case 'addTransaction': {
        const [itemId, data] = args;
        // In original Supabase we stored them in a relational table too (or json array)
        result = await prisma.inventoryTransaction.create({
          data: {
            inventoryItemId: itemId,
            date: new Date(data.date),
            reference: data.reference,
            receiptQty: data.receiptQty,
            issuanceQty: data.issuanceQty,
            balance: data.balance,
            officeId: null, // Depending on if we look up office by name
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
        if (txs[index]) {
          result = await prisma.inventoryTransaction.update({
            where: { id: txs[index].id },
            data: {
              date: new Date(data.date),
              reference: data.reference,
              receiptQty: data.receiptQty,
              issuanceQty: data.issuanceQty,
              balance: data.balance,
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
        // Also update the batch stock. For simplicity we update the first batch if single batch
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
        const batches = await prisma.inventoryBatch.findMany({
          where: { inventoryItemId: itemId },
          orderBy: { id: 'asc' }
        });
        if (batches.length > 0) {
          // Update stock of the first batch
          await prisma.inventoryBatch.update({
            where: { id: batches[0].id },
            data: { stock: batches[0].stock + data.quantity }
          });
          
          // Fetch transactions to calculate new balance
          const txs = await prisma.inventoryTransaction.findMany({
            where: { inventoryItemId: itemId },
            orderBy: { id: 'asc' }
          });
          const lastBalance = txs.length > 0 ? txs[txs.length - 1].balance : 0;

          // Create restock transaction
          result = await prisma.inventoryTransaction.create({
            data: {
              inventoryItemId: itemId,
              date: new Date(data.date),
              reference: data.ptrNo || 'RESTOCK',
              receiptQty: data.quantity,
              issuanceQty: 0,
              balance: lastBalance + data.quantity,
              ptr: data.ptrNo,
              costPerUnit: data.costPerUnit ? parseFloat(data.costPerUnit) : null,
              remarks: data.remarks
            }
          });
        }
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

module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/db.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const prismaClientSingleton = ()=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
};
// Ensure the prisma instance is not recreated during hot-reloading in dev
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
const __TURBOPACK__default__export__ = prisma;
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/src/app/api/rpc/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
;
;
const dynamic = 'force-dynamic';
async function POST(req) {
    try {
        const body = await req.json();
        const { method, args } = body;
        let result;
        switch(method){
            case 'login':
                {
                    const [email, password] = args;
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                        where: {
                            email
                        },
                        include: {
                            office: true
                        }
                    });
                    if (!user || user.password !== password) {
                        throw new Error('Invalid email or password');
                    }
                    if (user.status !== 'Active') {
                        throw new Error('User account is inactive');
                    }
                    result = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        office: user.office ? user.office.name : 'All'
                    };
                    break;
                }
            case 'getItems':
                {
                    const [office] = args;
                    const items = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryItem.findMany({
                        where: office && office !== 'All' ? {
                            batches: {
                                some: {
                                    office: {
                                        name: office
                                    }
                                }
                            }
                        } : undefined,
                        include: {
                            batches: office && office !== 'All' ? {
                                where: {
                                    office: {
                                        name: office
                                    }
                                },
                                orderBy: {
                                    id: 'asc'
                                }
                            } : {
                                orderBy: {
                                    id: 'asc'
                                }
                            },
                            transactions: office && office !== 'All' ? {
                                where: {
                                    office: {
                                        name: office
                                    }
                                },
                                orderBy: {
                                    id: 'asc'
                                }
                            } : {
                                orderBy: {
                                    id: 'asc'
                                }
                            }
                        },
                        orderBy: {
                            id: 'asc'
                        }
                    });
                    result = items;
                    break;
                }
            case 'addItem':
                {
                    const [newItem] = args;
                    // Prisma transaction to insert item, batches, and transactions
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
                        const item = await tx.inventoryItem.create({
                            data: {
                                sku: newItem.sku,
                                name: newItem.name,
                                location: newItem.location,
                                minStock: newItem.minStock,
                                unit: newItem.unit || 'Pieces',
                                batches: {
                                    create: newItem.batches.map((b)=>({
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
                                    create: newItem.transactions.map((t)=>({
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
            case 'updateItem':
                {
                    const [itemData] = args;
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryItem.update({
                        where: {
                            id: itemData.id
                        },
                        data: {
                            name: itemData.name,
                            location: itemData.location,
                            minStock: itemData.minStock,
                            unit: itemData.unit
                        }
                    });
                    break;
                }
            case 'addActivity':
                {
                    const [data] = args;
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].activity.create({
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
            case 'getActivities':
                {
                    const [role, office] = args;
                    // In the future we might filter activities by role/office
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].activity.findMany({
                        orderBy: {
                            id: 'desc'
                        }
                    });
                    break;
                }
            case 'getOffices':
                {
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].office.findMany();
                    break;
                }
            case 'getRequisitions':
                {
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].requisition.findMany({
                        include: {
                            items: true,
                            requestedBy: true,
                            office: true
                        },
                        orderBy: {
                            id: 'desc'
                        }
                    });
                    break;
                }
            case 'deleteItem':
                {
                    const [itemId] = args;
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryItem.delete({
                        where: {
                            id: itemId
                        }
                    });
                    break;
                }
            case 'addTransaction':
                {
                    const [itemId, data] = args;
                    // In original Supabase we stored them in a relational table too (or json array)
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryTransaction.create({
                        data: {
                            inventoryItemId: itemId,
                            date: new Date(data.date),
                            reference: data.reference,
                            receiptQty: data.receiptQty,
                            issuanceQty: data.issuanceQty,
                            balance: data.balance,
                            officeId: null,
                            ptr: data.ptr,
                            costPerUnit: data.costPerUnit,
                            remarks: data.remarks
                        }
                    });
                    break;
                }
            case 'updateTransaction':
                {
                    const [itemId, index, data] = args;
                    const txs = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryTransaction.findMany({
                        where: {
                            inventoryItemId: itemId
                        },
                        orderBy: {
                            id: 'asc'
                        }
                    });
                    if (txs[index]) {
                        result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryTransaction.update({
                            where: {
                                id: txs[index].id
                            },
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
            case 'deleteTransaction':
                {
                    const [itemId, index] = args;
                    const txs = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryTransaction.findMany({
                        where: {
                            inventoryItemId: itemId
                        },
                        orderBy: {
                            id: 'asc'
                        }
                    });
                    if (txs[index]) {
                        result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryTransaction.delete({
                            where: {
                                id: txs[index].id
                            }
                        });
                    }
                    break;
                }
            case 'recalculateBalances':
                {
                    const [itemId] = args;
                    const txs = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryTransaction.findMany({
                        where: {
                            inventoryItemId: itemId
                        },
                        orderBy: {
                            id: 'asc'
                        }
                    });
                    let balance = 0;
                    for (const tx of txs){
                        balance += tx.receiptQty - tx.issuanceQty;
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryTransaction.update({
                            where: {
                                id: tx.id
                            },
                            data: {
                                balance
                            }
                        });
                    }
                    // Also update the batch stock. For simplicity we update the first batch if single batch
                    const batches = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryBatch.findMany({
                        where: {
                            inventoryItemId: itemId
                        },
                        orderBy: {
                            id: 'asc'
                        }
                    });
                    if (batches.length > 0) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryBatch.update({
                            where: {
                                id: batches[0].id
                            },
                            data: {
                                stock: balance
                            }
                        });
                    }
                    result = {
                        success: true
                    };
                    break;
                }
            case 'restockItem':
                {
                    const [itemId, data] = args;
                    const batches = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryBatch.findMany({
                        where: {
                            inventoryItemId: itemId
                        },
                        orderBy: {
                            id: 'asc'
                        }
                    });
                    if (batches.length > 0) {
                        // Update stock of the first batch
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryBatch.update({
                            where: {
                                id: batches[0].id
                            },
                            data: {
                                stock: batches[0].stock + data.quantity
                            }
                        });
                        // Fetch transactions to calculate new balance
                        const txs = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryTransaction.findMany({
                            where: {
                                inventoryItemId: itemId
                            },
                            orderBy: {
                                id: 'asc'
                            }
                        });
                        const lastBalance = txs.length > 0 ? txs[txs.length - 1].balance : 0;
                        // Create restock transaction
                        result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].inventoryTransaction.create({
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
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Method not found: ' + method
                }, {
                    status: 404
                });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: result
        });
    } catch (error) {
        console.error('RPC Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0kbhxcv._.js.map
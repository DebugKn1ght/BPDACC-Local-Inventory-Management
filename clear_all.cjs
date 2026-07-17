const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient();
async function run() {
  await prisma.requisitionItemRelease.deleteMany();
  await prisma.requisitionItem.deleteMany();
  await prisma.requisition.deleteMany();
  await prisma.inventoryTransaction.deleteMany();
  await prisma.inventoryBatch.deleteMany();
  await prisma.inventoryItem.deleteMany();
  await prisma.risCounter.deleteMany();
  await prisma.activity.deleteMany();
  console.log('Cleared all data except Users and Offices.');
}
run().catch(console.error).finally(() => prisma.$disconnect());

const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient();
async function run() {
  await prisma.requisitionItemRelease.deleteMany();
  await prisma.requisitionItem.deleteMany();
  await prisma.requisition.deleteMany();
  await prisma.risCounter.deleteMany();
  console.log('Deleted all requisitions and counters');
}
run().catch(console.error).finally(() => prisma.$disconnect());

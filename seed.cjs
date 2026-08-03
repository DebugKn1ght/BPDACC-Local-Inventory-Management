const { PrismaClient } = require('./src/generated/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const OFFICES = [
  { name: 'Hemodialysis', description: 'Hemodialysis Department' },
  { name: 'Clinical Laboratory', description: 'Clinical Laboratory Department' },
  { name: 'Radiology', description: 'Radiology Department' },
  { name: 'Admin Office', description: 'Administrative Office' },
  { name: 'Unallocated', description: 'Unallocated / General Pool' },
];

const SUPER_ADMIN = {
  name: 'Super Admin',
  email: 'admin@bpdacc.com',
  password: 'admin123',
  isAdmin: true,
  officeName: 'Admin Office',
};

async function seed() {
  console.log('🌱 Seeding offices...');

  for (const office of OFFICES) {
    await prisma.office.upsert({
      where: { name: office.name },
      update: { description: office.description },
      create: office,
    });
    console.log(`  ✔ Office "${office.name}"`);
  }

  console.log('\n👤 Creating super admin account...');

  const adminOffice = await prisma.office.findFirst({
    where: { name: SUPER_ADMIN.officeName },
  });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(SUPER_ADMIN.password, salt);

  await prisma.user.upsert({
    where: { email: SUPER_ADMIN.email },
    update: {
      name: SUPER_ADMIN.name,
      isAdmin: true,
      status: 'Active',
      officeId: adminOffice ? adminOffice.id : null,
    },
    create: {
      name: SUPER_ADMIN.name,
      email: SUPER_ADMIN.email,
      password: hashedPassword,
      isAdmin: true,
      status: 'Active',
      officeId: adminOffice ? adminOffice.id : null,
    },
  });

  console.log(`  ✔ Super Admin created`);
  console.log(`    Email:    ${SUPER_ADMIN.email}`);
  console.log(`    Password: ${SUPER_ADMIN.password}`);
  console.log(`    Office:   ${SUPER_ADMIN.officeName}`);
  console.log('\n✅ Seed complete!');
}

seed()
  .catch((err) => {
    console.error('❌ Seed failed:', err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

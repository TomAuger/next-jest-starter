const { PrismaClient } = require('../src/generated/prisma');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  // Clean up existing users
  await prisma.user.deleteMany();

  // Generate up to 10 users
  const users = Array.from({ length: 10 }).map(() => ({
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: 'password123',
  }));

  // Insert users
  await prisma.user.createMany({ data: users });
}

// Export the main function
module.exports = { main };

// Only auto-run if called directly
if (require.main === module) {
  main()
    .catch(e => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
} 
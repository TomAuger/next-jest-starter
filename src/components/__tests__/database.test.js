const { PrismaClient } = require('../../generated/prisma');
const { main: seed } = require('../../../prisma/seed');
const prisma = new PrismaClient();

beforeAll(async () => {
  await seed();
});

describe('Database Seeding', () => {
  it('should have 10 users in the database', async () => {
    const users = await prisma.user.findMany();
    expect(users).toHaveLength(10);
  });

  it('should have users with valid email and name fields', async () => {
    const users = await prisma.user.findMany();
    
    users.forEach(user => {
      // Check email format
      expect(user.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      
      // Check name is not empty
      expect(user.name).toBeTruthy();
      
      // Check password is set correctly
      expect(user.password).toBe('password123');
    });
  });

  it('should have unique email addresses', async () => {
    const users = await prisma.user.findMany();
    const emails = users.map(user => user.email);
    const uniqueEmails = new Set(emails);
    
    expect(uniqueEmails.size).toBe(emails.length);
  });

  afterAll(async () => {
    // Clean up the database
    await prisma.user.deleteMany();
    // Disconnect from the database
    await prisma.$disconnect();
  });
}); 
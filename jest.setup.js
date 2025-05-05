import '@testing-library/jest-dom'
const { main } = require('./prisma/seed');

beforeAll(async () => {
  await main();
});
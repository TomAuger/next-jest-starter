# Next.js with Jest and Prisma Starter

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), enhanced with Jest testing and Prisma ORM with SQLite.

## Features

- Next.js 15 with App Router
- Jest testing setup with React Testing Library
- Prisma ORM with SQLite database
- Automatic database seeding for tests
- Faker.js integration for realistic test data

## Getting Started

First, install dependencies:

```bash
npm install
```

This will automatically:
- Install all dependencies
- Generate the Prisma client
- Set up the SQLite database with the latest schema

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup

The project uses Prisma ORM with SQLite for local development and testing. The database is automatically set up during installation.

### Database Schema

The current schema includes a `User` model with:
- `id`: Auto-incrementing primary key
- `email`: Unique string field
- `name`: Optional string field
- `password`: String field
- `createdAt`: Timestamp
- `updatedAt`: Timestamp

### Running Tests

The test suite includes:
- Component tests
- Database tests with seeded data

You can run tests in different ways:

```bash
# Run all tests (default)
npm test

# Run all tests (explicit)
npm run test:all

# Run only database tests
npm run test:database

# Run only component tests
npm run test:components

# Run tests in watch mode
npm run test:watch
```

**Note:**  
- Database seeding and cleanup only occur when running database tests (e.g., with `npm run test:database` or when database tests are included in the run).
- Component tests do **not** seed or clean up the database, so they run faster and without side effects.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Prisma Documentation](https://www.prisma.io/docs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

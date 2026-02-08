import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  const user = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: 'admin123',
    },
  });

  console.log('Created admin user:', user);

  const post = await prisma.post.create({
    data: {
      title: 'Welcome to NestJS Atomic Design Boilerplate',
      content:
        'This is the first post in our amazing boilerplate created by SR VINIX!',
      published: true,
      authorId: user.id,
    },
  });

  console.log('Created sample post:', post);

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

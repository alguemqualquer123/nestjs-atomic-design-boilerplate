import { ConfigFactory } from '@nestjs/config';

export const envConfig: ConfigFactory = () => ({
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  // Database configuration is handled by Prisma
  // DATABASE_URL is used by PrismaClient
});

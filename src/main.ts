import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envConfig } from './core/config/env.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const config = await envConfig();
  const { port } = config;
  console.log(`Starting server on port: ${port}`);
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:4200',
      'http://localhost:8080',
      config.frontendUrl,
    ].filter(Boolean),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port);
}
bootstrap();

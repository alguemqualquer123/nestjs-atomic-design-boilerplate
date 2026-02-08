# ⭐ NestJS Atomic Design Boilerplate

🚀 **Created with ❤️ by SR VINIX**  
📧 **GitHub:** [https://github.com/alguemqualquer123](https://github.com/alguemqualquer123)

A scalable NestJS boilerplate following Atomic Design principles and Clean Architecture patterns. Built with TypeScript and best practices for enterprise applications.

## ✨ Features

- 🏗️ **Atomic Design Architecture** - Organized, scalable structure
- 🔒 **Authentication & Authorization** - JWT-based security
- 🛡️ **Validation & Error Handling** - Robust input validation
- 📝 **Comprehensive Logging** - Structured logging system
- 🗄️ **Database Integration** - Prisma ORM with PostgreSQL
- 🔄 **Queue System** - Bull queues with Redis
- 🎯 **TypeScript** - Full type safety
- 🌐 **CORS Support** - Configurable cross-origin requests
- 📊 **Pagination** - Built-in pagination utilities
- 🧪 **Testing Ready** - Jest testing framework setup
- 🐳 **Docker Support** - Complete containerization
- 🚀 **Production Ready** - Multi-stage Docker builds

## 🏛️ Architecture

```
project/
├── src/                     # Source code
│   ├── core/               # Core application logic
│   │   ├── controllers/    # HTTP controllers
│   │   ├── services/       # Business logic
│   │   ├── guards/         # Authentication guards
│   │   ├── interceptors/   # Response interceptors
│   │   ├── pipes/          # Data validation pipes
│   │   ├── filters/        # Exception filters
│   │   ├── decorators/     # Custom decorators
│   │   ├── config/         # Configuration files
│   │   └── constants/      # Application constants
│   ├── shared/             # Shared utilities
│   │   ├── dto/           # Data transfer objects
│   │   ├── utils/         # Utility functions
│   │   └── logger/        # Logging service
│   ├── infrastructure/     # External integrations
│   │   └── database/      # Prisma database service
│   └── app.module.ts       # Root module
├── prisma/                 # Prisma ORM
│   ├── schema.prisma      # Database schema
│   ├── migrations/        # Database migrations
│   └── seed.ts            # Database seeding
├── docker/                # Docker configurations
│   └── postgres/          # PostgreSQL init scripts
├── docker-compose.yml     # Production containers
├── docker-compose.dev.yml # Development containers
├── Dockerfile            # Multi-stage build
└── .env                  # Environment variables
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- pnpm package manager
- Docker & Docker Compose (for containerized setup)
- PostgreSQL & Redis (included in Docker)

### Installation

```bash
# Clone the repository
$ git clone https://github.com/alguemqualquer123/nestjs-atomic-design-boilerplate.git

# Navigate to project directory
$ cd nestjs-atomic-design-boilerplate

# Install dependencies
$ pnpm install
```

### Docker Quick Start

```bash
# Start development environment with PostgreSQL & Redis
$ pnpm run docker:dev

# Build and start production environment
$ pnpm run docker:build && pnpm run docker:up

# View logs
$ pnpm run docker:logs

# Stop containers
$ pnpm run docker:down
```

### Environment Configuration

Create a `.env` file in the root directory:

```bash
# Server Configuration
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Database Configuration (Prisma)
DATABASE_URL="postgresql://postgres:password@localhost:5432/myapp"

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
```

### Docker Environment

For Docker deployment, use the provided `.env` or set environment variables in `docker-compose.yml`:

```bash
# Production Docker environment
NODE_ENV=production
DATABASE_URL="postgresql://postgres:password@postgres:5432/myapp"
REDIS_HOST=redis
REDIS_PORT=6379
```

## 🏃‍♂️ Running the Application

### Development

```bash
# Start in development mode with hot reload
$ pnpm run start:dev

# Start in debug mode
$ pnpm run start:debug

# Build and start in watch mode
$ pnpm run build && pnpm run start:dev
```

### Production

```bash
# Build the application
$ pnpm run build

# Start in production mode
$ pnpm run start:prod
```

## 🧪 Testing

```bash
# Run unit tests
$ pnpm run test

# Run tests in watch mode
$ pnpm run test:watch

# Run tests with coverage
$ pnpm run test:cov

# Run e2e tests
$ pnpm run test:e2e
```

## 📦 Available Scripts

```bash
# Development
$ pnpm run start              # Start in development mode
$ pnpm run start:dev          # Start with hot reload
$ pnpm run start:debug        # Start in debug mode

# Building
$ pnpm run build              # Build the application
$ pnpm run build:schema       # Build database schema

# Production
$ pnpm run start:prod         # Start in production mode

# Testing
$ pnpm run test               # Run unit tests
$ pnpm run test:watch         # Run tests in watch mode
$ pnpm run test:cov           # Run tests with coverage
$ pnpm run test:e2e           # Run e2e tests
$ pnpm run test:debug         # Run tests in debug mode

# Linting & Formatting
$ pnpm run lint               # Run ESLint
$ pnpm run lint:fix           # Fix ESLint issues
$ pnpm run format             # Format code with Prettier

# Docker Commands
$ pnpm run docker:build       # Build Docker image
$ pnpm run docker:up          # Start production containers
$ pnpm run docker:down        # Stop all containers
$ pnpm run docker:dev         # Start development containers
$ pnpm run docker:logs        # View container logs

# Prisma Database
$ pnpm run prisma:generate    # Generate Prisma client
$ pnpm run prisma:push        # Push schema to database
$ pnpm run prisma:migrate     # Run database migrations
$ pnpm run prisma:studio      # Open Prisma Studio
$ pnpm run prisma:seed        # Seed database with sample data
```

## 🌐 API Documentation

### Base URL

```
http://localhost:3000
```

### Health Check

```bash
GET /
```

### Response Format

```json
{
  "message": "⭐ NestJS Atomic Design Boilerplate ⭐",
  "metadata": {
    "version": "1.0.0",
    "author": "SR VINIX",
    "github": "https://github.com/alguemqualquer123",
    "architecture": "Atomic Design",
    "framework": "NestJS",
    "stars": "⭐⭐⭐⭐⭐"
  }
}
```

## 🚀 Deployment

### Docker Deployment

#### Development Environment

```bash
# Start development containers (PostgreSQL + Redis)
$ pnpm run docker:dev

# The application will run on http://localhost:3000
# PostgreSQL: localhost:5432
# Redis: localhost:6379
```

#### Production Environment

```bash
# Build and start production containers
$ pnpm run docker:build
$ pnpm run docker:up

# Access the application
$ curl http://localhost:3000
```

#### Docker Commands

```bash
# Build Docker image
$ pnpm run docker:build

# Start all services
$ pnpm run docker:up

# Stop all services
$ pnpm run docker:down

# View logs
$ pnpm run docker:logs

# Development only (database + redis)
$ pnpm run docker:dev
```

### Environment Setup

#### Production Environment Variables

```bash
# Server
NODE_ENV=production
PORT=3000
FRONTEND_URL=http://localhost:3000

# Database (PostgreSQL recommended)
DB_HOST=your-db-host
DB_PORT=5432
DB_USERNAME=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name

# Redis
REDIS_HOST=your-redis-host
REDIS_PORT=6379
REDIS_PASSWORD=your-redis-password

# Security
JWT_SECRET=your-production-jwt-secret
JWT_EXPIRES_IN=24h
```

#### PM2 Deployment

```bash
# Install PM2 globally
$ npm install -g pm2

# Start with PM2
$ pm2 start ecosystem.config.js

# Monitor application
$ pm2 monit

# View logs
$ pm2 logs
```

### Cloud Deployment

#### Vercel (Serverless)

```bash
# Install Vercel CLI
$ npm install -g vercel

# Deploy
$ vercel --prod
```

#### Heroku

```bash
# Install Heroku CLI
$ npm install -g heroku

# Create app
$ heroku create your-app-name

# Deploy
$ git push heroku main
```

#### AWS (Elastic Beanstalk)

```bash
# Install EB CLI
$ npm install -g awsebcli

# Initialize
$ eb init

# Deploy
$ eb deploy
```

## 🔧 Configuration

### CORS Settings

CORS is pre-configured with common origins. Modify in `src/main.ts`:

```typescript
app.enableCors({
  origin: ['your-frontend-url'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});
```

### Database Configuration

Database is handled by Prisma. Update settings in `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
}

// Connection URL is set via DATABASE_URL environment variable
// PrismaService handles the connection automatically
```

### Prisma Management

```bash
# Generate Prisma Client after schema changes
$ pnpm run prisma:generate

# Push schema changes to database
$ pnpm run prisma:push

# Create and run migrations
$ pnpm run prisma:migrate

# Open database GUI
$ pnpm run prisma:studio

# Seed database with sample data
$ pnpm run prisma:seed
```

## 🛠️ Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow Atomic Design principles
- Implement proper error handling
- Write unit tests for all services
- Use meaningful variable names

### File Naming

- Controllers: `*.controller.ts`
- Services: `*.service.ts`
- DTOs: `*.dto.ts`
- Guards: `*.guard.ts`
- Interceptors: `*.interceptor.ts`

### Git Workflow

```bash
# Create feature branch
$ git checkout -b feature/your-feature-name

# Commit changes
$ git commit -m "feat: add your feature description"

# Push and create PR
$ git push origin feature/your-feature-name
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NestJS Team** - For the amazing framework
- **Atomic Design** - For the architectural inspiration
- **Community** - For all the contributions and support

## 📞 Support

- 📧 **Email:** your-email@example.com
- 💬 **Discord:** [Join our community](https://discord.gg/your-invite)
- 🐛 **Issues:** [Report bugs](https://github.com/alguemqualquer123/nestjs-atomic-design-boilerplate/issues)

---

⭐ **If you like this boilerplate, give it a star!** ⭐

🚀 **Happy Coding!** 🚀

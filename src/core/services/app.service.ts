import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
⭐ NestJS Atomic Design Boilerplate ⭐

🚀 Created with ❤️ by SR VINIX
📧 GitHub: https://github.com/alguemqualquer123

✨ Features:
- Atomic Design Architecture
- Clean Code Structure
- Scalable Patterns
- Best Practices

🔧 Tech Stack:
- NestJS Framework
- TypeScript
- Atomic Design
- Clean Architecture

Ready to build amazing applications! 🎯
    `.trim();
  }
}

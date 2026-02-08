import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Public } from '../decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): { message: string; metadata: any } {
    return {
      message: this.appService.getHello(),
      metadata: {
        version: '1.0.0',
        author: 'SR VINIX 🎉',
        github: 'https://github.com/alguemqualquer123',
        architecture: 'Atomic Design',
        framework: 'NestJS',
        stars: '⭐⭐⭐⭐⭐',
      },
    };
  }
}

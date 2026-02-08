import {
  Controller,
  Post,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from '../../services/auth.service';
import { Public } from '../../decorators/public.decorator';
import { RegisterDto, LoginDto } from '../../../shared/dto/auth.dto';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import type { Response } from 'express';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res() response: Response) {
    const result = await this.authService.register(registerDto, response);
    return response.json(result);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto, @Res() response: Response) {
    const result = await this.authService.login(loginDto, response);
    return response.json(result);
  }

  @Public()
  @Post('refresh_token')
  @HttpCode(HttpStatus.OK)
  async refreshToken(@Req() request: any, @Res() response: Response) {
    const result = await this.authService.refreshTokens(request, response);
    return response.json(result);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Res() response: Response) {
    this.authService.clearCookies(response);
    return response.json({ message: 'Logged out successfully' });
  }
}

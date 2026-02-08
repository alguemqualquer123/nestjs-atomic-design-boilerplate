import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from './user.service';
import { RegisterDto, LoginDto } from '../../shared/dto/auth.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto, response: Response) {
    const { email, password, name } = registerDto;

    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userService.create({
      email,
      password: hashedPassword,
      name,
    });

    const tokens = await this.generateTokens(
      user.id,
      user.email,
      (user as any).role || 'USER',
    );
    this.setCookies(response, tokens);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  async login(loginDto: LoginDto, response: Response) {
    const { email, password } = loginDto;

    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const tokens = await this.generateTokens(
      user.id,
      user.email,
      (user as any).role || 'USER',
    );
    this.setCookies(response, tokens);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  async refreshTokens(request: any, response: Response) {
    try {
      const refreshToken = request.cookies?.refresh_token;
      if (!refreshToken) {
        throw new Error('No refresh token provided');
      }

      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });

      const user = await this.userService.findOne(
        payload.userId || payload.sub,
      );
      if (!user) {
        throw new Error('Invalid refresh token');
      }

      const tokens = await this.generateTokens(
        user.id,
        user.email,
        (user as any).role || 'USER',
      );
      this.setCookies(response, tokens);

      return {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      };
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  async generateTokens(userId: string, email: string, role: string) {
    const access_token = this.jwtService.sign(
      { userId, email, role },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: '15m',
      },
    );

    const refresh_token = this.jwtService.sign(
      { userId, email, role },
      {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      },
    );

    return {
      access_token,
      refresh_token,
    };
  }

  async validateUser(userId: string) {
    return this.userService.findOne(userId);
  }

  private setCookies(
    response: Response,
    tokens: { access_token: string; refresh_token: string },
  ) {
    response.cookie('access_token', tokens.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    response.cookie('refresh_token', tokens.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
  }

  clearCookies(response: Response) {
    response.clearCookie('access_token');
    response.clearCookie('refresh_token');
  }
}

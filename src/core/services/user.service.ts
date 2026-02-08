import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { UserRole } from '../../shared/enums/user-role.enum';
import {
  UpdateUserRoleDto,
  CreateUserWithRoleDto,
} from '../../shared/dto/user-role.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    email: string;
    name?: string;
    password: string;
    role?: UserRole;
  }) {
    return this.prisma.user.create({
      data: data as any,
    });
  }

  async createWithRole(data: CreateUserWithRoleDto) {
    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        role: data.role,
      } as any,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(
    id: string,
    data: { email?: string; name?: string; password?: string; role?: UserRole },
  ) {
    return this.prisma.user.update({
      where: { id },
      data: data as any,
    });
  }

  async updateRole(id: string, updateRoleDto: UpdateUserRoleDto) {
    return this.prisma.user.update({
      where: { id },
      data: { role: updateRoleDto.role } as any,
    });
  }

  async findByRole(role: UserRole) {
    return this.prisma.user.findMany({
      where: { role } as any,
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}

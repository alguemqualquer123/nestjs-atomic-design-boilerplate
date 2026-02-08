import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from '../../services/user.service';
import { UserRole } from '../../../shared/enums/user-role.enum';
import {
  UpdateUserRoleDto,
  CreateUserWithRoleDto,
} from '../../../shared/dto/user-role.dto';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../decorators/roles.decorator';
import { CurrentUser } from '../../decorators/current-user.decorator';

@Controller('api/v1/users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserManagementController {
  constructor(private readonly userService: UserService) {}

  @Get('by-role/:role')
  @Roles(UserRole.ADMIN, UserRole.MODERATOR)
  async findByRole(@Param('role') role: UserRole) {
    return this.userService.findByRole(role);
  }

  @Put(':id/role')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.ADMIN)
  async updateRole(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateUserRoleDto,
  ) {
    return this.userService.updateRole(id, updateRoleDto);
  }

  @Post('create-with-role')
  @Roles(UserRole.ADMIN)
  async createWithRole(@Body() createUserDto: CreateUserWithRoleDto) {
    return this.userService.createWithRole(createUserDto);
  }
}

import { Module } from '@nestjs/common';
import { UsersController } from '../../controllers/v1/users.controller';
import { UserManagementController } from '../../controllers/v1/user-management.controller';
import { UserService } from '../../services/user.service';
import { PrismaModule } from '../../../infrastructure/database/prisma.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UsersController, UserManagementController],
  providers: [UserService],
  exports: [UserService],
})
export class V1Module {}

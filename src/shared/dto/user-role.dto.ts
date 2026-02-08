import { IsEnum, IsString } from 'class-validator';
import { UserRole } from '../enums/user-role.enum';

export class UpdateUserRoleDto {
  @IsEnum(UserRole)
  role: UserRole;
}

export class CreateUserWithRoleDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name?: string;

  @IsEnum(UserRole)
  role: UserRole;
}

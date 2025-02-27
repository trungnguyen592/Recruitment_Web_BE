import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(
  PickType(CreateUserDto, [
    'name',
    'age',
    'email',
    'gender',
    'address',
  ] as const),
) {
  @IsOptional() // Không bắt buộc nhập tên
  name?: string;

  @IsOptional() // Không bắt buộc nhập tuổi
  age?: number;

  @IsOptional() // Không bắt buộc nhập email
  email?: string;

  @IsOptional() // Không bắt buộc nhập giới tính
  gender?: string;

  @IsOptional() // Không bắt buộc nhập địa chỉ
  address?: string;
}

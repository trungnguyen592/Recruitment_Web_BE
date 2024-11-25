import { IsArray, IsBoolean, IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';
export class CreateRoleDto {

    @IsNotEmpty({ message: 'name không được để trống', })
    name: string;

    @IsNotEmpty({ message: 'description không được để trống', })
    description: string;

    @IsNotEmpty({ message: 'isActive không được để trống', })
    @IsBoolean({ message: 'isActive co gia tri boolean' })
    isActive: boolean;

    @IsNotEmpty({ message: 'permissions khong duoc de trong', })
    @IsMongoId({ each: true, message: "each permissions la mongo object id" })
    @IsArray({ message: 'permissions co dinh dang la array' })
    permissions: mongoose.Schema.Types.ObjectId[];

}

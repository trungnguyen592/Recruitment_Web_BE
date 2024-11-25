import { IsArray, IsBoolean, IsEmail, IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import mongoose from 'mongoose';
export class CreateSubscriberDto {
    @IsNotEmpty({ message: 'name không được để trống', })
    name: string;

    @IsEmail({}, { message: 'Email khong dung dinh dang', })
    @IsNotEmpty({ message: 'Email không được để trống', })
    email: string;

    @IsNotEmpty({ message: 'skills không được để trống', })
    @IsArray({ message: 'skills co dinh dang la array', })
    @IsString({ each: true, message: "skill dinh dang la string" })
    skills: string[];
}

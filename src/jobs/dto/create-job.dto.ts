import { Transform, Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, IsNotEmpty, isNotEmptyObject, IsNotEmptyObject, IsObject, IsString, ValidateNested } from 'class-validator';
import mongoose from 'mongoose';

class Company {
    @IsNotEmpty()
    _id: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    logo: string;
}

export class CreateJobDto {

    @IsNotEmpty({ message: 'Name không được để trống', })
    name: string;

    @IsNotEmpty({ message: 'Skills không được để trống', })
    @IsArray({ message: 'Skills co dinh dang la array', })
    @IsString({ each: true, message: "skill dinh dang la string" })
    skills: string[];

    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => Company)
    company: Company;

    @IsNotEmpty({ message: 'location không được để trống', })
    location: number;

    @IsNotEmpty({ message: 'Salary không được để trống', })
    salary: number;

    @IsNotEmpty({ message: 'quantity không được để trống', })
    quantity: number;

    @IsNotEmpty({ message: 'level không được để trống', })
    level: string;

    @IsNotEmpty({ message: 'Decription không được để trống', })
    description: string;

    @IsNotEmpty({ message: 'startDate khong duoc de trong', })
    @Transform(({ value }) => new Date(value))
    @IsDate({ message: 'startDate co dinh dang la Date' })
    startDate: Date;

    @IsNotEmpty({ message: 'endDate khong duoc de trong', })
    @Transform(({ value }) => new Date(value))
    @IsDate({ message: 'endDate co dinh dang la Date' })
    endDate: Date;

    @IsNotEmpty({ message: 'isActive khong duoc de trong', })
    @IsBoolean({ message: 'isActive co dinh dang la boolean' })
    isActive: boolean;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateResumeDto } from './create-resume.dto';
import { IsArray, IsEmail, IsNotEmpty, Validate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';

class UpdatedBy {
    @IsNotEmpty()
    _id: Types.ObjectId;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}

class History {
    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    updatedAt: Date;

    @ValidateNested()
    @IsNotEmpty()
    @Type(() => UpdatedBy)
    updatedBy: UpdatedBy

}

export class UpdateResumeDto extends PartialType(CreateResumeDto) {
    @IsNotEmpty({ message: 'history khong duoc de trong', })
    @IsArray({ message: 'history co dinh dang la array', })
    @ValidateNested()
    @Type(() => History)
    history: History[];

}

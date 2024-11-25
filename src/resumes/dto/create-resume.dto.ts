import { IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';
export class CreateResumeDto {

    @IsNotEmpty({ message: 'email không được để trống', })
    email: string;

    @IsNotEmpty({ message: 'userId không được để trống', })
    userId: string;

    @IsNotEmpty({ message: 'url không được để trống', })
    url: string;

    @IsNotEmpty({ message: 'status khong duoc de trong', })
    status: string;

    @IsNotEmpty({ message: 'status khong duoc de trong', })
    companyId: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty({ message: 'status khong duoc de trong', })
    jobId: mongoose.Schema.Types.ObjectId;

}

export class CreateUserCvDto {
    @IsNotEmpty({ message: 'url không được để trống', })
    url: string;

    @IsNotEmpty({ message: 'companyId khong duoc de trong', })
    @IsMongoId({ message: 'companyId is a mongo id' })
    companyId: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty({ message: 'jobId khong duoc de trong', })
    @IsMongoId({ message: 'jobId is a mongo id' })
    jobId: mongoose.Schema.Types.ObjectId;
}


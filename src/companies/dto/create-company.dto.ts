import { IsNotEmpty } from 'class-validator';
export class CreateCompanyDto {
  @IsNotEmpty({ message: 'name không được để trống' })
  name: string;

  @IsNotEmpty({ message: 'address không được để trống' })
  address: string;

  @IsNotEmpty({ message: 'desciption không được để trống' })
  description: string;

  @IsNotEmpty({ message: 'Logo khong duoc de trong' })
  logo: string;
}

import { IsEmail, IsNumberString, IsNotEmpty } from 'class-validator';

export class CustomerDto {
  id: number;

  @IsNumberString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

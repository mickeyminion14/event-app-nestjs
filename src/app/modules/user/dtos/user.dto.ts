import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../user.interface';

export class CreateUsersDto implements User {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

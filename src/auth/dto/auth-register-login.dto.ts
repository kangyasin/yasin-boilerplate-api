import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { Transform } from 'class-transformer';

export class AuthRegisterLoginDto {
  @ApiProperty({ example: 'yasin@kangyasin.com' })
  @Transform(({ value }) => value.toLowerCase().trim())
  @Validate(IsNotExist, ['User'], {
    message: 'emailAlreadyExists',
  })
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'Jalan' })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'Master Card' })
  @IsNotEmpty()
  creditcard_type: string;

  @ApiProperty({ example: '123' })
  @MinLength(16)
  @IsNotEmpty()
  creditcard_number: string;

  @ApiProperty({ example: 'John Doe' })
  @IsNotEmpty()
  creditcard_name: string;

  @ApiProperty({ example: 'mm-yyyy' })
  @IsNotEmpty()
  creditcard_expired: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength, Validate } from 'class-validator';
import { IsExist } from '../../utils/validators/is-exists.validator';
import { FileEntity } from '../../files/entities/file.entity';

export class AuthUpdateDto {
  @ApiProperty({ type: () => FileEntity })
  @IsOptional()
  @Validate(IsExist, ['FileEntity', 'id'], {
    message: 'imageNotExists',
  })
  photo?: FileEntity;

  @ApiProperty({ example: 'John' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  firstName?: string;

  @ApiProperty({ example: 'Doe' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  lastName?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(6)
  password?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  oldPassword: string;


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

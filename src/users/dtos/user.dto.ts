import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'email address must be verified' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({ description: 'password' })
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'user rol' })
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

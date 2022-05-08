import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'product brand name' })
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: 'brand logo image' })
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

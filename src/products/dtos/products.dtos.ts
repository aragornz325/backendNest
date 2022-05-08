import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'product`s name in db' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Product description' })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'product`s price' })
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'units available for sale' })
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: 'descriptive image of the product' })
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ContactDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: '555222333', required: false })
  phone?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({ example: 'test@mail.com', required: false })
  email?: string;
}

export class UpdateRestaurantDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Bern', required: false })
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => ContactDto)
  @ApiProperty({ type: () => ContactDto, required: false })
  contact?: ContactDto;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 4.5, required: false })
  rating?: number;
}

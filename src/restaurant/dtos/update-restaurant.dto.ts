import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsNumber, IsString, ValidateNested } from 'class-validator';

export class ContactDto {
  @IsString()
  @ApiProperty({example: '555222333'})
  phone: string;

  @IsEmail()
  @ApiProperty({example: 'test@mail.com'})
  email: string;
}

export class UpdateRestaurantDto {
  @IsString()
  @ApiProperty({example: 'Bern'})
  name: string;

  @ValidateNested()
  @Type(() => ContactDto)
  @ApiProperty({type: () => ContactDto})
  contact?: ContactDto;

  @IsNumber()
  @ApiProperty({example: 4.5})
  rating?: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateManufactorerDto {
  @ApiProperty({
    example: 'Кто-то',
    description: 'Название производителя',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Россия',
    description: 'Страна производителя',
    required: true,
  })
  @IsString()
  country: string;
}

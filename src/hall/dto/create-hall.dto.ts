import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHallDto {
  @ApiProperty({
    example: 'Кто-то',
    description: 'Название зала',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Описание',
    description: 'Описание зала',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'Категория',
    description: 'Какая-то категория',
    required: true,
  })
  @IsString()
  category: string;
}

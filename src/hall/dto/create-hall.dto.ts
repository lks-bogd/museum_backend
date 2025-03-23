import { ApiProperty } from '@nestjs/swagger';

export class CreateHallDto {
  @ApiProperty({
    example: 'Кто-то',
    description: 'Название зала',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 'Описание',
    description: 'Описание зала',
    required: false,
  })
  description?: string;

  @ApiProperty({
    example: 'Категория',
    description: 'Какая-то категория',
    required: true,
  })
  category: string;

  @ApiProperty({
    example: 'Картинка',
    description: 'Ссылка на картинку',
    required: false,
  })
  imageUrl?: string;

  @ApiProperty({
    example: 'Модель',
    description: 'Ссылка на модель',
    required: false,
  })
  modelUrl?: string;
}

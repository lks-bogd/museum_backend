import { ApiProperty } from '@nestjs/swagger';

export class HallDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор зала',
  })
  id: string;

  @ApiProperty({
    example: 'Главный зал',
    description: 'Название зала',
  })
  name: string;

  @ApiProperty({
    example: 'Описание',
    description: 'Описание зала',
  })
  description?: string;

  @ApiProperty({
    example: 'Какая-то категория',
    description: 'Так и не понял для чего она нужна',
  })
  category: string;

  @ApiProperty({
    example: 'D:/uploads/image.png',
    description: 'Путь к картинке',
  })
  imageUrl?: string;

  @ApiProperty({
    example: 'D:/uploads/model.3d',
    description: 'Путь к модели',
  })
  modelUrl?: string;

  @ApiProperty({
    example: '2024-03-20T12:00:00.000Z',
    description: 'Дата создания записи',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2024-03-20T12:00:00.000Z',
    description: 'Дата последнего обновления',
  })
  updatedAt: Date;
}

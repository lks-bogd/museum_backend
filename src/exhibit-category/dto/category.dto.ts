import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор категории',
  })
  id: string;

  @ApiProperty({
    example: 'Компьютеры',
    description: 'Название категории',
  })
  name: string;

  @ApiProperty({
    example: 'Описание категории',
    description: 'Описание категории',
  })
  description?: string;

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

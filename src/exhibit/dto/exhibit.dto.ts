import { ApiProperty } from '@nestjs/swagger';

export class ExhibitDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор экспоната',
  })
  id: string;

  @ApiProperty({
    example: 'ЭВМ Минск-32',
    description: 'Название экспоната',
  })
  name: string;

  @ApiProperty({
    example: 1968,
    description: 'Год создания экспоната',
  })
  year: number;

  @ApiProperty({
    example: 'Описание',
    description: 'Описание экспоната',
  })
  description?: string;

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
    example: 'Материал? ',
    description: 'Какой-то материал',
  })
  material: string;

  @ApiProperty({
    example: 'Красный',
    description: 'Что за цвет?',
  })
  color: string;

  @ApiProperty({
    example: '150',
    description: 'Почему решили хранить в числовом формате?',
  })
  size: number;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'ID категории, где находится экспонат',
  })
  categoryId: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'ID эпохи, где находится экспонат',
  })
  eraId: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'ID зала, где находится экспонат',
  })
  hallId: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'ID производителя, где находится экспонат',
  })
  manufactorerId: string;

  @ApiProperty({
    example: 10.5,
    description: 'Координаты позиции экспоната',
  })
  x: number;

  @ApiProperty({
    example: 10.5,
    description: 'Координаты позиции экспоната',
  })
  y: number;

  @ApiProperty({
    example: 10.5,
    description: 'Координаты позиции экспоната',
  })
  z: number;

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

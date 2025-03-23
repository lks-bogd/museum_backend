import { ApiProperty } from '@nestjs/swagger';

export class ComputingEraDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор эпохи',
  })
  id: string;

  @ApiProperty({
    example: 'Индустриальная эпоха',
    description: 'Название эпохи',
  })
  name: string;

  @ApiProperty({
    example: 'Описание эпохи',
    description: 'Описание эпохи',
  })
  description?: string;

  @ApiProperty({
    example: 1999,
    description: 'Начало эпохи',
  })
  startYear: number;

  @ApiProperty({
    example: 2000,
    description: 'Конец эпохи',
  })
  endYear: number;

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

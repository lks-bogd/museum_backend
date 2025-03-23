import { ApiProperty } from '@nestjs/swagger';

export class ManufactorerDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор производителя',
  })
  id: string;

  @ApiProperty({
    example: 'ПРоизводитель',
    description: 'Название производителя',
  })
  name: string;

  @ApiProperty({
    example: 'Россия',
    description: 'Страна производителя',
  })
  country: string;

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

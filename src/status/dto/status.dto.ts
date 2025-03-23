import { ApiProperty } from '@nestjs/swagger';

export class StatusDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор статуса',
  })
  id: string;

  @ApiProperty({
    example: 'Одобрено',
    description: 'Название статуса',
  })
  name: string;

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

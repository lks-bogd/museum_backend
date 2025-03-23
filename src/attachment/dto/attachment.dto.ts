import { ApiProperty } from '@nestjs/swagger';

export class AttachmentDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор attachment',
  })
  id: string;

  @ApiProperty({
    example: 'D:/uploads/file_name.3d',
    description: 'Путь к attachment',
  })
  filePath: string;

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

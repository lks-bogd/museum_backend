import { ApiProperty } from '@nestjs/swagger';

export class FeedbackDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор feedback',
  })
  id: string;

  @ApiProperty({
    example: '2024-03-20T12:00:00.000Z0',
    description: 'Дата feedback',
  })
  date: Date;

  @ApiProperty({
    example: 'Заголовок',
    description: 'Заголовок',
  })
  title: Date;

  @ApiProperty({
    example: 'Содержание',
    description: 'Содержание',
  })
  content: Date;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор пользователя',
  })
  userId: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор статуса',
  })
  statusId: string;

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

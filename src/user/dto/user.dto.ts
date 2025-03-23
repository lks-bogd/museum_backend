import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Уникальный идентификатор пользователя',
  })
  id: string;

  @ApiProperty({
    example: 'user@mail.ru',
    description: 'Email пользователя',
  })
  email: string;

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

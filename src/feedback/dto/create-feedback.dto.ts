import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedbackDto {
  @ApiProperty({
    example: 'Дата',
    description: 'Дата feedback',
    required: true,
  })
  date: Date;

  @ApiProperty({
    example: 'Заголовок',
    description: '',
    required: true,
  })
  title: string;

  @ApiProperty({
    example: 'Содержание',
    description: '',
    required: true,
  })
  content: string;

  @ApiProperty({
    example: 'UUID пользователя',
    description: 'например: 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  userId: string;

  @ApiProperty({
    example: 'UUID статуса',
    description: 'например: 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  statusId: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class CreateFeedbackDto {
  @ApiProperty({
    example: 'Дата',
    description: 'Дата feedback',
    required: true,
  })
  @IsDate()
  date: Date;

  @ApiProperty({
    example: 'Заголовок',
    description: '',
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Содержание',
    description: '',
    required: true,
  })
  @IsString()
  content: string;

  @ApiProperty({
    example: 'UUID пользователя',
    description: 'например: 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'UUID статуса',
    description: 'например: 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  @IsString()
  statusId: string;
}

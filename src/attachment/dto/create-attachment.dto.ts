import { ApiProperty } from '@nestjs/swagger';

export class CreateAttachmentDto {
  @ApiProperty({
    example: 'Путь к файлу',
    description: '',
    required: true,
  })
  filePath: string;

  @ApiProperty({
    example: 'UUID feedback',
    description: 'например, 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  feedbackId: string;
}

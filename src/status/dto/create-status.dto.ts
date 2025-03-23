import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDto {
  @ApiProperty({
    example: 'Одобрено',
    description: 'Название статуса',
    required: true,
  })
  name: string;
}

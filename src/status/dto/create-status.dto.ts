import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({
    example: 'Одобрено',
    description: 'Название статуса',
    required: true,
  })
  @IsString()
  name: string;
}

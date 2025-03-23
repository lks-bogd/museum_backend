import { ApiProperty } from '@nestjs/swagger';

export class CreateComputingEraDto {
  @ApiProperty({
    example: 'Название эпохи',
    description: '',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 'Описание эпохи',
    description: '',
    required: true,
  })
  description: string;

  @ApiProperty({
    example: 'Начало эпохи',
    description: '',
    required: true,
  })
  startYear: number;

  @ApiProperty({
    example: 'Конец эпохи',
    description: '',
    required: true,
  })
  endYear: number;
}

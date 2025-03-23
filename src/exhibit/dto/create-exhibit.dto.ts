import { ApiProperty } from '@nestjs/swagger';

export class CreateExhibitDto {
  @ApiProperty({
    example: 'Название экспоната',
    description: '',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 'Год создания экспоната',
    description: '',
    required: true,
  })
  year: number;

  @ApiProperty({
    example: 'Описание экспоната',
    description: '',
    required: false,
  })
  description?: string;

  @ApiProperty({
    example: 'Ссылка на картинку',
    description: '',
    required: false,
  })
  imageUrl?: string;

  @ApiProperty({
    example: 'Ссылка на модель',
    description: '',
    required: false,
  })
  modelUrl?: string;

  @ApiProperty({
    example: 'Какой-то материал',
    description: '',
    required: true,
  })
  material: string;

  @ApiProperty({
    example: 'Цвет (я так полагаю)',
    description: '',
    required: true,
  })
  color: string;

  @ApiProperty({
    example: 'Размер',
    description: '',
    required: true,
  })
  size: number;

  @ApiProperty({
    example: 'UUID категории',
    description: 'например, 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  categoryId: string;

  @ApiProperty({
    example: 'UUID эпохи',
    description: 'например, 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  eraId: string;

  @ApiProperty({
    example: 'UUID зала',
    description: 'например, 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  hallId: string;

  @ApiProperty({
    example: 'UUID производителя',
    description: 'например, 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  manufactorerId: string;

  @ApiProperty({
    example: 'Координата x',
    description: '',
    required: true,
  })
  x: number;

  @ApiProperty({
    example: 'Координата y',
    description: '',
    required: true,
  })
  y: number;

  @ApiProperty({
    example: 'Координата z',
    description: '',
    required: true,
  })
  z: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateExhibitDto {
  @ApiProperty({
    example: 'Название экспоната',
    description: '',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Год создания экспоната',
    description: '',
    required: true,
  })
  @IsInt()
  year: number;

  @ApiProperty({
    example: 'Описание экспоната',
    description: '',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'Какой-то материал',
    description: '',
    required: true,
  })
  @IsString()
  material: string;

  @ApiProperty({
    example: 'Цвет (я так полагаю)',
    description: '',
    required: true,
  })
  @IsString()
  color: string;
  
  @ApiProperty({
    example: 'Размер',
    description: '',
    required: true,
  })
  @IsNumber()
  size: number;
  
  @ApiProperty({
    example: 'UUID категории',
    description: 'например, 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  @IsString()
  categoryId: string;

  @ApiProperty({
    example: 'UUID эпохи',
    description: 'например, 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  @IsString()
  eraId: string;

  @ApiProperty({
    example: 'UUID зала',
    description: 'например, 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  @IsString()
  hallId: string;

  @ApiProperty({
    example: 'UUID производителя',
    description: 'например, 550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  @IsString()
  manufactorerId: string;

  @ApiProperty({
    example: 'Координата x',
    description: '',
    required: true,
  })
  @IsNumber()
  x: number;

  @ApiProperty({
    example: 'Координата y',
    description: '',
    required: true,
  })
  @IsNumber()
  y: number;

  @ApiProperty({
    example: 'Координата z',
    description: '',
    required: true,
  })
  @IsNumber()
  z: number;
}

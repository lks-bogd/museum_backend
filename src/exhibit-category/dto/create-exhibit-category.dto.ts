import { ApiProperty } from '@nestjs/swagger';

export class CreateExhibitCategoryDto {
  @ApiProperty({
    example: 'Название категории',
    description: '',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 'Описание категории',
    description: '',
    required: false,
  })
  description?: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateManufactorerDto {
  @ApiProperty({
    example: 'Кто-то',
    description: 'Название производителя',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 'Россия',
    description: 'Страна производителя',
    required: true,
  })
  country: string;
}

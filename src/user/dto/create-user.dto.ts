import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'example@example.com',
    description: 'Email пользователя',
    required: true,
  })
  email: string;
}

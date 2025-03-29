import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'example@example.com',
    description: 'Email пользователя',
    required: true,
  })
  @IsEmail()
  email: string;
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create = async (dto: CreateUserDto) => {
    return await this.prisma.user.create({
      data: dto,
    });
  };

  findById = async (id: string) => {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  };

  findByEmail = async (email: string) => {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  };

  delete = async (id: string) => {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  };
}

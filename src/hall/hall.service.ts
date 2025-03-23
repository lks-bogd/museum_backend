import { Injectable } from '@nestjs/common';
import { CreateHallDto } from './dto/create-hall.dto';
import { UpdateHallDto } from './dto/update-hall.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HallService {
  constructor(private readonly prisma: PrismaService) {}
  create = async (dto: CreateHallDto) => {
    return await this.prisma.hall.create({
      data: dto,
    });
  };

  findAll = async (skip: number = 0, take: number = 10) => {
    return await this.prisma.hall.findMany({
      skip,
      take,
      orderBy: {
        name: 'desc',
      },
    });
  };

  findOne = async (id: string) => {
    return await this.prisma.hall.findUnique({
      where: { id },
    });
  };

  update = async (id: string, dto: UpdateHallDto) => {
    return await this.prisma.hall.update({
      where: { id },
      data: dto,
    });
  };

  delete = async (id: string) => {
    return await this.prisma.hall.delete({ where: { id } });
  };
}

import { Injectable } from '@nestjs/common';
import { CreateManufactorerDto } from './dto/create-manufactorer.dto';
import { UpdateManufactorerDto } from './dto/update-manufactorer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ManufactorerService {
  constructor(private readonly prisma: PrismaService) {}
  create = async (dto: CreateManufactorerDto) => {
    return await this.prisma.manufactorer.create({
      data: dto,
    });
  };

  findAll = async (skip: number = 0, take: number = 10) => {
    return await this.prisma.manufactorer.findMany({
      skip,
      take,
      orderBy: {
        name: 'desc',
      },
    });
  };

  findOne = async (id: string) => {
    return await this.prisma.manufactorer.findUnique({
      where: { id },
    });
  };

  update = async (id: string, dto: UpdateManufactorerDto) => {
    return await this.prisma.manufactorer.update({
      where: { id },
      data: dto,
    });
  };

  delete = async (id: string) => {
    return await this.prisma.manufactorer.delete({ where: { id } });
  };
}

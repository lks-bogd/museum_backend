import { Injectable } from '@nestjs/common';
import { CreateComputingEraDto } from './dto/create-computing-era.dto';
import { UpdateComputingEraDto } from './dto/update-computing-era.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComputingEraService {
  constructor(private readonly prisma: PrismaService) {}
  create = async (dto: CreateComputingEraDto) => {
    return await this.prisma.computingEra.create({
      data: dto,
    });
  };

  findAll = async (skip: number = 0, take: number = 10) => {
    return await this.prisma.computingEra.findMany({
      skip,
      take,
      orderBy: {
        name: 'desc',
      },
    });
  };

  findOne = async (id: string) => {
    return await this.prisma.computingEra.findUnique({
      where: { id },
    });
  };

  update = async (id: string, dto: UpdateComputingEraDto) => {
    return await this.prisma.computingEra.update({
      where: { id },
      data: dto,
    });
  };

  delete = async (id: string) => {
    return await this.prisma.computingEra.delete({
      where: { id },
    });
  };
}

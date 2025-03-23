import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatusService {
  constructor(private readonly prisma: PrismaService) {}
  create = async (dto: CreateStatusDto) => {
    return await this.prisma.status.create({
      data: dto,
    });
  };

  findAll = async (skip: number = 0, take: number = 10) => {
    return await this.prisma.status.findMany({
      skip,
      take,
      orderBy: { name: 'desc' },
    });
  };

  findOne = async (id: string) => {
    return await this.prisma.status.findUnique({
      where: { id },
    });
  };

  update = async (id: string, dto: UpdateStatusDto) => {
    return await this.prisma.status.update({
      where: { id },
      data: dto,
    });
  };

  delete = async (id: string) => {
    return await this.prisma.status.delete({
      where: { id },
    });
  };
}

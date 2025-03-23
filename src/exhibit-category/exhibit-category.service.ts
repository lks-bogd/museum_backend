import { Injectable } from '@nestjs/common';
import { CreateExhibitCategoryDto } from './dto/create-exhibit-category.dto';
import { UpdateExhibitCategoryDto } from './dto/update-exhibit-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExhibitCategoryService {
  constructor(private readonly prisma: PrismaService) {}
  create = async (dto: CreateExhibitCategoryDto) => {
    return await this.prisma.exhibitCategory.create({
      data: dto,
    });
  };

  findAll = async (skip: number = 0, take: number = 10) => {
    return await this.prisma.exhibitCategory.findMany({
      skip,
      take,
      orderBy: {
        name: 'desc',
      },
    });
  };

  findOne = async (id: string) => {
    return await this.prisma.exhibitCategory.findUnique({
      where: { id },
    });
  };

  update = async (id: string, dto: UpdateExhibitCategoryDto) => {
    return await this.prisma.exhibitCategory.update({
      where: { id },
      data: dto,
    });
  };

  delete = async (id: string) => {
    return await this.prisma.exhibitCategory.delete({
      where: { id },
    });
  };
}

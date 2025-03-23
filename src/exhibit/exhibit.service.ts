import { Injectable } from '@nestjs/common';
import { CreateExhibitDto } from './dto/create-exhibit.dto';
import { UpdateExhibitDto } from './dto/update-exhibit.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExhibitPositionDto } from './dto/positionDto';

@Injectable()

// TODO: проверь работоспособность user and exhibit
export class ExhibitService {
  constructor(private readonly prisma: PrismaService) {}
  create = async (dto: CreateExhibitDto) => {
    const exhibitDto = {
      name: dto.name,
      year: dto.year,
      description: dto.description,
      imageUrl: dto.imageUrl,
      modelUrl: dto.modelUrl,
      material: dto.material,
      color: dto.color,
      size: dto.size,
      categoryId: dto.categoryId,
      eraId: dto.eraId,
      hallId: dto.hallId,
      manufactorerId: dto.manufactorerId,
    };

    const positionDto = {
      x: dto.x,
      y: dto.y,
      z: dto.z,
    };

    const exhibit = await this.prisma.exhibit.create({
      data: exhibitDto,
    });

    const position = await this.addPosition(positionDto, exhibit.id);

    return await this.findOne(exhibit.id);
  };

  private addPosition = async (
    dto: CreateExhibitPositionDto,
    exhibitId: string,
  ) => {
    return await this.prisma.exhibitPosition.create({
      data: {
        x: dto.x,
        y: dto.y,
        z: dto.z,
        exhibitId: exhibitId,
      },
    });
  };

  findAll = async (skip: number = 0, take: number = 10) => {
    return await this.prisma.exhibit.findMany({
      skip,
      take,
      include: {
        era: true,
        category: true,
        position: true,
        hall: true,
      },
      orderBy: {
        name: 'desc',
      },
    });
  };

  findByEra = async (eraId: string) => {
    return await this.prisma.exhibit.findMany({
      where: {
        eraId: eraId,
      },
      include: {
        era: true,
        category: true,
        position: true,
        hall: true,
      },
    });
  };

  findByCategory = async (categoryId: string) => {
    return await this.prisma.exhibit.findMany({
      where: {
        categoryId: categoryId,
      },
      include: {
        era: true,
        category: true,
        position: true,
        hall: true,
      },
    });
  };

  findByHall = async (hallId: string) => {
    return await this.prisma.exhibit.findMany({
      where: {
        hallId: hallId,
      },
      include: {
        era: true,
        category: true,
        position: true,
        hall: true,
      },
    });
  };

  findByManufactorer = async (manufactorerId: string) => {
    return await this.prisma.exhibit.findMany({
      where: {
        manufactorerId: manufactorerId,
      },
      include: {
        era: true,
        category: true,
        position: true,
        hall: true,
      },
    });
  };

  findOne = async (id: string) => {
    return await this.prisma.exhibit.findUnique({
      where: { id },
      include: {
        era: true,
        category: true,
        position: true,
        hall: true,
      },
    });
  };

  update = async (id: string, dto: UpdateExhibitDto) => {
    return await this.prisma.exhibit.update({
      where: { id },
      data: dto,
    });
  };

  delete = async (id: string) => {
    return await this.prisma.exhibit.delete({ where: { id } });
  };
}

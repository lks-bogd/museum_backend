import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}
  create = async (dto: CreateFeedbackDto) => {
    return await this.prisma.feedback.create({
      data: dto,
    });
  };

  findAll = async (skip: number = 0, take: number = 10) => {
    return await this.prisma.feedback.findMany({
      skip,
      take,
      orderBy: {
        date: 'desc',
      },
    });
  };

  findOne = async (id: string) => {
    return await this.prisma.feedback.findUnique({
      where: { id },
    });
  };

  update = async (id: string, dto: UpdateFeedbackDto) => {
    return await this.prisma.feedback.update({
      where: { id },
      data: dto,
    });
  };

  delete = async (id: string) => {
    return await this.prisma.feedback.delete({
      where: { id },
    });
  };
}

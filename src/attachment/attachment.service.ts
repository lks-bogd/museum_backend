import { Injectable } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttachmentService {
  constructor(private readonly prisma: PrismaService) {}
  create = async (dto: CreateAttachmentDto) => {
    return await this.prisma.attachment.create({
      data: dto,
    });
  };

  findAll = async (skip: number = 0, take: number = 10) => {
    return await this.prisma.attachment.findMany({
      skip,
      take,
      orderBy: { feedbackId: 'desc' },
    });
  };

  findOne = async (id: string) => {
    return await this.prisma.attachment.findUnique({
      where: { id },
    });
  };

  update = async (id: string, dto: UpdateAttachmentDto) => {
    return await this.prisma.attachment.update({
      where: { id },
      data: dto,
    });
  };

  delete = async (id: string) => {
    return await this.prisma.attachment.delete({
      where: { id },
    });
  };
}

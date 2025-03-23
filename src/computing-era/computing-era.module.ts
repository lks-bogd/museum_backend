import { Module } from '@nestjs/common';
import { ComputingEraService } from './computing-era.service';
import { ComputingEraController } from './computing-era.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ComputingEraController],
  providers: [ComputingEraService, PrismaService],
})
export class ComputingEraModule {}

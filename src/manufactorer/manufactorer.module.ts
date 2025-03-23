import { Module } from '@nestjs/common';
import { ManufactorerService } from './manufactorer.service';
import { ManufactorerController } from './manufactorer.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ManufactorerController],
  providers: [ManufactorerService, PrismaService],
})
export class ManufactorerModule {}

import { Module } from '@nestjs/common';
import { ExhibitService } from './exhibit.service';
import { ExhibitController } from './exhibit.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ExhibitController],
  providers: [ExhibitService, PrismaService],
})
export class ExhibitModule {}

import { Module } from '@nestjs/common';
import { ExhibitCategoryService } from './exhibit-category.service';
import { ExhibitCategoryController } from './exhibit-category.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ExhibitCategoryController],
  providers: [ExhibitCategoryService, PrismaService],
})
export class ExhibitCategoryModule {}

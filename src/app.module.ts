import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { ExhibitModule } from './exhibit/exhibit.module';
import { HallModule } from './hall/hall.module';
import { ExhibitCategoryModule } from './exhibit-category/exhibit-category.module';
import { ComputingEraModule } from './computing-era/computing-era.module';
import { ManufactorerModule } from './manufactorer/manufactorer.module';
import { FeedbackModule } from './feedback/feedback.module';
import { StatusModule } from './status/status.module';
import { AttachmentModule } from './attachment/attachment.module';

@Module({
  imports: [UserModule, ExhibitModule, HallModule, ExhibitCategoryModule, ComputingEraModule, ManufactorerModule, FeedbackModule, StatusModule, AttachmentModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

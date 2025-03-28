import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix('api');

  app.useStaticAssets(join(__dirname, '..', 'uploads'), { prefix: '/uploads' });
  
  const config = new DocumentBuilder()
    .setTitle('Museum API')
    .setDescription('API for museum')
    .setVersion('0.0.1')
    .build();

  const documnet = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documnet);

  await app.listen(3000);
}
bootstrap();

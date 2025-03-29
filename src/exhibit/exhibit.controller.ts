import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ExhibitService } from './exhibit.service';
import { CreateExhibitDto } from './dto/create-exhibit.dto';
import { UpdateExhibitDto } from './dto/update-exhibit.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
  ApiConsumes,
} from '@nestjs/swagger';
import { ExhibitDto } from './dto/exhibit.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('Экспонаты')
@Controller('exhibit')
export class ExhibitController {
  constructor(private readonly exhibitService: ExhibitService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новый экспонат' })
  @ApiBody({ type: CreateExhibitDto })
  @ApiResponse({ status: 201, description: 'Экспонат успешно создан' })
  async create(@Body() createExhibitDto: CreateExhibitDto) {
    return await this.exhibitService.create(createExhibitDto);
  }

  @Post('/upload-model')
  @ApiOperation({ summary: 'Загрузить модель экспоната' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary', // Формат файла
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Модель успешно загружена' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/exhibits/models',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(
            null,
            file.fieldname + '-' + uniqueSuffix + extname(file.originalname),
          );
        },
      }),
    }),
  )
  async uploadModel(
    @UploadedFile() file: Express.Multer.File,
    @Query('exhibitId') exhibitId: string,
  ) {
    return await this.exhibitService.attachModelToExhibit(exhibitId, file.path);
  }

  @Post('/upload-image')
  @ApiOperation({ summary: 'Загрузить картинку экспоната' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary', // Формат файла
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Картинка успешно загружена' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/exhibits/images',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(
            null,
            file.fieldname + '-' + uniqueSuffix + extname(file.originalname),
          );
        },
      }),
    }),
  )
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Query('exhibitId') exhibitId: string,
  ) {
    return await this.exhibitService.attachImageToExhibit(exhibitId, file.path);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все экспонаты' })
  @ApiQuery({ name: 'skip', required: false, example: 0 })
  @ApiQuery({ name: 'take', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Список экспонатов',
    type: [ExhibitDto],
  })
  async findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return await this.exhibitService.findAll(skip, take);
  }

  @Get('/by-era')
  @ApiOperation({ summary: 'Получить все экспонаты по эпохе' })
  @ApiQuery({
    name: 'eraId',
    required: true,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Список экспонатов',
    type: [ExhibitDto],
  })
  async findByEra(@Query('eraId') eraId: string) {
    return await this.exhibitService.findByEra(eraId);
  }

  @Get('/by-category')
  @ApiOperation({ summary: 'Получить все экспонаты по категории' })
  @ApiQuery({
    name: 'categoryId',
    required: true,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Список экспонатов',
    type: [ExhibitDto],
  })
  async findByCategory(@Query('categoryId') categoryId: string) {
    return await this.exhibitService.findByCategory(categoryId);
  }

  @Get('/by-hall')
  @ApiOperation({ summary: 'Получить все экспонаты по залу' })
  @ApiQuery({
    name: 'hallId',
    required: true,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Список экспонатов',
    type: [ExhibitDto],
  })
  async findByHall(@Query('hallId') hallId: string) {
    return await this.exhibitService.findByHall(hallId);
  }

  @Get('/by-manufactorer')
  @ApiOperation({ summary: 'Получить все экспонаты по производителю' })
  @ApiQuery({
    name: 'manufactorerId',
    required: true,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Список экспонатов',
    type: [ExhibitDto],
  })
  async findByManufactorer(@Query('manufactorerId') manufactorerId: string) {
    return await this.exhibitService.findByManufactorer(manufactorerId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить экспонат по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID экспоната',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: ExhibitDto })
  @ApiResponse({ status: 404, description: 'Экспонат не найден' })
  async findOne(@Param('id') id: string) {
    return await this.exhibitService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить экспонат по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID экспоната',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: ExhibitDto })
  @ApiResponse({ status: 404, description: 'Экспонат не найден' })
  update(@Param('id') id: string, @Body() dto: UpdateExhibitDto) {
    return this.exhibitService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить экспонат по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID экспоната',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: ExhibitDto })
  @ApiResponse({ status: 404, description: 'Экспонат не найден' })
  remove(@Param('id') id: string) {
    return this.exhibitService.delete(id);
  }
}

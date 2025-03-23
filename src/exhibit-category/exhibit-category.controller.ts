import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ExhibitCategoryService } from './exhibit-category.service';
import { CreateExhibitCategoryDto } from './dto/create-exhibit-category.dto';
import { UpdateExhibitCategoryDto } from './dto/update-exhibit-category.dto';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { CategoryDto } from './dto/category.dto';

@ApiTags('Категории экспонатов')
@Controller('exhibit-category')
export class ExhibitCategoryController {
  constructor(
    private readonly exhibitCategoryService: ExhibitCategoryService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Создать новый категорию' })
  @ApiBody({ type: CreateExhibitCategoryDto })
  @ApiResponse({ status: 201, description: 'Категория успешно создан' })
  async create(@Body() createExhibitCategoryDto: CreateExhibitCategoryDto) {
    return await this.exhibitCategoryService.create(createExhibitCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все категории' })
  @ApiQuery({ name: 'skip', required: false, example: 0 })
  @ApiQuery({ name: 'take', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Список категорий',
    type: [CategoryDto],
  })
  async findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return await this.exhibitCategoryService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить категорию по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID экспоната',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: CategoryDto })
  @ApiResponse({ status: 404, description: 'Категория не найден' })
  async findOne(@Param('id') id: string) {
    return await this.exhibitCategoryService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить категорию по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID экспоната',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: CategoryDto })
  @ApiResponse({ status: 404, description: 'Категория не найден' })
  async update(
    @Param('id') id: string,
    @Body() updateExhibitCategoryDto: UpdateExhibitCategoryDto,
  ) {
    return await this.exhibitCategoryService.update(
      id,
      updateExhibitCategoryDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить категорию по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID экспоната',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: CategoryDto })
  @ApiResponse({ status: 404, description: 'Категория не найден' })
  async delete(@Param('id') id: string) {
    return await this.exhibitCategoryService.delete(id);
  }
}

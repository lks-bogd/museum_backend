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
import { HallService } from './hall.service';
import { CreateHallDto } from './dto/create-hall.dto';
import { UpdateHallDto } from './dto/update-hall.dto';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { HallDto } from './dto/hall.dto';

@ApiTags('Залы')
@Controller('hall')
export class HallController {
  constructor(private readonly hallService: HallService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новый зал' })
  @ApiBody({ type: CreateHallDto })
  @ApiResponse({ status: 201, description: 'Зал успешно создан' })
  async create(@Body() createHallDto: CreateHallDto) {
    return await this.hallService.create(createHallDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все залы' })
  @ApiQuery({ name: 'skip', required: false, example: 0 })
  @ApiQuery({ name: 'take', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Список залов',
    type: [HallDto],
  })
  async findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return await this.hallService.findAll(skip, take);
  }

  @Get(':id')
  @Get(':id')
  @ApiOperation({ summary: 'Получить зал по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID зала',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: HallDto })
  @ApiResponse({ status: 404, description: 'Зал не найден' })
  async findOne(@Param('id') id: string) {
    return await this.hallService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить зал по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID зала',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: HallDto })
  @ApiResponse({ status: 404, description: 'Зал не найден' })
  async update(@Param('id') id: string, @Body() updateHallDto: UpdateHallDto) {
    return await this.hallService.update(id, updateHallDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить зал по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID зала',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: HallDto })
  @ApiResponse({ status: 404, description: 'Зал не найден' })
  async delete(@Param('id') id: string) {
    return await this.hallService.delete(id);
  }
}

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
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { StatusDto } from './dto/status.dto';

@ApiTags('Статусы')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новый статус' })
  @ApiBody({ type: CreateStatusDto })
  @ApiResponse({ status: 201, description: 'Статус успешно создан' })
  async create(@Body() createStatusDto: CreateStatusDto) {
    return await this.statusService.create(createStatusDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все статусы' })
  @ApiQuery({ name: 'skip', required: false, example: 0 })
  @ApiQuery({ name: 'take', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Список статусов',
    type: [StatusDto],
  })
  async findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return await this.statusService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить статус по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID статуса',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: StatusDto })
  @ApiResponse({ status: 404, description: 'Статус не найден' })
  async findOne(@Param('id') id: string) {
    return await this.statusService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить статус по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID статуса',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: StatusDto })
  @ApiResponse({ status: 404, description: 'Статус не найден' })
  async update(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    return await this.statusService.update(id, updateStatusDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить статус по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID статуса',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: StatusDto })
  @ApiResponse({ status: 404, description: 'Статус не найден' })
  async delete(@Param('id') id: string) {
    return await this.statusService.delete(id);
  }
}

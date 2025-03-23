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
import { ComputingEraService } from './computing-era.service';
import { CreateComputingEraDto } from './dto/create-computing-era.dto';
import { UpdateComputingEraDto } from './dto/update-computing-era.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { ComputingEraDto } from './dto/computing-era.dto';

@ApiTags('Эпохи')
@Controller('computing-era')
export class ComputingEraController {
  constructor(private readonly computingEraService: ComputingEraService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новую эпоху' })
  @ApiBody({ type: CreateComputingEraDto })
  @ApiResponse({ status: 201, description: 'Эпоха успешно создана' })
  async create(@Body() createComputingEraDto: CreateComputingEraDto) {
    return await this.computingEraService.create(createComputingEraDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все эпохи' })
  @ApiQuery({ name: 'skip', required: false, example: 0 })
  @ApiQuery({ name: 'take', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Список экспонатов',
    type: [ComputingEraDto],
  })
  async findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return await this.computingEraService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить эпоху по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID эпохи',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: ComputingEraDto })
  @ApiResponse({ status: 404, description: 'Эпоха не найдена' })
  async findOne(@Param('id') id: string) {
    return await this.computingEraService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить эпоху по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID эпохи',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: ComputingEraDto })
  @ApiResponse({ status: 404, description: 'Эпоха не найден' })
  async update(
    @Param('id') id: string,
    @Body() updateComputingEraDto: UpdateComputingEraDto,
  ) {
    return await this.computingEraService.update(id, updateComputingEraDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить эпоху по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID эпохи',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: ComputingEraDto })
  @ApiResponse({ status: 404, description: 'Эпоха не найден' })
  async delete(@Param('id') id: string) {
    return await this.computingEraService.delete(id);
  }
}

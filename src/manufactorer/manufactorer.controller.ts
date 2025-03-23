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
import { ManufactorerService } from './manufactorer.service';
import { CreateManufactorerDto } from './dto/create-manufactorer.dto';
import { UpdateManufactorerDto } from './dto/update-manufactorer.dto';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { ManufactorerDto } from './dto/manufactorer.dto';

@ApiTags('Производители')
@Controller('manufactorer')
export class ManufactorerController {
  constructor(private readonly manufactorerService: ManufactorerService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новый производитель' })
  @ApiBody({ type: CreateManufactorerDto })
  @ApiResponse({ status: 201, description: 'Производитель успешно создан' })
  async create(@Body() createManufactorerDto: CreateManufactorerDto) {
    return await this.manufactorerService.create(createManufactorerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все производители' })
  @ApiQuery({ name: 'skip', required: false, example: 0 })
  @ApiQuery({ name: 'take', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Список производителей',
    type: [ManufactorerDto],
  })
  async findAll(@Query() skip: number, @Query() take: number) {
    return await this.manufactorerService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить производителя по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID производителя',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: ManufactorerDto })
  @ApiResponse({ status: 404, description: 'Производитель не найден' })
  async findOne(@Param('id') id: string) {
    return await this.manufactorerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить производителя по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID производителя',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: ManufactorerDto })
  @ApiResponse({ status: 404, description: 'Производитель не найден' })
  async update(
    @Param('id') id: string,
    @Body() updateManufactorerDto: UpdateManufactorerDto,
  ) {
    return await this.manufactorerService.update(id, updateManufactorerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить производителя по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID производителя',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: ManufactorerDto })
  @ApiResponse({ status: 404, description: 'Производитель не найден' })
  async remove(@Param('id') id: string) {
    return await this.manufactorerService.delete(id);
  }
}

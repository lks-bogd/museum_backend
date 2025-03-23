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
import { AttachmentService } from './attachment.service';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { AttachmentDto } from './dto/attachment.dto';

@Controller('attachment')
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новый attachement' })
  @ApiBody({ type: CreateAttachmentDto })
  @ApiResponse({ status: 201, description: 'Attachment успешно создан' })
  async create(@Body() createAttachmentDto: CreateAttachmentDto) {
    return await this.attachmentService.create(createAttachmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все attachment с пагинацией' })
  @ApiQuery({ name: 'skip', required: false, example: 0 })
  @ApiQuery({ name: 'take', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Список attachment',
    type: [AttachmentDto],
  })
  async findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return await this.attachmentService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить attachment по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID attachment',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: AttachmentDto })
  @ApiResponse({ status: 404, description: 'Attachment не найден' })
  async findOne(@Param('id') id: string) {
    return await this.attachmentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить attachment по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID attachment',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: AttachmentDto })
  @ApiResponse({ status: 404, description: 'Attachment не найден' })
  async update(
    @Param('id') id: string,
    @Body() updateAttachmentDto: UpdateAttachmentDto,
  ) {
    return await this.attachmentService.update(id, updateAttachmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить attachment по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID attachment',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: AttachmentDto })
  @ApiResponse({ status: 404, description: 'Attachment не найден' })
  async delete(@Param('id') id: string) {
    return await this.attachmentService.delete(id);
  }
}

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
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { FeedbackDto } from './dto/feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новый feedback' })
  @ApiBody({ type: CreateFeedbackDto })
  @ApiResponse({ status: 201, description: 'Feedback успешно создан' })
  async create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return await this.feedbackService.create(createFeedbackDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все feedback' })
  @ApiQuery({ name: 'skip', required: false, example: 0 })
  @ApiQuery({ name: 'take', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Список feedback',
    type: [FeedbackDto],
  })
  async findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return await this.feedbackService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить feedback по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID экспоната',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: FeedbackDto })
  @ApiResponse({ status: 404, description: 'Feedback не найден' })
  async findOne(@Param('id') id: string) {
    return await this.feedbackService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить feedback по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID экспоната',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: FeedbackDto })
  @ApiResponse({ status: 404, description: 'Feedback не найден' })
  async update(
    @Param('id') id: string,
    @Body() updateFeedbackDto: UpdateFeedbackDto,
  ) {
    return await this.feedbackService.update(id, updateFeedbackDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить feedback по ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID экспоната',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({ status: 200, type: FeedbackDto })
  @ApiResponse({ status: 404, description: 'Feedback не найден' })
  async remove(@Param('id') id: string) {
    return await this.feedbackService.delete(id);
  }
}

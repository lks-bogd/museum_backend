import { PartialType } from '@nestjs/mapped-types';
import { CreateExhibitCategoryDto } from './create-exhibit-category.dto';

export class UpdateExhibitCategoryDto extends PartialType(CreateExhibitCategoryDto) {}

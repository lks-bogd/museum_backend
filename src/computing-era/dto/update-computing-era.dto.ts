import { PartialType } from '@nestjs/mapped-types';
import { CreateComputingEraDto } from './create-computing-era.dto';

export class UpdateComputingEraDto extends PartialType(CreateComputingEraDto) {}

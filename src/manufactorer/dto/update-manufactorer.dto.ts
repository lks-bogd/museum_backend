import { PartialType } from '@nestjs/mapped-types';
import { CreateManufactorerDto } from './create-manufactorer.dto';

export class UpdateManufactorerDto extends PartialType(CreateManufactorerDto) {}

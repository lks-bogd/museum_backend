import { IsInt, IsNumber, IsString } from "class-validator";

export class UpdateExhibitDto {
  @IsString()
  name: string;
  @IsInt()
  year: number;
  @IsString()
  description?: string;
  @IsString()
  material: string;
  @IsString()
  color: string;
  @IsNumber()
  size: number;
  @IsString()
  categoryId: string;
  eraId: string;
  @IsString()
  hallId: string;
  @IsString()
  manufactorerId: string;
}

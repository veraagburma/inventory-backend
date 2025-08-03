import { IsDateString, IsObject, IsOptional } from 'class-validator';

export class CreateItemDto {
  itemcode : string;
  itemcategory ?: string;
  itemname ?: string;
  itemremarks ?: string;
  
  // @IsOptional()
  // @IsObject()
  // datelisted?: {
  //   country?: string;
  //   tags?: string[];
  // };
  
  createdby?: string;
  @IsOptional()
  @IsDateString()
  createddate?: Date; // or use String if you're unsure

  updatedby?: string;
  @IsOptional()
  @IsDateString()
  updateddate?: Date;
} 
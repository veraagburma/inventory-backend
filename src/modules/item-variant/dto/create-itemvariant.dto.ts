import { IsDateString, IsOptional } from 'class-validator';

export class CreateItemVariantDto {
  itemcode : string;
  itemcategory ?: string;
  itemname ?: string;
  itemremarks ?: string;
  
  createdby?: string;
  @IsOptional()
  @IsDateString()
  createddate?: Date; // or use String if you're unsure

  updatedby?: string;
  @IsOptional()
  @IsDateString()
  updateddate?: Date;
} 
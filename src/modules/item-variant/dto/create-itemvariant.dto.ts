import { IsDateString, IsOptional } from 'class-validator';

export class CreateItemVariantDto {
  sku : string;
  itemcode ?: string;
  size ?: number;
  color ?: string;
  barcode ?: string;

  unitprice: number;
  itemremarks: string;

  createdby?: string;
  @IsOptional()
  @IsDateString()
  createddate?: Date; // or use String if you're unsure

  updatedby?: string;
  @IsOptional()
  @IsDateString()
  updateddate?: Date;
} 

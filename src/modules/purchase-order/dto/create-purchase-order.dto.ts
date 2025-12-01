import { IsArray, ValidateNested, IsDateString, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePurchaseOrderItemDto } from './create-purchase-order-item.dto';

export class CreatePurchaseOrderDto {
  ponumber: string;
  supplier: string;
  suppliercname: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePurchaseOrderItemDto)
  items: CreatePurchaseOrderItemDto[];

  createdby?: string;
  @IsOptional()
  @IsDateString()
  createddate?: Date; // or use String if you're unsure

  updatedby?: string;
  @IsOptional()
  @IsDateString()
  updateddate?: Date;
} 



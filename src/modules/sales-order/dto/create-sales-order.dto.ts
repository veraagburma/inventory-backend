import { IsArray, ValidateNested, IsDateString, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateSalesOrderItemDto } from './create-sales-order-item.dto';

export class CreateSalesOrderDto {
  @IsOptional()
  platformId?: number;
  orderdate?: Date;
  orderstatus: string;
  shippingfee: number;
  sellerrebate: number;
  platformrebate: number;
  bundlediscount: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSalesOrderItemDto)
  items: CreateSalesOrderItemDto[];

  createdby?: string;
  @IsOptional()
  @IsDateString()
  createddate?: Date; // or use String if you're unsure

  updatedby?: string;
  @IsOptional()
  @IsDateString()
  updateddate?: Date;
} 



import { IsDateString, IsOptional } from 'class-validator';

export class CreateSupplierDto {
  suppliername: string;
  suppliercname?: string;
  supplieraddress?: string;
  supplierremarks?: string;
  
  createdby?: string;
  @IsOptional()
  @IsDateString()
  createddate?: Date; // or use String if you're unsure

  updatedby?: string;
  @IsOptional()
  @IsDateString()
  updateddate?: Date;
} 
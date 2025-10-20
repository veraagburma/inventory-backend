import { IsInt, IsNotEmpty, IsNumber, IsDateString, IsOptional} from 'class-validator';

export class CreatePurchaseOrderItemDto {

  sku: string;

  @IsInt()
  quantity: number;

  @IsNumber()
  unitPrice: number; // seller's price for this sale

  @IsNumber()
  discount: number; // seller's price for this sale

  createdby?: string;
  @IsOptional()
  @IsDateString()
  createddate?: Date; // or use String if you're unsure

  updatedby?: string;
  @IsOptional()
  @IsDateString()
  updateddate?: Date;
}


// import { IsDateString, IsOptional } from 'class-validator';

// export class CreatePurchaseOrderItemDto {
//   salesorderid: number;
//   sku: string;
//   quantity: number;
//   unitprice: number;
//   discount: number;
//   remarks: string;
  

// } 
import { CreateSupplierDto } from './create-supplier.dto';
declare const UpdateSupplierDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateSupplierDto, "createddate">>>;
export declare class UpdateSupplierDto extends UpdateSupplierDto_base {
}
export {};

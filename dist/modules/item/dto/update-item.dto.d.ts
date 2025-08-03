import { CreateItemDto } from './create-item.dto';
declare const UpdateItemDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateItemDto, "createddate">>>;
export declare class UpdateItemDto extends UpdateItemDto_base {
}
export {};

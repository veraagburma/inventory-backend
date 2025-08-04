import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateItemVariantDto } from './create-itemvariant.dto';


export class UpdateItemVariantDto extends PartialType(
  OmitType(CreateItemVariantDto, [ 'createddate'] as const)
) {}

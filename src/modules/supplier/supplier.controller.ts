import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { Supplier } from './entities/supplier.entity';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Controller('supplier')
export class SupplierController {

  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  create(@Body() createSupplierDto: CreateSupplierDto) {
    createSupplierDto.createddate = new Date();
    createSupplierDto.updateddate = new Date();
    return this.supplierService.create(createSupplierDto);
  }
  
  @Get()
  findAll(): Promise<Supplier[]> {
    return this.supplierService.findAll();
  }

  /*@Get()
  sort(@Query('sort') sort: string, @Query('order') order: 'asc' | 'desc') {
    return this.supplierService.sortDetails(sort, order);
  }*/

  // @Get()
  // findOne(id: number): Promise<Supplier>  {
  //   return this.supplierService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: number, @Body() updateDto: UpdateSupplierDto) {
  //   updateDto.updateddate = new Date();
  //   return this.supplierService.update(+id, updateDto);
  // }
}
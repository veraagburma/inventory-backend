import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { ItemVariant } from './entities/itemvariant.entity';
import { ItemVariantService } from './itemvariant.service';
import { CreateItemVariantDto } from './dto/create-itemvariant.dto';
import { UpdateItemVariantDto } from './dto/update-itemvariant.dto';

@Controller('ItemVariant')
export class ItemVariantController {

  constructor(private readonly itemVariantService: ItemVariantService) {}

  @Post()
  create(@Body() createItemVariantDto: CreateItemVariantDto) {
    console.log('==========> CreateDto received:', createItemVariantDto);
    createItemVariantDto.createddate = new Date();
    createItemVariantDto.updateddate = new Date();
    console.log('==========> CreateDto afterSet Date:', createItemVariantDto);
    return this.itemVariantService.create(createItemVariantDto);
  }
  
  @Get()
  findAll(): Promise<ItemVariant[]> {
    console.log('==========> CreateDto received:');
    return this.itemVariantService.findAll();
  }

  /*@Get()
  sort(@Query('sort') sort: string, @Query('order') order: 'asc' | 'desc') {
    return this.itemVariantService.sortDetails(sort, order);
  }*/

  @Get()
  findOne(id: string): Promise<ItemVariant>  {
    return this.itemVariantService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateItemVariantDto) {
    console.log("==========> UpdateItemVariantDto in: " + updateDto.itemcode + " " + updateDto.itemremarks);
    updateDto.updateddate = new Date();
    return this.itemVariantService.update(id, updateDto);
  }
}
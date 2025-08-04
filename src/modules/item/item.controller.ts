import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('item')
export class ItemController {

  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    console.log('==========> CreateDto received:', createItemDto);
    createItemDto.createddate = new Date();
    createItemDto.updateddate = new Date();
    console.log('==========> CreateDto afterSet Date:', createItemDto);
    return this.itemService.create(createItemDto);
  }
  
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  /*@Get()
  sort(@Query('sort') sort: string, @Query('order') order: 'asc' | 'desc') {
    return this.itemService.sortDetails(sort, order);
  }*/

  @Get()
  findOne(id: string): Promise<Item>  {
    return this.itemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateItemDto) {
    console.log("==========> UpdateItemDto in: " + updateDto.itemcode + " " + updateDto.itemcategory);
    updateDto.updateddate = new Date();
    return this.itemService.update(id, updateDto);
  }
}
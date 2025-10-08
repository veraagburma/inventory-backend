import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { SalesOrderService } from './sales-order.service';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';
import { UpdateSalesOrderDto } from './dto/update-sales-order.dto';

@Controller('salesorder')
export class SalesOrderController {
  constructor(private readonly soService: SalesOrderService) {}

  @Get()
  findAll() {
    console.log('==========> SalesOrderController findAll');
    return this.soService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('==========> SalesOrderController findOne:');
    return this.soService.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateSalesOrderDto) {
    return this.soService.create(createDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSalesOrderDto) {
    return this.soService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soService.remove(id);
  }
}
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

  @Get('joined')
  findAllWithItems() {
    console.log('==========> SalesOrderController findAllWithItems:');
    // join SalesOrder + SalesOrderItem + ItemVariant/Inventory
    return this.soService.findAllWithJoin();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('==========> SalesOrderController findOne by ID:');
    return this.soService.findOne(id);
  } 

  @Post()
  create(@Body() createDto: CreateSalesOrderDto) {
    return this.soService.create(createDto);
  }
  
  @Post('batch')
  async createBatch(@Body() body: { orders: CreateSalesOrderDto[] }) {
    // console.log('createBatch => Received orders:', body.orders);
    // console.log('Type of orders:', typeof body.orders);
    return this.soService.createBatch(body.orders);
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
import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { PurchaseOrderService } from './purchase-order.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
// import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Controller('salesorder')
export class PurchaseOrderController {
  constructor(private readonly soService: PurchaseOrderService) {}

  @Get()
  findAll() {
    console.log('==========> PurchaseOrderController findAll');
    return this.soService.findAll();
  }

  @Get('joined')
  findAllWithItems() {
    console.log('==========> PurchaseOrderController findAllWithItems:');
    // join PurchaseOrder + PurchaseOrderItem + ItemVariant/Inventory
    return this.soService.findAllWithJoin();
  }

  @Post('batch')
  async createBatch(@Body() body: { orders: CreatePurchaseOrderDto[] }) {
    // console.log('createBatch => Received orders:', body.orders);
    // console.log('Type of orders:', typeof body.orders);
    return this.soService.createBatch(body.orders);
  }
 
}
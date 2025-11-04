import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { PurchaseOrderService } from './purchase-order.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
// import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Controller('purchaseorder')
export class PurchaseOrderController {
  constructor(private readonly purchaseOrderService: PurchaseOrderService) {}

  @Get()
  findAll() {
    console.log('==========> PurchaseOrderController findAll');
    return this.purchaseOrderService.findAll();
  }

  @Get('joined')
  findAllWithItems() {
    console.log('==========> PurchaseOrderController findAllWithItems:');
    // join PurchaseOrder + PurchaseOrderItem + ItemVariant/Inventory
    return this.purchaseOrderService.findAllWithJoin();
  }

  @Post('batch')
  async createBatch(@Body() body: { orders: CreatePurchaseOrderDto[] }) {
    // console.log('createBatch PO => Received orders:', body.orders);
    return this.purchaseOrderService.createBatch(body.orders);
  }

  @Post('batchitem')
  async createBatchItem(@Body() body: { orders: CreatePurchaseOrderDto[] }) {
    // console.log('createBatch POItems => Received orders:', body.orders) ;
    return this.purchaseOrderService.createBatchItem(body.orders);
  }
 
}
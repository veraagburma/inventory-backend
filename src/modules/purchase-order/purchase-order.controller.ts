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

  @Post('pobatch')
  async createBatch(@Body() body: { orders: CreatePurchaseOrderDto[] }) {
    // console.log('createBatch PO => Received orders:', body.orders);
    return this.purchaseOrderService.createBatch(body.orders);
  }

  // batch creation of PO Items, currently not in use
  // [8 Jul 2026] Only PO in DB for now.
  // PO Items are in BigSeller.
  @Post('poitembatch')
  async createBatchItem(@Body() body: { orders: CreatePurchaseOrderDto[] }) {
    console.log('createBatch POItems => Received orders:', body.orders) ;
    return this.purchaseOrderService.createBatchItem(body.orders);
  }

  @Post('posnap')
  async getPOSnap() {
    console.log('==========> PurchaseOrderController findPOSnap:');
    // Pass the orders array to your service to query the POSnap table
    return this.purchaseOrderService.findPOSnap();
  }
 
}
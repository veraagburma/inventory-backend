import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { PurchaseOrder } from './entities/purchase-order.entity';
import { PurchaseOrderItem } from './entities/purchase-order-item.entity';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { ItemVariant } from '../item-variant/entities/itemvariant.entity'
// import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Injectable()

export class PurchaseOrderService {
  constructor(
    @InjectRepository(PurchaseOrder)
    private readonly purchaseOrderRepository: Repository<PurchaseOrder>,

    @InjectRepository(PurchaseOrderItem)
    private readonly purchaseOrderItemRepository: Repository<PurchaseOrderItem>,

    private readonly dataSource: DataSource,
  ) {}

  // Find all orders (with items)
  async findAll(): Promise<PurchaseOrder[]> {
    return this.purchaseOrderRepository.find({ relations: ['items'] });
  }


  async findAllWithJoin() {
    try {
      return await this.purchaseOrderRepository.find({
        relations: ['items', 'items.variant'],
      });
      // const result = await this.salesOrderRepository
      //   .createQueryBuilder('order')
      //   .leftJoinAndSelect('order.items', 'item')
      //   .leftJoinAndSelect('item.variant', 'variant')
      //   .getMany();
      //   console.log('Joined result sample:', JSON.stringify(result, null, 2));
      // return result;
    } catch (error: any) {
        console.error('JOIN ERROR message:', error.message);
        console.error('JOIN ERROR stack:', error.stack);
        throw new InternalServerErrorException('PurchaseOrder with joined not found');
    }
  }

  async createBatch(orders: CreatePurchaseOrderDto[]) {
    const createdOrders = [];

    // console.log(JSON.stringify(orders));
    
    try {
      for (const order of orders) {
        const created = await this.purchaseOrderRepository.save(order); 
        createdOrders.push(created);
      }
      return createdOrders;
    }
    catch (error: any) {
        console.error('JOIN ERROR message:', error.message);
        console.error('JOIN ERROR stack:', error.stack);
    }
  }


  async createBatchItem(orders: CreatePurchaseOrderDto[]) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const results = [];

      for (const orderDto of orders) {
        // 🔹 1. Find existing PO by PO number
        let existingPO = await queryRunner.manager.findOne(PurchaseOrder, {
        where: { ponumber: orderDto.ponumber },
      });

      // 🔹 3. If PO items provided, create them
      if (orderDto.items && orderDto.items.length > 0) {
        console.log("-----------> createBatchItem existingPO: " + existingPO?.ponumber);
        for (const item of orderDto.items) {
          const poItem = queryRunner.manager.create(PurchaseOrderItem, {
          ...item,
          purchaseorder: existingPO, // FK relationship
        });
          await queryRunner.manager.save(poItem);
        }
      }
        results.push(existingPO);
    }
      await queryRunner.commitTransaction();
      return results;
  } catch (error: any) {
    await queryRunner.rollbackTransaction();
    console.error('JOIN ERROR message:', error.message);
    console.error('JOIN ERROR stack:', error.stack);
    throw new Error('Failed to create or update purchase orders');
  } finally {
    await queryRunner.release();
  }
  }
}
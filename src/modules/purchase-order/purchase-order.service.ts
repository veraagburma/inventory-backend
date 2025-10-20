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
    private readonly salesOrderRepository: Repository<PurchaseOrder>,

    @InjectRepository(PurchaseOrderItem)
    private readonly salesOrderItemRepository: Repository<PurchaseOrderItem>,
  ) {}

  // Find all orders (with items)
  async findAll(): Promise<PurchaseOrder[]> {
    return this.salesOrderRepository.find({ relations: ['items'] });
  }


  async findAllWithJoin() {
    try {
      return await this.salesOrderRepository.find({
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
    
    try {
      for (const order of orders) {
        const created = await this.salesOrderRepository.save(order); 
        createdOrders.push(created);
      }
      return createdOrders;
    }
    catch (error: any) {
        console.error('JOIN ERROR message:', error.message);
        console.error('JOIN ERROR stack:', error.stack);
    }
  }

}
import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { SalesOrder } from './entities/sales-order.entity';
import { SalesOrderItem } from './entities/sales-order-item.entity';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';
import { ItemVariant } from '../item-variant/entities/itemvariant.entity'
import { UpdateSalesOrderDto } from './dto/update-sales-order.dto';

@Injectable()

export class SalesOrderService {
  constructor(
    @InjectRepository(SalesOrder)
    private readonly salesOrderRepository: Repository<SalesOrder>,

    @InjectRepository(SalesOrderItem)
    private readonly salesOrderItemRepository: Repository<SalesOrderItem>,
  ) {}

  // Find all orders (with items)
  async findAll(): Promise<SalesOrder[]> {
    return this.salesOrderRepository.find({ relations: ['items'] });
  }

  // Find one order by ID (with items)
  async findOne(id: string): Promise<SalesOrder> {
    const order = await this.salesOrderRepository.findOne({
      where: { salesorderid: id },
      relations: ['items'],  // <-- load related SalesOrderItem[]
    });

    if (!order) {
      throw new Error('SalesOrder with ' + id + " not found");
    }
    return order;
    // return this.salesOrderRepository.findOne({
    //   where: { salesorderid: id },
    //   relations: ['items'],
    // });
  }

  async findAllWithJoin() {
    try {
      const result = await this.salesOrderRepository
        .createQueryBuilder('order')
        .leftJoinAndSelect('order.items', 'item')
        .leftJoinAndSelect('item.variant', 'variant')
        .getMany();

      console.log('✅ Joined result sample:', JSON.stringify(result, null, 2));
      return result;
    } catch (error: any) {
        console.error('JOIN ERROR message:', error.message);
        console.error('JOIN ERROR stack:', error.stack);
        throw new InternalServerErrorException('SalesOrder with joined not found');
    }
  }

  // Create a new Sales Order with items
  async create(createDto: CreateSalesOrderDto): Promise<SalesOrder> {
    const { items, ...orderData } = createDto;

    // Create order
    const order = this.salesOrderRepository.create(orderData);
    await this.salesOrderRepository.save(order);

    // Create related items
    if (items && items.length > 0) {
      const orderItems = items.map((item) =>
        this.salesOrderItemRepository.create({ ...item, order }),
      );
      await this.salesOrderItemRepository.save(orderItems);
      order.items = orderItems;
    }

    return order;
  }

  async createBatch(orders: CreateSalesOrderDto[]) {
    const createdOrders = [];
    for (const order of orders) {
      const created = await this.salesOrderRepository.save(order); 
      createdOrders.push(created);
    }
    return createdOrders;
  }

  // Update order details
  async update(id: string, updateDto: UpdateSalesOrderDto): Promise<SalesOrder> {
    const order = await this.salesOrderRepository.findOne({ where: { salesorderid: id } });
    if (!order) throw new Error('Order not found');

    Object.assign(order, updateDto);
    return this.salesOrderRepository.save(order);
  }

  // Delete order (will also delete items if cascade: true)
  async remove(id: string): Promise<void> {
    await this.salesOrderRepository.delete(id);
  }
}
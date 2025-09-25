import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { SalesOrder } from './entities/sales-order.entity';
import { SalesOrderItem } from './entities/sales-order-item.entity';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';
import { ItemVariant } from '../item-variant/entities/itemvariant.entity'

@Injectable()
export class SalesOrderService {
  constructor(
    @InjectRepository(SalesOrder) private soRepo: Repository<SalesOrder>,
    @InjectRepository(SalesOrderItem) private soiRepo: Repository<SalesOrderItem>,
    @InjectRepository(ItemVariant) private variantRepo: Repository<ItemVariant>,
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<SalesOrder[]> {
    return this.soRepo.find({ relations: ['items'] });
  }

  async findOne(salesorderid: number): Promise<SalesOrder> {
    const so = await this.soRepo.findOne({ where: { salesorderid }, relations: ['items'] });
    if (!so) throw new NotFoundException('Sales order not found');
    return so;
  }

  // Create sales order with items, update inventory (example), transactional
  async create(createDto: CreateSalesOrderDto): Promise<SalesOrder> {
    // Basic validation: items must exist and have enough stock (optional)
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Validate variants and compute totals
      const itemsEntities: SalesOrderItem[] = [];
      for (const it of createDto.items) {
        // const variant = await this.variantRepo.findOne({ where: { variantid: it.sku }});
        // if (!variant) throw new NotFoundException(`ItemVariant ${it.sku} not found`);

        // Optional: check stock (if you maintain stock)
        // if (variant.qty < it.quantity) throw new ConflictException('Insufficient stock');

        const soi = new SalesOrderItem();
        soi.sku = it.sku;
        soi.quantity = it.quantity;
        soi.unitprice = it.unitPrice;
        soi.totalprice = Number((it.quantity * it.unitPrice).toFixed(2));
        itemsEntities.push(soi);
      }

      // Create order
      const so = new SalesOrder();
      so.platformid = 1;      // To be updated
      so.orderstatus = 'Paid';
      so.items = itemsEntities;

      const saved = await queryRunner.manager.save(so);

      // Optional: reduce stock in ItemVariant and create inventory transactions
      for (const it of itemsEntities) {
        // example: decrement variant stock if you track it
        // await queryRunner.manager.decrement(ItemVariant, { variantid: it.variantId }, 'qty', it.quantity);
      }

      await queryRunner.commitTransaction();
      return await this.findOne(saved.salesorderid);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async update(id: number, dto: any): Promise<SalesOrder> {
    await this.soRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.soRepo.delete(id);
  }
}
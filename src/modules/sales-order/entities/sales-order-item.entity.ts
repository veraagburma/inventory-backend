
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SalesOrder } from './sales-order.entity';
import { ItemVariant } from 'modules/item-variant/entities/itemvariant.entity';

@Entity('sales_order_item')
export class SalesOrderItem {
  @PrimaryGeneratedColumn()
  soItemid: number;

  @ManyToOne(() => SalesOrder, (so) => so.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sales_order_id' })
  salesOrder: SalesOrder;
  
  @Column()
  salesorderid: string;

  @ManyToOne(() => ItemVariant)
  @JoinColumn({ name: 'variantId', referencedColumnName: 'variantid' })
  variant: ItemVariant;

  // ItemVariant's primary key is SKU
  @Column()
  sku: string;
  
  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  unitprice: number; // selling price

  @Column({ type: 'numeric' })
  discount: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  totalprice: number; // quantity * unitPrice (store for immutability)

  @Column()
  createdby: string;

  @Column({ type: 'timestamp' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;
}



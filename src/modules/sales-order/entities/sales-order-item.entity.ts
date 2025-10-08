
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SalesOrder } from './sales-order.entity';
import { ItemVariant } from 'modules/item-variant/entities/itemvariant.entity';

@Entity('salesorderitem')
export class SalesOrderItem {
  @PrimaryGeneratedColumn()
  soitemid: number;

  @ManyToOne(() => SalesOrder, (order) => order.items, { onDelete: 'CASCADE', })
  @JoinColumn({ name: 'salesorderid' })
  order: SalesOrder;
  
  @Column()
  salesorderid: string;

  @ManyToOne(() => ItemVariant)
  @JoinColumn({ name: 'sku', referencedColumnName: 'sku' })
  variant: ItemVariant;

  // ItemVariant's primary key is SKU
  @Column()
  sku: string;
  
  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  unitprice: number; // selling price

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  itemdiscount: number;

  @Column()
  remarks: string;

  @Column()
  createdby: string;

  @Column({ type: 'timestamp' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;
}




import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PurchaseOrder } from './purchase-order.entity';
import { ItemVariant } from 'modules/item-variant/entities/itemvariant.entity';

@Entity('purchaseorderitem')
export class PurchaseOrderItem {
  @PrimaryGeneratedColumn()
  poitemid: number;

  @ManyToOne(() => PurchaseOrder, (order) => order.items, { onDelete: 'CASCADE', })
  @JoinColumn({ name: 'ponumber' })
  order: PurchaseOrder;
  
  @Column()
  ponumber: string;


  @ManyToOne(() => ItemVariant)
  @JoinColumn({ name: 'sku', referencedColumnName: 'sku' })
  variant: ItemVariant;

  // ItemVariant's primary key is SKU
  @Column()
  sku: string;

  @Column()
  size: string;

  @Column()
  color: string;
  
  @Column({ type: 'int' })
  subquantity: number;

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




import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PurchaseOrderItem } from './purchase-order-item.entity'

@Entity('purchaseorder')
export class PurchaseOrder {
  @PrimaryGeneratedColumn()
  poid: number;

  @OneToMany(() => PurchaseOrderItem, (item) => item.order, {
    cascade: true, // allow saving order with items in one call
    eager: true,   // optional: auto-load items with order
  })
  items: PurchaseOrderItem[];
  
  @Column()
  supplierid: number;
  
  @Column()
  platformid: number; 

  @Column({ type: 'timestamp' })
  podate: Date;
  
  @Column({ type: 'varchar', length: 20, default: 'Paid' })
  ponumber: string;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  totalcostcny: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  totalcostsgd: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  discount: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  quantity: number;

  // To auto generate 
  // @Column({ type: 'numeric', precision: 12, scale: 2 })
  // unitcostperbatch: number; 

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  shippingcost: number; // to auto generate? 

  @Column()
  shippingtype: string;

  @Column({ type: 'timestamp' })
  shippingdate: Date;
  
  @Column()
  postatus: string;

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




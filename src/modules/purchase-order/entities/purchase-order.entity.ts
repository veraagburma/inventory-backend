
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { PurchaseOrderItem } from './purchase-order-item.entity'

@Entity('purchaseorder')
export class PurchaseOrder {
  @PrimaryColumn()
  ponumber: string;
  // poid: number;

  @OneToMany(() => PurchaseOrderItem, (item) => item.order, {
    cascade: true, // allow saving order with items in one call
    eager: true,   // optional: auto-load items with order
  })
  items: PurchaseOrderItem[];
  
  @Column()
  supplier: string;
  
  @Column()
  platform: number; 

  @Column({ type: 'timestamp' })
  podate: Date;
  
  @Column()
  category: string;

  @Column()
  itemcode: string;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  totalcostcny: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  totalcostsgd: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  discount: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  quantity: number;

  // To auto generate 
  @Column({ type: 'numeric', precision: 12, scale: 2 })
  unitcostperbatch: number; 

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




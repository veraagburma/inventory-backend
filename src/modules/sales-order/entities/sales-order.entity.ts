
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { SalesOrderItem } from './sales-order-item.entity'

@Entity('salesorder')
export class SalesOrder {
  @PrimaryColumn()
  salesorderid: string;

  @Column()
  platformid: number; 

  @Column({ type: 'timestamp' })
  orderdate: Date;
  
  @Column({ type: 'varchar', length: 20, default: 'Paid' })
  orderstatus: string;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  shippingfee: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  sellerrebate: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  platformrebate: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  bundlediscount: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  totalprice: number;

  @Column()
  createdby: string;

  @Column({ type: 'timestamp' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;


  // should  call salesorderitem? 
  @OneToMany(() => SalesOrderItem, (item) => item.order, {
    cascade: true, // allow saving order with items in one call
    eager: true,   // optional: auto-load items with order
  })
  items: SalesOrderItem[];
}




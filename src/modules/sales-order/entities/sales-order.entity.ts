
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SalesOrderItem } from './sales-order-item.entity'

@Entity('SalesOrder')
export class SalesOrder {
  @PrimaryGeneratedColumn()
  salesorderid: number;

  @Column()
  platformid: number; 

  @Column({ type: 'timestamp' })
  orderdate: Date;
  
  @Column({ type: 'varchar', length: 20, default: 'Paid' })
  orderstatus: string;

  @Column({ type: 'int' })
  shippingfee: number;

  @Column({ type: 'int' })
  sellerrebate: number;

  @Column({ type: 'int' })
  platformrebate: number;

  @Column({ type: 'int' })
  bundlediscount: number;

  @Column()
  createdby: string;

  @Column({ type: 'timestamp' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;


  // should  call salesorderitem? 
  @OneToMany(() => SalesOrderItem, (soItem) => soItem.salesorderid, {
    cascade: true, // allow saving order with items in one call
    eager: true,   // optional: auto-load items with order
  })

  items: SalesOrderItem[];
}




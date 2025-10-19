
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { SalesOrderItem } from './sales-order-item.entity'

@Entity('salesorder')
export class SalesOrder {
  @PrimaryColumn()
  salesorderid: string;

    // should  call salesorderitem? 
  @OneToMany(() => SalesOrderItem, (item) => item.order, {
    cascade: true, // allow saving order with items in one call
    eager: true,   // optional: auto-load items with order
  })
  items: SalesOrderItem[];

  @Column()
  platformid: number; 

  @Column({ type: 'timestamp' })
  orderdate: Date;
  
  @Column({ type: 'varchar', length: 20, default: 'Paid' })
  orderstatus: string;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  shippingfee: number;




  @Column({ type: 'numeric', precision: 12, scale: 2 })
  commissionfee : number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  servicefee : number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  transactionfee : number;



  @Column({ type: 'numeric', precision: 12, scale: 2 })
  totalprice: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  sellerbundlediscount: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  sellervoucher: number;


  @Column({ type: 'numeric', precision: 12, scale: 2 })
  platformbundlediscount: number;
  
  @Column({ type: 'numeric', precision: 12, scale: 2 })
  platformvouchervalue: number;


  @Column({ type: 'numeric', precision: 12, scale: 2 })
  creditcarddiscount: number;


  @Column()
  createdby: string;

  @Column({ type: 'timestamp' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;
}




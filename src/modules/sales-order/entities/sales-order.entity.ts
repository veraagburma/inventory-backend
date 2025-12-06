
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
  platform: string; 

  @Column({ type: 'timestamp' })
  orderdate: Date;
  
  @Column({ type: 'varchar', length: 20, default: 'Paid' })
  orderstatus: string;

  @Column()
  isfbs: boolean;
  
  @Column()
  username: string;


  @Column({ type: 'timestamp' })
  shippeddatetime: Date;

  @Column({ type: 'timestamp' })
  deliveeddatetime: Date;

  @Column({ type: 'timestamp' })
  completeddatetime: Date;

  @Column({ type: 'timestamp' })
  cancelleddatetime: Date;


  @Column()
  shippingoption: string;

  @Column()
  shippingmethod: string;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  shippingfee: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  shippingfeesaverprogramme: number;


  @Column({ type: 'numeric', precision: 12, scale: 2 })
  orderqty: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  totalprice: number;


  @Column({ type: 'numeric', precision: 12, scale: 2 })
  commissionfee : number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  servicefee : number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  transactionfee : number;


  @Column({ type: 'numeric', precision: 12, scale: 2 })
  sellerbundlediscount: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  platformbundlediscount: number;

  
  @Column({ type: 'numeric', precision: 12, scale: 2 })
  sellervoucheramount: number;
  
  @Column({ type: 'numeric', precision: 12, scale: 2 })
  platformvoucheramount: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  sellerabsorbedvalue: number;


  @Column()
  createdby: string;

  @Column({ type: 'timestamp' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;
}




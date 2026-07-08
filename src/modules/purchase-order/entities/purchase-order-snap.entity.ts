
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('purchaseordersnap')
export class PurchaseOrderSnap {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemcode: string;

  @Column()
  category: string;

  @Column()
  subcategory: string;


  @Column({ type: 'numeric', precision: 12, scale: 2 })
  totalpaid: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  totalrefunded: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  returnshippingfee: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  nett: number;


  @Column({ type: 'numeric', precision: 12, scale: 2 })
  orderedqty: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  returnedqty: number;
  
  @Column({ type: 'numeric', precision: 12, scale: 2 })
  nettqty: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  averagecost: number;

  @Column({ type: 'timestamp' })
  snapshot_date: Date;
}




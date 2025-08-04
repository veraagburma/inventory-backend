
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Item } from '../../item/entities/item.entity'

@Entity()
export class ItemVariant {
  @PrimaryGeneratedColumn()
  variantid: number;
  
  @Column({ name: 'itemcode' })
  itemcode: string;

  @ManyToOne(() => Item, item => item.variants, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'itemcode', referencedColumnName: 'itemcode' })
  item: Item;

  @Column({ unique: true })
  sku: string;

  @Column({ name: 'size' })
  size: string;

  @Column({ name: 'color' })
  color: string;

  @Column({ name: 'barcode' })
  barcode: string;

  @Column({ name: 'weight_grams' })
  weight_grams: number;

  @Column({ name: 'volume_cm3' })
  volume_cm3: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  unitprice: number;

  @Column({ name: 'itemremarks' })
  itemremarks: string;

  @Column({ type: 'simple-json', nullable: true })
  listingdetails: Record<string, any>; // e.g., { Shopee: "Listed", TikTok: "Pending" }

  @Column()
  createdby: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;
}

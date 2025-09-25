
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Item } from '../../item/entities/item.entity'

@Entity('ItemVariant')
export class ItemVariant {
  
  @PrimaryGeneratedColumn()
  sku: string;
  
  @Column({ name: 'itemcode' })
  itemcode: string;

  @ManyToOne(() => Item, item => item.variants, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'itemcode', referencedColumnName: 'itemcode' })
  item: Item;

  @Column({ name: 'size' })
  size: string;

  @Column({ name: 'color' })
  color: string;

  @Column({ name: 'barcode' })
  barcode: string;

  // @Column({ name: 'weight_grams' })
  // weight_grams: number;

  // @Column({ name: 'volume_cm3' })
  // volume_cm3: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  unitprice: number;

  @Column({ name: 'itemremarks' })
  itemremarks: string;

  @Column()
  createdby: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;
}

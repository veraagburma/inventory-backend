
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { ItemVariant } from 'modules/item-variant/entities/itemvariant.entity';

@Entity()
export class Item {
  @PrimaryColumn()
  itemcode : string;

  @Column()
  itemcategory : string;

  @Column()
  itemname : string;

  @Column()
  itemremarks : string;

  @Column()
  createdby: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;

  @OneToMany(() => ItemVariant, variant => variant.item, { cascade: true })
  variants: ItemVariant[];
}

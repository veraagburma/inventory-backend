
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

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

  // @Column({ type: 'simple-json', nullable: true })
  // datelisted : {
  //   platform?: string;
  //   listeddate?: Date;
  // };

  @Column()
  createdby: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;
}

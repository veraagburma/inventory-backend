
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Supplier {
  // @PrimaryGeneratedColumn()
  // supplierid: number;

  @PrimaryColumn()
  suppliername: string;

  @Column()
  suppliercname: string;

  @Column()
  supplieraddress: string;

  @Column()
  supplierremarks: string;

  @Column()
  createdby: string;

  @Column({ type: 'timestamp' })
  createddate: Date;

  @Column()
  updatedby: string;

  @Column({ type: 'timestamp' })
  updateddate: Date;
}

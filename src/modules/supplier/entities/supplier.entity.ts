
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  supplierid: number;

  @Column()
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

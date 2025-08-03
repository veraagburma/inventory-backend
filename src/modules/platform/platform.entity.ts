
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn()
  PlatformID: number;

  @Column()
  PlatformName: string;

  @Column()
  PlatformType: string;
}

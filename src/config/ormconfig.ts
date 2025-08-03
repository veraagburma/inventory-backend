
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const isOffline = process.env.USE_SQLITE === 'true';

export const ormConfig: TypeOrmModuleOptions = isOffline ? {
  type: 'sqlite',
  database: 'offline.db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  //synchronize: true,
} : {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
 // synchronize: true,
};

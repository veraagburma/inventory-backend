import { Module } from '@nestjs/common';
import { SalesOrderController } from './sales-order.controller';
import { SalesOrderService } from './sales-order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesOrder } from './entities/sales-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesOrder])],
  controllers: [SalesOrderController],
  providers: [SalesOrderService],
})
export class SalesOrderModule {}

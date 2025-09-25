import { Module } from '@nestjs/common';
import { SalesOrderController } from './sales-order.controller';
import { SalesOrderService } from './sales-order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesOrder } from './entities/sales-order.entity';
import { SalesOrderItem } from './entities/sales-order-item.entity';
import { ItemVariant } from 'modules/item-variant/entities/itemvariant.entity';
import { ItemModule } from 'modules/item/item.module';

/* If there's Foreign Key, must declare both tables */
@Module({
  imports: [TypeOrmModule.forFeature([SalesOrder, SalesOrderItem, ItemVariant]),
    ItemModule,
  ],

  controllers: [SalesOrderController],
  providers: [SalesOrderService],
})
export class SalesOrderModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrder } from './entities/purchase-order.entity';
import { PurchaseOrderItem } from './entities/purchase-order-item.entity';
import { PurchaseOrderController } from './purchase-order.controller';
import { PurchaseOrderService } from './purchase-order.service';
import { ItemModule } from 'modules/item/item.module';
import { ItemVariantModule } from 'modules/item-variant/itemvariant.module';

/* If there's Foreign Key, must declare both tables */
@Module({
  imports: [TypeOrmModule.forFeature([PurchaseOrder, PurchaseOrderItem]),
    ItemModule,
    ItemVariantModule     // if Entity already has a module, import module instead!!
  ],

  controllers: [PurchaseOrderController],
  providers: [PurchaseOrderService],
  exports: [PurchaseOrderService],
})

export class PurchaseOrderModule {}


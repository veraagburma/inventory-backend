
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/ormconfig';
import { AppController } from './app.controller';
import { SupplierModule } from './modules/supplier/supplier.module';
import { PlatformModule } from './modules/platform/platform.module';
import { ItemModule } from './modules/item/item.module';
import { ItemVariantModule } from './modules/item-variant/itemvariant.module';
import { SalesOrderModule } from 'modules/sales-order/sales-order.module';
import { PurchaseOrderModule } from 'modules/purchase-order/purchase-order.module';

@Module({

  imports: [
    TypeOrmModule.forRoot(ormConfig),
    SupplierModule,
    PlatformModule,
    ItemModule,
    ItemVariantModule,
    SalesOrderModule,
    PurchaseOrderModule
  ],
  controllers: [AppController]
  
})
export class AppModule {}

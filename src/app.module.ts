
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/ormconfig';
import { AppController } from './app.controller';
//import { InventoryModule } from './inventory/inventory.module';
import { SupplierModule } from './modules/supplier/supplier.module';
import { PlatformModule } from './modules/platform/platform.module';
import { ItemModule } from './modules/item/item.module';

@Module({

  imports: [
    TypeOrmModule.forRoot(ormConfig),
    SupplierModule,
    PlatformModule,
    ItemModule,
  ],
  controllers: [AppController]
  
})
export class AppModule {}



import { Module } from '@nestjs/common';
import { ItemVariantController } from './itemvariant.controller';
import { ItemVariantService } from './itemvariant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemVariant } from './entities/itemvariant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemVariant])],
  controllers: [ItemVariantController],
  providers: [ItemVariantService],
})
export class ItemVariantModule {}

import { Module } from '@nestjs/common';
import { ItemVariantController } from './itemvariant.controller';
import { ItemVariantService } from './itemvariant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemVariant } from './entities/itemvariant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemVariant])],
  controllers: [ItemVariantController],
  providers: [ItemVariantService],
  exports: [TypeOrmModule],   // ✅ Allow other modules to use ItemVariantRepository
})
export class ItemVariantModule {}

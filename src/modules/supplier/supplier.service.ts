import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
  ) {}

  // Advanced creation to learn later 
  async create(createSupplierDto: CreateSupplierDto): Promise<Supplier> {
    const supplier = this.supplierRepository.create(createSupplierDto as Partial<Supplier>);
    return this.supplierRepository.save(supplier);
  }

  async findAll(): Promise<Supplier[]> {
    return this.supplierRepository.find();
  }

//   async findOne(id: number): Promise<Supplier> {
//     const supplier = await this.supplierRepository.findOne({ where: { supplierid: id } });
//     if (!supplier) {
//       throw new NotFoundException(`Supplier with ID ${id} not found`);
//     }
//     return supplier;
// }

//   async update(id: number, updateDto: UpdateSupplierDto) {
//     // To prevent Created Date and By being updated
//     delete (updateDto as any).createddate;
//     delete (updateDto as any).createdby;
//     await this.supplierRepository.update(id, updateDto);
//     //return Promise<Supplier>;
//   }

//   async remove(id: number): Promise<void> {
//     await this.supplierRepository.delete(id);
//   }
}

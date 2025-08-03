import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
export declare class SupplierService {
    private readonly supplierRepository;
    constructor(supplierRepository: Repository<Supplier>);
    create(createSupplierDto: CreateSupplierDto): Promise<Supplier>;
    findAll(): Promise<Supplier[]>;
    findOne(id: number): Promise<Supplier>;
    update(id: number, updateDto: UpdateSupplierDto): Promise<void>;
    remove(id: number): Promise<void>;
}

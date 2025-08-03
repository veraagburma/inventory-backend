import { SupplierService } from './supplier.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { Supplier } from './entities/supplier.entity';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
export declare class SupplierController {
    private readonly supplierService;
    constructor(supplierService: SupplierService);
    create(createSupplierDto: CreateSupplierDto): Promise<Supplier>;
    findAll(): Promise<Supplier[]>;
    findOne(id: number): Promise<Supplier>;
    update(id: number, updateDto: UpdateSupplierDto): Promise<void>;
}

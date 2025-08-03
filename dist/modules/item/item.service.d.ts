import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemService {
    private readonly itemRepository;
    constructor(itemRepository: Repository<Item>);
    create(createItemDto: CreateItemDto): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    update(id: number, updateDto: UpdateItemDto): Promise<void>;
    remove(id: number): Promise<void>;
}

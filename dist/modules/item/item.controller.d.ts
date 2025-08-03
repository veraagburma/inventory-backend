import { Item } from './entities/item.entity';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(createItemDto: CreateItemDto): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    update(id: number, updateDto: UpdateItemDto): Promise<void>;
}

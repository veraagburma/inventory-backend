import { Injectable, NotFoundException, ConflictException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    try {
      const newItem = this.itemRepository.create(createItemDto as Partial<Item>);
      return await this.itemRepository.save(newItem);
    } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as any).code === '23505'
    ) {
      throw new ConflictException(`Item with code '${createItemDto.itemcode}' already exists.`);
    }
      throw error;
    }
  }

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find({
      order: {
        itemcode: 'ASC',
      }
    });
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.itemRepository.findOne({ where: { itemcode: id } });
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
}

  async update(id: string, updateDto: UpdateItemDto) {
    // To prevent Created Date and By being updated
    console.log("==========> UpdateItemDto in Service: " + updateDto.itemcode + " " + updateDto.itemcategory);


    await this.itemRepository.update(id, updateDto);
    //return Promise<Item>;
  }

  async remove(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }
}

import { Injectable, NotFoundException, ConflictException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemVariant } from './entities/itemvariant.entity';
import { CreateItemVariantDto } from './dto/create-itemvariant.dto';
import { UpdateItemVariantDto } from './dto/update-itemvariant.dto';

@Injectable()
export class ItemVariantService {
  constructor(
    @InjectRepository(ItemVariant)
    private readonly itemRepository: Repository<ItemVariant>,
  ) {}

  async create(createItemVariantDto: CreateItemVariantDto): Promise<ItemVariant> {
    try {
      const newItemVariantVariant = this.itemRepository.create(createItemVariantDto as Partial<ItemVariant>);
      return await this.itemRepository.save(newItemVariantVariant);
    } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as any).code === '23505'
    ) {
      throw new ConflictException(`ItemVariant with code '${createItemVariantDto.itemcode}' already exists.`);
    }
      throw error;
    }
  }

  async findAll(): Promise<ItemVariant[]> {
    return this.itemRepository.find({
      order: {
        itemcode: 'ASC',
      }
    });
  }

  async findOne(id: string): Promise<ItemVariant> {
    const item = await this.itemRepository.findOne({ where: { itemcode: id } });
    if (!item) {
      throw new NotFoundException(`ItemVariant with ID ${id} not found`);
    }
    return item;
}

  async update(id: string, updateDto: UpdateItemVariantDto) {
    // To prevent Created Date and By being updated
    console.log("==========> UpdateItemVariantDto in Service: " + updateDto.itemcode + " " + updateDto.itemcategory);


    await this.itemRepository.update(id, updateDto);
    //return Promise<ItemVariant>;
  }

  async remove(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }
}

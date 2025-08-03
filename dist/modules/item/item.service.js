"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const item_entity_1 = require("./entities/item.entity");
let ItemService = class ItemService {
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    async create(createItemDto) {
        try {
            const newItem = this.itemRepository.create(createItemDto);
            return await this.itemRepository.save(newItem);
        }
        catch (error) {
            if (typeof error === 'object' &&
                error !== null &&
                'code' in error &&
                error.code === '23505') {
                throw new common_1.ConflictException(`Item with code '${createItemDto.itemcode}' already exists.`);
            }
            throw error;
        }
    }
    async findAll() {
        return this.itemRepository.find();
    }
    async findOne(id) {
        const item = await this.itemRepository.findOne({ where: { itemcode: id } });
        if (!item) {
            throw new common_1.NotFoundException(`Item with ID ${id} not found`);
        }
        return item;
    }
    async update(id, updateDto) {
        console.log("Did I come here? ");
        await this.itemRepository.update(id, updateDto);
    }
    async remove(id) {
        await this.itemRepository.delete(id);
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(item_entity_1.Item)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ItemService);
//# sourceMappingURL=item.service.js.map
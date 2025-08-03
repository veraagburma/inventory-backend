import { Controller, Get } from '@nestjs/common';

@Controller('inventory')  // <- This defines the /inventory path
export class InventoryController {
  @Get()
  getAll() {
    return ['Inventory is working'];
  }
}
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return '✅ Inventory API is running. Visit /inventory or /supplier.';
  }
}
import { Controller, Get, Post, Param, Body, Patch, Delete, Header, StreamableFile } from '@nestjs/common';
import * as ExcelJS from 'exceljs';

import { PurchaseOrderService } from './purchase-order.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
// import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Controller('purchaseorder')
export class PurchaseOrderController {
  constructor(private readonly purchaseOrderService: PurchaseOrderService) {}

  @Get()
  findAll() {
    console.log('==========> PurchaseOrderController findAll');
    return this.purchaseOrderService.findAll();
  }

  @Get('joined')
  findAllWithItems() {
    console.log('==========> PurchaseOrderController findAllWithItems:');
    // join PurchaseOrder + PurchaseOrderItem + ItemVariant/Inventory
    return this.purchaseOrderService.findAllWithJoin();
  }

  @Post('pobatch')
  async createBatch(@Body() body: { orders: CreatePurchaseOrderDto[] }) {
    // console.log('createBatch PO => Received orders:', body.orders);
    return this.purchaseOrderService.createBatch(body.orders);
  }

  // batch creation of PO Items, currently not in use
  // [8 Jul 2026] Only PO in DB for now.
  // PO Items are in BigSeller.
  @Post('poitembatch')
  async createBatchItem(@Body() body: { orders: CreatePurchaseOrderDto[] }) {
    console.log('createBatch POItems => Received orders:', body.orders) ;
    return this.purchaseOrderService.createBatchItem(body.orders);
  }

  @Post('posnap')
  async getPOSnap() {
    console.log('==========> PurchaseOrderController findPOSnap:');
    // Pass the orders array to your service to query the POSnap table
    return this.purchaseOrderService.findPOSnap();
  }

  @Post('posnapexport')
  @Header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  @Header('Content-Disposition', 'attachment; filename="Purchase_Orders.xlsx"')
  async exportPOSnaps(): Promise<StreamableFile> {
   // 1. Fetch data
    const data = await this.purchaseOrderService.findPOSnap();
    const workbook = new ExcelJS.Workbook();

    if (data.length > 0) {
      // 2. Setup dynamic columns once so we can reuse them across all sheets
      const firstRow = data[0];
      const dynamicColumns = Object.keys(firstRow).map((key) => ({
        header: key.toUpperCase(),
        key: key,
        width: 20,
      }));

      // --- HELPER TO AUTO-FORMAT ROWS ---
      // We wrap this in a quick function so we don't repeat this logic
      const formatRow = (row: any) => {
        const formattedRow: Record<string, any> = {};
        for (const [key, value] of Object.entries(row)) {
          if (typeof value === 'string' && value.trim() !== '' && !isNaN(Number(value))) {
            formattedRow[key] = value.includes('.') ? parseFloat(value) : parseInt(value, 10);
          } else {
            formattedRow[key] = value;
          }
        }
        return formattedRow;
      };

      // 3. CREATE THE "ALL DATA" SHEET (First Sheet)
      const allDataSheet = workbook.addWorksheet('All_PO_Data');
      allDataSheet.columns = dynamicColumns;
      
      data.forEach((row) => {
        allDataSheet.addRow(formatRow(row));
      });

      // 4. GROUP DATA FOR THE SPLIT SHEETS
      const groupedData: Record<string, any[]> = {};
      
      data.forEach((row) => {
        const targetSheetName = determineSheetName(row.itemcode);
        if (!groupedData[targetSheetName]) {
          groupedData[targetSheetName] = [];
        }
        groupedData[targetSheetName].push(row);
      });

      // 5. CREATE THE SPLIT SHEETS
      Object.keys(groupedData).forEach((sheetName) => {
        // Excel strictly limits worksheet names to 31 characters
        const safeSheetName = sheetName.substring(0, 31);
        
        const splitSheet = workbook.addWorksheet(safeSheetName);
        splitSheet.columns = dynamicColumns;
        
        groupedData[sheetName].forEach((row) => {
          splitSheet.addRow(formatRow(row));
        });
      });
    }

    // 6. Write file and stream it back
    const buffer = await workbook.xlsx.writeBuffer();
    return new StreamableFile(Buffer.from(buffer));
  }
}

const determineSheetName = (itemcode: string): string => {
  if (!itemcode) return 'Uncategorized';

  if(itemcode == "Gift")
    return "Gift";

  if(itemcode == "Polymailer")
    return "Polymailer";

  if(itemcode == "Card")
    return "Card";

  if(itemcode == "Ads")
    return "Ads";

  if (['FBS', '', 'Misc', 'Shop'].includes(itemcode)) {
    return 'Misc';
  }

  // Regex: Alphabet followed by 3 digits OR contains a decimal
  if (/^[a-zA-Z]+\d{3}$/.test(itemcode) || /\./.test(itemcode)) {
    return 'Products';
  }

  return 'Uncategorized';
};

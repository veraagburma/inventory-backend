"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupplierDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_supplier_dto_1 = require("./create-supplier.dto");
class UpdateSupplierDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_supplier_dto_1.CreateSupplierDto, ['createddate'])) {
}
exports.UpdateSupplierDto = UpdateSupplierDto;
//# sourceMappingURL=update-supplier.dto.js.map
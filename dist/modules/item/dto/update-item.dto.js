"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateItemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_item_dto_1 = require("./create-item.dto");
class UpdateItemDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_item_dto_1.CreateItemDto, ['createddate'])) {
}
exports.UpdateItemDto = UpdateItemDto;
//# sourceMappingURL=update-item.dto.js.map
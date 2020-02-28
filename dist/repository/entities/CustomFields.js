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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let CustomFields = class CustomFields {
};
__decorate([
    typeorm_1.Column("varchar", { name: "bean_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CustomFields.prototype, "beanId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "set_num", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], CustomFields.prototype, "setNum", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field0", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CustomFields.prototype, "field0", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field1", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CustomFields.prototype, "field1", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field2", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CustomFields.prototype, "field2", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field3", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CustomFields.prototype, "field3", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field4", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CustomFields.prototype, "field4", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field5", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CustomFields.prototype, "field5", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field6", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CustomFields.prototype, "field6", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field7", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CustomFields.prototype, "field7", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field8", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CustomFields.prototype, "field8", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field9", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CustomFields.prototype, "field9", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], CustomFields.prototype, "deleted", void 0);
CustomFields = __decorate([
    typeorm_1.Index("idx_beanid_set_num", ["beanId", "setNum"], {}),
    typeorm_1.Entity("custom_fields", { schema: "sugar" })
], CustomFields);
exports.CustomFields = CustomFields;
//# sourceMappingURL=CustomFields.js.map
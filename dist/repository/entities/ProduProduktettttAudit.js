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
let ProduProduktettttAudit = class ProduProduktettttAudit {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ProduProduktettttAudit.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("char", { name: "parent_id", length: 36 }),
    __metadata("design:type", String)
], ProduProduktettttAudit.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_created", nullable: true }),
    __metadata("design:type", Date)
], ProduProduktettttAudit.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktettttAudit.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "field_name", nullable: true, length: 100 }),
    __metadata("design:type", String)
], ProduProduktettttAudit.prototype, "fieldName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "data_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], ProduProduktettttAudit.prototype, "dataType", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "before_value_string",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktettttAudit.prototype, "beforeValueString", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "after_value_string",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktettttAudit.prototype, "afterValueString", void 0);
__decorate([
    typeorm_1.Column("text", { name: "before_value_text", nullable: true }),
    __metadata("design:type", String)
], ProduProduktettttAudit.prototype, "beforeValueText", void 0);
__decorate([
    typeorm_1.Column("text", { name: "after_value_text", nullable: true }),
    __metadata("design:type", String)
], ProduProduktettttAudit.prototype, "afterValueText", void 0);
ProduProduktettttAudit = __decorate([
    typeorm_1.Index("idx_produ_produktetttt_parent_id", ["parentId"], {}),
    typeorm_1.Entity("produ_produktetttt_audit", { schema: "sugar" })
], ProduProduktettttAudit);
exports.ProduProduktettttAudit = ProduProduktettttAudit;
//# sourceMappingURL=ProduProduktettttAudit.js.map
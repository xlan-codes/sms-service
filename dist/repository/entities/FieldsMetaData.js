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
let FieldsMetaData = class FieldsMetaData {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "vname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "vname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "comments", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "comments", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "help", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "help", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "custom_module", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "customModule", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("int", { name: "len", nullable: true }),
    __metadata("design:type", Number)
], FieldsMetaData.prototype, "len", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "required",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], FieldsMetaData.prototype, "required", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "default_value", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "defaultValue", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], FieldsMetaData.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], FieldsMetaData.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "audited",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], FieldsMetaData.prototype, "audited", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "massupdate",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], FieldsMetaData.prototype, "massupdate", void 0);
__decorate([
    typeorm_1.Column("smallint", {
        name: "duplicate_merge",
        nullable: true,
        default: () => "'0'"
    }),
    __metadata("design:type", Number)
], FieldsMetaData.prototype, "duplicateMerge", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "reportable",
        nullable: true,
        width: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", Boolean)
], FieldsMetaData.prototype, "reportable", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "importable", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "importable", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ext1", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "ext1", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ext2", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "ext2", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ext3", nullable: true, length: 255 }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "ext3", void 0);
__decorate([
    typeorm_1.Column("text", { name: "ext4", nullable: true }),
    __metadata("design:type", String)
], FieldsMetaData.prototype, "ext4", void 0);
FieldsMetaData = __decorate([
    typeorm_1.Index("idx_meta_id_del", ["id", "deleted"], {}),
    typeorm_1.Index("idx_meta_cm_del", ["customModule", "deleted"], {}),
    typeorm_1.Entity("fields_meta_data", { schema: "sugar" })
], FieldsMetaData);
exports.FieldsMetaData = FieldsMetaData;
//# sourceMappingURL=FieldsMetaData.js.map
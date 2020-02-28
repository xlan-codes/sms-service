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
let Folders = class Folders {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Folders.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 25 }),
    __metadata("design:type", String)
], Folders.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "folder_type", nullable: true, length: 25 }),
    __metadata("design:type", String)
], Folders.prototype, "folderType", void 0);
__decorate([
    typeorm_1.Column("char", { name: "parent_folder", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Folders.prototype, "parentFolder", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "has_child",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Folders.prototype, "hasChild", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "is_group",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Folders.prototype, "isGroup", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "is_dynamic",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Folders.prototype, "isDynamic", void 0);
__decorate([
    typeorm_1.Column("text", { name: "dynamic_query", nullable: true }),
    __metadata("design:type", String)
], Folders.prototype, "dynamicQuery", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assign_to_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Folders.prototype, "assignToId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", length: 36 }),
    __metadata("design:type", String)
], Folders.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_by", length: 36 }),
    __metadata("design:type", String)
], Folders.prototype, "modifiedBy", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Folders.prototype, "deleted", void 0);
Folders = __decorate([
    typeorm_1.Index("idx_parent_folder", ["parentFolder"], {}),
    typeorm_1.Entity("folders", { schema: "sugar" })
], Folders);
exports.Folders = Folders;
//# sourceMappingURL=Folders.js.map
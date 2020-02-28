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
let ImportMaps = class ImportMaps {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ImportMaps.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 254 }),
    __metadata("design:type", String)
], ImportMaps.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "source", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ImportMaps.prototype, "source", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "enclosure",
        nullable: true,
        length: 1,
        default: () => "' '"
    }),
    __metadata("design:type", String)
], ImportMaps.prototype, "enclosure", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "delimiter",
        nullable: true,
        length: 1,
        default: () => "','"
    }),
    __metadata("design:type", String)
], ImportMaps.prototype, "delimiter", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "module", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ImportMaps.prototype, "module", void 0);
__decorate([
    typeorm_1.Column("text", { name: "content", nullable: true }),
    __metadata("design:type", String)
], ImportMaps.prototype, "content", void 0);
__decorate([
    typeorm_1.Column("text", { name: "default_values", nullable: true }),
    __metadata("design:type", String)
], ImportMaps.prototype, "defaultValues", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "has_header",
        nullable: true,
        width: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", Boolean)
], ImportMaps.prototype, "hasHeader", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], ImportMaps.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], ImportMaps.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], ImportMaps.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ImportMaps.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "is_published",
        nullable: true,
        length: 3,
        default: () => "'no'"
    }),
    __metadata("design:type", String)
], ImportMaps.prototype, "isPublished", void 0);
ImportMaps = __decorate([
    typeorm_1.Index("idx_owner_module_name", ["assignedUserId", "module", "name", "deleted"], {}),
    typeorm_1.Entity("import_maps", { schema: "sugar" })
], ImportMaps);
exports.ImportMaps = ImportMaps;
//# sourceMappingURL=ImportMaps.js.map
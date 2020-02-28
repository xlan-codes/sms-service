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
let UpgradeHistory = class UpgradeHistory {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], UpgradeHistory.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "filename", nullable: true, length: 255 }),
    __metadata("design:type", String)
], UpgradeHistory.prototype, "filename", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "md5sum",
        nullable: true,
        unique: true,
        length: 32
    }),
    __metadata("design:type", String)
], UpgradeHistory.prototype, "md5sum", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "type", nullable: true, length: 30 }),
    __metadata("design:type", String)
], UpgradeHistory.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 50 }),
    __metadata("design:type", String)
], UpgradeHistory.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "version", nullable: true, length: 64 }),
    __metadata("design:type", String)
], UpgradeHistory.prototype, "version", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], UpgradeHistory.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], UpgradeHistory.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "id_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], UpgradeHistory.prototype, "idName", void 0);
__decorate([
    typeorm_1.Column("longtext", { name: "manifest", nullable: true }),
    __metadata("design:type", String)
], UpgradeHistory.prototype, "manifest", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], UpgradeHistory.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "enabled",
        nullable: true,
        width: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", Boolean)
], UpgradeHistory.prototype, "enabled", void 0);
UpgradeHistory = __decorate([
    typeorm_1.Index("upgrade_history_md5_uk", ["md5sum"], { unique: true }),
    typeorm_1.Entity("upgrade_history", { schema: "sugar" })
], UpgradeHistory);
exports.UpgradeHistory = UpgradeHistory;
//# sourceMappingURL=UpgradeHistory.js.map
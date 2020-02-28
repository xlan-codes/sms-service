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
let Currencies = class Currencies {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Currencies.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Currencies.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "symbol", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Currencies.prototype, "symbol", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "iso4217", nullable: true, length: 3 }),
    __metadata("design:type", String)
], Currencies.prototype, "iso4217", void 0);
__decorate([
    typeorm_1.Column("double", {
        name: "conversion_rate",
        nullable: true,
        precision: 22,
        default: () => "'0'"
    }),
    __metadata("design:type", Number)
], Currencies.prototype, "conversionRate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Currencies.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], Currencies.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Currencies.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Currencies.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", length: 36 }),
    __metadata("design:type", String)
], Currencies.prototype, "createdBy", void 0);
Currencies = __decorate([
    typeorm_1.Index("idx_currency_name", ["name", "deleted"], {}),
    typeorm_1.Entity("currencies", { schema: "sugar" })
], Currencies);
exports.Currencies = Currencies;
//# sourceMappingURL=Currencies.js.map
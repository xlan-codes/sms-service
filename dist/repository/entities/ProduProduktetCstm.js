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
let ProduProduktetCstm = class ProduProduktetCstm {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id_c", length: 36 }),
    __metadata("design:type", String)
], ProduProduktetCstm.prototype, "idC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "username_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetCstm.prototype, "usernameC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "password_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetCstm.prototype, "passwordC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "mac_address_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetCstm.prototype, "macAddressC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "product_id_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetCstm.prototype, "productIdC", void 0);
__decorate([
    typeorm_1.Column("int", { name: "idforradius_c", nullable: true }),
    __metadata("design:type", Number)
], ProduProduktetCstm.prototype, "idforradiusC", void 0);
ProduProduktetCstm = __decorate([
    typeorm_1.Entity("produ_produktet_cstm", { schema: "sugar" })
], ProduProduktetCstm);
exports.ProduProduktetCstm = ProduProduktetCstm;
//# sourceMappingURL=ProduProduktetCstm.js.map
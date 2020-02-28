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
let PaymePaymentsCstm = class PaymePaymentsCstm {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id_c", length: 36 }),
    __metadata("design:type", String)
], PaymePaymentsCstm.prototype, "idC", void 0);
__decorate([
    typeorm_1.Column("int", { name: "quantity_c", nullable: true }),
    __metadata("design:type", Number)
], PaymePaymentsCstm.prototype, "quantityC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "totalvalue_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], PaymePaymentsCstm.prototype, "totalvalueC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "datecloseservice_c",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], PaymePaymentsCstm.prototype, "datecloseserviceC", void 0);
PaymePaymentsCstm = __decorate([
    typeorm_1.Entity("payme_payments_cstm", { schema: "sugar" })
], PaymePaymentsCstm);
exports.PaymePaymentsCstm = PaymePaymentsCstm;
//# sourceMappingURL=PaymePaymentsCstm.js.map
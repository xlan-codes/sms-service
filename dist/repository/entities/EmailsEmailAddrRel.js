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
let EmailsEmailAddrRel = class EmailsEmailAddrRel {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], EmailsEmailAddrRel.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("char", { name: "email_id", length: 36 }),
    __metadata("design:type", String)
], EmailsEmailAddrRel.prototype, "emailId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "address_type", nullable: true, length: 4 }),
    __metadata("design:type", String)
], EmailsEmailAddrRel.prototype, "addressType", void 0);
__decorate([
    typeorm_1.Column("char", { name: "email_address_id", length: 36 }),
    __metadata("design:type", String)
], EmailsEmailAddrRel.prototype, "emailAddressId", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], EmailsEmailAddrRel.prototype, "deleted", void 0);
EmailsEmailAddrRel = __decorate([
    typeorm_1.Index("idx_eearl_email_id", ["emailId", "addressType"], {}),
    typeorm_1.Index("idx_eearl_address_id", ["emailAddressId"], {}),
    typeorm_1.Entity("emails_email_addr_rel", { schema: "sugar" })
], EmailsEmailAddrRel);
exports.EmailsEmailAddrRel = EmailsEmailAddrRel;
//# sourceMappingURL=EmailsEmailAddrRel.js.map
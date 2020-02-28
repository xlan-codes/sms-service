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
let ContactsCstm = class ContactsCstm {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id_c", length: 36 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "idC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "contactcategory_c",
        nullable: true,
        length: 100,
        default: () => "'empty'"
    }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "contactcategoryC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "middlename_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "middlenameC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "leaddescription_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "leaddescriptionC", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "postpaidautobilling_c",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], ContactsCstm.prototype, "postpaidautobillingC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contactid_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "contactidC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "passportid_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "passportidC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "paymenttype_c",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "paymenttypeC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "cashholdername_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "cashholdernameC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "creditcardtype_c",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "creditcardtypeC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "expirationdate_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "expirationdateC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "cardnumber_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "cardnumberC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "cvv_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "cvvC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "invoicenumber_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "invoicenumberC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "pospayment_c",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "pospaymentC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "bankname_c",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "banknameC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "companyname_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "companynameC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contactperson_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "contactpersonC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "nipt_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "niptC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "companysrepresentative_c",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "companysrepresentativeC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contact_id_c", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ContactsCstm.prototype, "contactIdC", void 0);
ContactsCstm = __decorate([
    typeorm_1.Entity("contacts_cstm", { schema: "sugar" })
], ContactsCstm);
exports.ContactsCstm = ContactsCstm;
//# sourceMappingURL=ContactsCstm.js.map
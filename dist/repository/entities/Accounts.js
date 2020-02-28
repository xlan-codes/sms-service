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
let Accounts = class Accounts {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Accounts.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 150 }),
    __metadata("design:type", String)
], Accounts.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Accounts.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Accounts.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Accounts.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Accounts.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Accounts.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Accounts.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Accounts.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "account_type", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Accounts.prototype, "accountType", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "industry", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Accounts.prototype, "industry", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "annual_revenue", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Accounts.prototype, "annualRevenue", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_fax", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Accounts.prototype, "phoneFax", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "billing_address_street",
        nullable: true,
        length: 150
    }),
    __metadata("design:type", String)
], Accounts.prototype, "billingAddressStreet", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "billing_address_city",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], Accounts.prototype, "billingAddressCity", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "billing_address_state",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], Accounts.prototype, "billingAddressState", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "billing_address_postalcode",
        nullable: true,
        length: 20
    }),
    __metadata("design:type", String)
], Accounts.prototype, "billingAddressPostalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "billing_address_country",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], Accounts.prototype, "billingAddressCountry", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "rating", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Accounts.prototype, "rating", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_office", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Accounts.prototype, "phoneOffice", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_alternate", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Accounts.prototype, "phoneAlternate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "website", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Accounts.prototype, "website", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ownership", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Accounts.prototype, "ownership", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "employees", nullable: true, length: 10 }),
    __metadata("design:type", String)
], Accounts.prototype, "employees", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ticker_symbol", nullable: true, length: 10 }),
    __metadata("design:type", String)
], Accounts.prototype, "tickerSymbol", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "shipping_address_street",
        nullable: true,
        length: 150
    }),
    __metadata("design:type", String)
], Accounts.prototype, "shippingAddressStreet", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "shipping_address_city",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], Accounts.prototype, "shippingAddressCity", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "shipping_address_state",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], Accounts.prototype, "shippingAddressState", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "shipping_address_postalcode",
        nullable: true,
        length: 20
    }),
    __metadata("design:type", String)
], Accounts.prototype, "shippingAddressPostalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "shipping_address_country",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], Accounts.prototype, "shippingAddressCountry", void 0);
__decorate([
    typeorm_1.Column("char", { name: "parent_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Accounts.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "sic_code", nullable: true, length: 10 }),
    __metadata("design:type", String)
], Accounts.prototype, "sicCode", void 0);
__decorate([
    typeorm_1.Column("char", { name: "campaign_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Accounts.prototype, "campaignId", void 0);
Accounts = __decorate([
    typeorm_1.Index("idx_accnt_id_del", ["id", "deleted"], {}),
    typeorm_1.Index("idx_accnt_name_del", ["name", "deleted"], {}),
    typeorm_1.Index("idx_accnt_assigned_del", ["deleted", "assignedUserId"], {}),
    typeorm_1.Index("idx_accnt_parent_id", ["parentId"], {}),
    typeorm_1.Entity("accounts", { schema: "sugar" })
], Accounts);
exports.Accounts = Accounts;
//# sourceMappingURL=Accounts.js.map
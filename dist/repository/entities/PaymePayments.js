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
let PaymePayments = class PaymePayments {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], PaymePayments.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], PaymePayments.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], PaymePayments.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], PaymePayments.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], PaymePayments.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], PaymePayments.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], PaymePayments.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], PaymePayments.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], PaymePayments.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "payme_payments_type",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], PaymePayments.prototype, "paymePaymentsType", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "lead_source", nullable: true, length: 50 }),
    __metadata("design:type", String)
], PaymePayments.prototype, "leadSource", void 0);
__decorate([
    typeorm_1.Column("double", { name: "amount", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], PaymePayments.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column("double", { name: "amount_usdollar", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], PaymePayments.prototype, "amountUsdollar", void 0);
__decorate([
    typeorm_1.Column("char", { name: "currency_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], PaymePayments.prototype, "currencyId", void 0);
__decorate([
    typeorm_1.Column("date", { name: "date_closed", nullable: true }),
    __metadata("design:type", String)
], PaymePayments.prototype, "dateClosed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "next_step", nullable: true, length: 100 }),
    __metadata("design:type", String)
], PaymePayments.prototype, "nextStep", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "sales_stage", nullable: true, length: 100 }),
    __metadata("design:type", String)
], PaymePayments.prototype, "salesStage", void 0);
__decorate([
    typeorm_1.Column("double", { name: "probability", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], PaymePayments.prototype, "probability", void 0);
__decorate([
    typeorm_1.Column("decimal", { name: "price", nullable: true, precision: 26, scale: 6 }),
    __metadata("design:type", String)
], PaymePayments.prototype, "price", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "produktet",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], PaymePayments.prototype, "produktet", void 0);
PaymePayments = __decorate([
    typeorm_1.Entity("payme_payments", { schema: "sugar" })
], PaymePayments);
exports.PaymePayments = PaymePayments;
//# sourceMappingURL=PaymePayments.js.map
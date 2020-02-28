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
let Opportunities = class Opportunities {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Opportunities.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Opportunities.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Opportunities.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Opportunities.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Opportunities.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Opportunities.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Opportunities.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Opportunities.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Opportunities.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "opportunity_type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunities.prototype, "opportunityType", void 0);
__decorate([
    typeorm_1.Column("char", { name: "campaign_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Opportunities.prototype, "campaignId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "lead_source", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Opportunities.prototype, "leadSource", void 0);
__decorate([
    typeorm_1.Column("double", { name: "amount", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], Opportunities.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column("double", { name: "amount_usdollar", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], Opportunities.prototype, "amountUsdollar", void 0);
__decorate([
    typeorm_1.Column("char", { name: "currency_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Opportunities.prototype, "currencyId", void 0);
__decorate([
    typeorm_1.Column("date", { name: "date_closed", nullable: true }),
    __metadata("design:type", String)
], Opportunities.prototype, "dateClosed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "next_step", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Opportunities.prototype, "nextStep", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "sales_stage", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Opportunities.prototype, "salesStage", void 0);
__decorate([
    typeorm_1.Column("double", { name: "probability", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], Opportunities.prototype, "probability", void 0);
Opportunities = __decorate([
    typeorm_1.Index("idx_opp_name", ["name"], {}),
    typeorm_1.Index("idx_opp_assigned", ["assignedUserId"], {}),
    typeorm_1.Index("idx_opp_id_deleted", ["id", "deleted"], {}),
    typeorm_1.Entity("opportunities", { schema: "sugar" })
], Opportunities);
exports.Opportunities = Opportunities;
//# sourceMappingURL=Opportunities.js.map
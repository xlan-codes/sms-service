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
let Campaigns = class Campaigns {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Campaigns.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Campaigns.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Campaigns.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Campaigns.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Campaigns.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Campaigns.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Campaigns.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Campaigns.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "tracker_key" }),
    __metadata("design:type", Number)
], Campaigns.prototype, "trackerKey", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "tracker_count",
        nullable: true,
        default: () => "'0'"
    }),
    __metadata("design:type", Number)
], Campaigns.prototype, "trackerCount", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "refer_url",
        nullable: true,
        length: 255,
        default: () => "'http://'"
    }),
    __metadata("design:type", String)
], Campaigns.prototype, "referUrl", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "tracker_text", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Campaigns.prototype, "trackerText", void 0);
__decorate([
    typeorm_1.Column("date", { name: "start_date", nullable: true }),
    __metadata("design:type", String)
], Campaigns.prototype, "startDate", void 0);
__decorate([
    typeorm_1.Column("date", { name: "end_date", nullable: true }),
    __metadata("design:type", String)
], Campaigns.prototype, "endDate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Campaigns.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("int", { name: "impressions", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], Campaigns.prototype, "impressions", void 0);
__decorate([
    typeorm_1.Column("char", { name: "currency_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Campaigns.prototype, "currencyId", void 0);
__decorate([
    typeorm_1.Column("double", { name: "budget", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], Campaigns.prototype, "budget", void 0);
__decorate([
    typeorm_1.Column("double", { name: "expected_cost", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], Campaigns.prototype, "expectedCost", void 0);
__decorate([
    typeorm_1.Column("double", { name: "actual_cost", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], Campaigns.prototype, "actualCost", void 0);
__decorate([
    typeorm_1.Column("double", { name: "expected_revenue", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], Campaigns.prototype, "expectedRevenue", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "campaign_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Campaigns.prototype, "campaignType", void 0);
__decorate([
    typeorm_1.Column("text", { name: "objective", nullable: true }),
    __metadata("design:type", String)
], Campaigns.prototype, "objective", void 0);
__decorate([
    typeorm_1.Column("text", { name: "content", nullable: true }),
    __metadata("design:type", String)
], Campaigns.prototype, "content", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "frequency", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Campaigns.prototype, "frequency", void 0);
Campaigns = __decorate([
    typeorm_1.Index("camp_auto_tracker_key", ["trackerKey"], {}),
    typeorm_1.Index("idx_campaign_name", ["name"], {}),
    typeorm_1.Entity("campaigns", { schema: "sugar" })
], Campaigns);
exports.Campaigns = Campaigns;
//# sourceMappingURL=Campaigns.js.map
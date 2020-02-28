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
let CampaignTrkrs = class CampaignTrkrs {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], CampaignTrkrs.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "tracker_name", nullable: true, length: 30 }),
    __metadata("design:type", String)
], CampaignTrkrs.prototype, "trackerName", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "tracker_url",
        nullable: true,
        length: 255,
        default: () => "'http://'"
    }),
    __metadata("design:type", String)
], CampaignTrkrs.prototype, "trackerUrl", void 0);
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "tracker_key" }),
    __metadata("design:type", Number)
], CampaignTrkrs.prototype, "trackerKey", void 0);
__decorate([
    typeorm_1.Column("char", { name: "campaign_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CampaignTrkrs.prototype, "campaignId", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], CampaignTrkrs.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], CampaignTrkrs.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CampaignTrkrs.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CampaignTrkrs.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "is_optout",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], CampaignTrkrs.prototype, "isOptout", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], CampaignTrkrs.prototype, "deleted", void 0);
CampaignTrkrs = __decorate([
    typeorm_1.Index("campaign_tracker_key_idx", ["trackerKey"], {}),
    typeorm_1.Entity("campaign_trkrs", { schema: "sugar" })
], CampaignTrkrs);
exports.CampaignTrkrs = CampaignTrkrs;
//# sourceMappingURL=CampaignTrkrs.js.map
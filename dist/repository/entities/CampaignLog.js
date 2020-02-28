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
let CampaignLog = class CampaignLog {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("char", { name: "campaign_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "campaignId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "target_tracker_key", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "targetTrackerKey", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "target_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "targetId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "target_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "targetType", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "activity_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "activityType", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "activity_date", nullable: true }),
    __metadata("design:type", Date)
], CampaignLog.prototype, "activityDate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "related_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "relatedId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "related_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "relatedType", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "archived",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], CampaignLog.prototype, "archived", void 0);
__decorate([
    typeorm_1.Column("int", { name: "hits", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], CampaignLog.prototype, "hits", void 0);
__decorate([
    typeorm_1.Column("char", { name: "list_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "listId", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], CampaignLog.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], CampaignLog.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "more_information", nullable: true, length: 100 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "moreInformation", void 0);
__decorate([
    typeorm_1.Column("char", { name: "marketing_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CampaignLog.prototype, "marketingId", void 0);
CampaignLog = __decorate([
    typeorm_1.Index("idx_camp_tracker", ["targetTrackerKey"], {}),
    typeorm_1.Index("idx_camp_campaign_id", ["campaignId"], {}),
    typeorm_1.Index("idx_camp_more_info", ["moreInformation"], {}),
    typeorm_1.Index("idx_target_id", ["targetId"], {}),
    typeorm_1.Index("idx_target_id_deleted", ["targetId", "deleted"], {}),
    typeorm_1.Entity("campaign_log", { schema: "sugar" })
], CampaignLog);
exports.CampaignLog = CampaignLog;
//# sourceMappingURL=CampaignLog.js.map
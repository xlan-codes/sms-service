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
let EmailMarketing = class EmailMarketing {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], EmailMarketing.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], EmailMarketing.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], EmailMarketing.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "from_name", nullable: true, length: 100 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "fromName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "from_addr", nullable: true, length: 100 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "fromAddr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "reply_to_name", nullable: true, length: 100 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "replyToName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "reply_to_addr", nullable: true, length: 100 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "replyToAddr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "inbound_email_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "inboundEmailId", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_start", nullable: true }),
    __metadata("design:type", Date)
], EmailMarketing.prototype, "dateStart", void 0);
__decorate([
    typeorm_1.Column("char", { name: "template_id", length: 36 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "templateId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("char", { name: "campaign_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], EmailMarketing.prototype, "campaignId", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "all_prospect_lists",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], EmailMarketing.prototype, "allProspectLists", void 0);
EmailMarketing = __decorate([
    typeorm_1.Index("idx_emmkt_name", ["name"], {}),
    typeorm_1.Index("idx_emmkit_del", ["deleted"], {}),
    typeorm_1.Entity("email_marketing", { schema: "sugar" })
], EmailMarketing);
exports.EmailMarketing = EmailMarketing;
//# sourceMappingURL=EmailMarketing.js.map
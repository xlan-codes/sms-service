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
let Emailman = class Emailman {
};
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Emailman.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Emailman.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emailman.prototype, "userId", void 0);
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Emailman.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("char", { name: "campaign_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emailman.prototype, "campaignId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "marketing_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emailman.prototype, "marketingId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "list_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emailman.prototype, "listId", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "send_date_time", nullable: true }),
    __metadata("design:type", Date)
], Emailman.prototype, "sendDateTime", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emailman.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "in_queue",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Emailman.prototype, "inQueue", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "in_queue_date", nullable: true }),
    __metadata("design:type", Date)
], Emailman.prototype, "inQueueDate", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "send_attempts",
        nullable: true,
        default: () => "'0'"
    }),
    __metadata("design:type", Number)
], Emailman.prototype, "sendAttempts", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Emailman.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "related_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emailman.prototype, "relatedId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "related_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Emailman.prototype, "relatedType", void 0);
Emailman = __decorate([
    typeorm_1.Index("idx_eman_list", ["listId", "userId", "deleted"], {}),
    typeorm_1.Index("idx_eman_campaign_id", ["campaignId"], {}),
    typeorm_1.Index("idx_eman_relid_reltype_id", ["relatedId", "relatedType", "campaignId"], {}),
    typeorm_1.Entity("emailman", { schema: "sugar" })
], Emailman);
exports.Emailman = Emailman;
//# sourceMappingURL=Emailman.js.map
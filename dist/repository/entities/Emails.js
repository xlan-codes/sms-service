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
let Emails = class Emails {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Emails.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Emails.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Emails.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emails.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emails.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emails.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], Emails.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_sent", nullable: true }),
    __metadata("design:type", Date)
], Emails.prototype, "dateSent", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "message_id", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Emails.prototype, "messageId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Emails.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Emails.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Emails.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "flagged", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], Emails.prototype, "flagged", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "reply_to_status", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], Emails.prototype, "replyToStatus", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "intent",
        nullable: true,
        length: 100,
        default: () => "'pick'"
    }),
    __metadata("design:type", String)
], Emails.prototype, "intent", void 0);
__decorate([
    typeorm_1.Column("char", { name: "mailbox_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emails.prototype, "mailboxId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "parent_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Emails.prototype, "parentType", void 0);
__decorate([
    typeorm_1.Column("char", { name: "parent_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Emails.prototype, "parentId", void 0);
Emails = __decorate([
    typeorm_1.Index("idx_email_name", ["name"], {}),
    typeorm_1.Index("idx_message_id", ["messageId"], {}),
    typeorm_1.Index("idx_email_parent_id", ["parentId"], {}),
    typeorm_1.Index("idx_email_assigned", ["assignedUserId", "type", "status"], {}),
    typeorm_1.Entity("emails", { schema: "sugar" })
], Emails);
exports.Emails = Emails;
//# sourceMappingURL=Emails.js.map
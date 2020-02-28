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
let InboundEmail = class InboundEmail {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], InboundEmail.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], InboundEmail.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], InboundEmail.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "status",
        nullable: true,
        length: 100,
        default: () => "'Active'"
    }),
    __metadata("design:type", String)
], InboundEmail.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "server_url", nullable: true, length: 100 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "serverUrl", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "email_user", nullable: true, length: 100 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "emailUser", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "email_password", nullable: true, length: 100 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "emailPassword", void 0);
__decorate([
    typeorm_1.Column("int", { name: "port", nullable: true }),
    __metadata("design:type", Number)
], InboundEmail.prototype, "port", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "service", nullable: true, length: 50 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "service", void 0);
__decorate([
    typeorm_1.Column("text", { name: "mailbox", nullable: true }),
    __metadata("design:type", String)
], InboundEmail.prototype, "mailbox", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "delete_seen",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], InboundEmail.prototype, "deleteSeen", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "mailbox_type", nullable: true, length: 10 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "mailboxType", void 0);
__decorate([
    typeorm_1.Column("char", { name: "template_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "templateId", void 0);
__decorate([
    typeorm_1.Column("text", { name: "stored_options", nullable: true }),
    __metadata("design:type", String)
], InboundEmail.prototype, "storedOptions", void 0);
__decorate([
    typeorm_1.Column("char", { name: "group_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "groupId", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "is_personal",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], InboundEmail.prototype, "isPersonal", void 0);
__decorate([
    typeorm_1.Column("char", { name: "groupfolder_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], InboundEmail.prototype, "groupfolderId", void 0);
InboundEmail = __decorate([
    typeorm_1.Entity("inbound_email", { schema: "sugar" })
], InboundEmail);
exports.InboundEmail = InboundEmail;
//# sourceMappingURL=InboundEmail.js.map
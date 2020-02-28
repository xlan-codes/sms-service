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
let EmailCache = class EmailCache {
};
__decorate([
    typeorm_1.Column("char", { name: "ie_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], EmailCache.prototype, "ieId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "mbox", nullable: true, length: 60 }),
    __metadata("design:type", String)
], EmailCache.prototype, "mbox", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "subject", nullable: true, length: 255 }),
    __metadata("design:type", String)
], EmailCache.prototype, "subject", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fromaddr", nullable: true, length: 100 }),
    __metadata("design:type", String)
], EmailCache.prototype, "fromaddr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "toaddr", nullable: true, length: 255 }),
    __metadata("design:type", String)
], EmailCache.prototype, "toaddr", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "senddate", nullable: true }),
    __metadata("design:type", Date)
], EmailCache.prototype, "senddate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "message_id", nullable: true, length: 255 }),
    __metadata("design:type", String)
], EmailCache.prototype, "messageId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "mailsize", nullable: true, unsigned: true }),
    __metadata("design:type", Number)
], EmailCache.prototype, "mailsize", void 0);
__decorate([
    typeorm_1.Column("int", { name: "imap_uid", nullable: true, unsigned: true }),
    __metadata("design:type", Number)
], EmailCache.prototype, "imapUid", void 0);
__decorate([
    typeorm_1.Column("int", { name: "msgno", nullable: true, unsigned: true }),
    __metadata("design:type", Number)
], EmailCache.prototype, "msgno", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "recent", nullable: true }),
    __metadata("design:type", Number)
], EmailCache.prototype, "recent", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "flagged", nullable: true }),
    __metadata("design:type", Number)
], EmailCache.prototype, "flagged", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "answered", nullable: true }),
    __metadata("design:type", Number)
], EmailCache.prototype, "answered", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true }),
    __metadata("design:type", Number)
], EmailCache.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "seen", nullable: true }),
    __metadata("design:type", Number)
], EmailCache.prototype, "seen", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "draft", nullable: true }),
    __metadata("design:type", Number)
], EmailCache.prototype, "draft", void 0);
EmailCache = __decorate([
    typeorm_1.Index("idx_ie_id", ["ieId"], {}),
    typeorm_1.Index("idx_mail_date", ["ieId", "mbox", "senddate"], {}),
    typeorm_1.Index("idx_mail_from", ["ieId", "mbox", "fromaddr"], {}),
    typeorm_1.Index("idx_mail_subj", ["subject"], {}),
    typeorm_1.Index("idx_mail_to", ["toaddr"], {}),
    typeorm_1.Entity("email_cache", { schema: "sugar" })
], EmailCache);
exports.EmailCache = EmailCache;
//# sourceMappingURL=EmailCache.js.map
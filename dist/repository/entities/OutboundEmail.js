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
let OutboundEmail = class OutboundEmail {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], OutboundEmail.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 50 }),
    __metadata("design:type", String)
], OutboundEmail.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "type",
        nullable: true,
        length: 15,
        default: () => "'user'"
    }),
    __metadata("design:type", String)
], OutboundEmail.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("char", { name: "user_id", length: 36 }),
    __metadata("design:type", String)
], OutboundEmail.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "mail_sendtype",
        nullable: true,
        length: 8,
        default: () => "'smtp'"
    }),
    __metadata("design:type", String)
], OutboundEmail.prototype, "mailSendtype", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "mail_smtptype",
        nullable: true,
        length: 20,
        default: () => "'other'"
    }),
    __metadata("design:type", String)
], OutboundEmail.prototype, "mailSmtptype", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "mail_smtpserver", nullable: true, length: 100 }),
    __metadata("design:type", String)
], OutboundEmail.prototype, "mailSmtpserver", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "mail_smtpport",
        nullable: true,
        default: () => "'0'"
    }),
    __metadata("design:type", Number)
], OutboundEmail.prototype, "mailSmtpport", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "mail_smtpuser", nullable: true, length: 100 }),
    __metadata("design:type", String)
], OutboundEmail.prototype, "mailSmtpuser", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "mail_smtppass", nullable: true, length: 100 }),
    __metadata("design:type", String)
], OutboundEmail.prototype, "mailSmtppass", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "mail_smtpauth_req",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], OutboundEmail.prototype, "mailSmtpauthReq", void 0);
__decorate([
    typeorm_1.Column("int", { name: "mail_smtpssl", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], OutboundEmail.prototype, "mailSmtpssl", void 0);
OutboundEmail = __decorate([
    typeorm_1.Index("oe_user_id_idx", ["id", "userId"], {}),
    typeorm_1.Entity("outbound_email", { schema: "sugar" })
], OutboundEmail);
exports.OutboundEmail = OutboundEmail;
//# sourceMappingURL=OutboundEmail.js.map
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
let EmailsText = class EmailsText {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "email_id", length: 36 }),
    __metadata("design:type", String)
], EmailsText.prototype, "emailId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "from_addr", nullable: true, length: 255 }),
    __metadata("design:type", String)
], EmailsText.prototype, "fromAddr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "reply_to_addr", nullable: true, length: 255 }),
    __metadata("design:type", String)
], EmailsText.prototype, "replyToAddr", void 0);
__decorate([
    typeorm_1.Column("text", { name: "to_addrs", nullable: true }),
    __metadata("design:type", String)
], EmailsText.prototype, "toAddrs", void 0);
__decorate([
    typeorm_1.Column("text", { name: "cc_addrs", nullable: true }),
    __metadata("design:type", String)
], EmailsText.prototype, "ccAddrs", void 0);
__decorate([
    typeorm_1.Column("text", { name: "bcc_addrs", nullable: true }),
    __metadata("design:type", String)
], EmailsText.prototype, "bccAddrs", void 0);
__decorate([
    typeorm_1.Column("longtext", { name: "description", nullable: true }),
    __metadata("design:type", String)
], EmailsText.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("longtext", { name: "description_html", nullable: true }),
    __metadata("design:type", String)
], EmailsText.prototype, "descriptionHtml", void 0);
__decorate([
    typeorm_1.Column("longtext", { name: "raw_source", nullable: true }),
    __metadata("design:type", String)
], EmailsText.prototype, "rawSource", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], EmailsText.prototype, "deleted", void 0);
EmailsText = __decorate([
    typeorm_1.Index("emails_textfromaddr", ["fromAddr"], {}),
    typeorm_1.Entity("emails_text", { schema: "sugar" })
], EmailsText);
exports.EmailsText = EmailsText;
//# sourceMappingURL=EmailsText.js.map
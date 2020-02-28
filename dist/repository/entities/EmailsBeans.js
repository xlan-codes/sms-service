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
let EmailsBeans = class EmailsBeans {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], EmailsBeans.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("char", { name: "email_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], EmailsBeans.prototype, "emailId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "bean_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], EmailsBeans.prototype, "beanId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "bean_module", nullable: true, length: 100 }),
    __metadata("design:type", String)
], EmailsBeans.prototype, "beanModule", void 0);
__decorate([
    typeorm_1.Column("text", { name: "campaign_data", nullable: true }),
    __metadata("design:type", String)
], EmailsBeans.prototype, "campaignData", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], EmailsBeans.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], EmailsBeans.prototype, "deleted", void 0);
EmailsBeans = __decorate([
    typeorm_1.Index("idx_emails_beans_bean_id", ["beanId"], {}),
    typeorm_1.Index("idx_emails_beans_email_bean", ["emailId", "beanId", "deleted"], {}),
    typeorm_1.Entity("emails_beans", { schema: "sugar" })
], EmailsBeans);
exports.EmailsBeans = EmailsBeans;
//# sourceMappingURL=EmailsBeans.js.map
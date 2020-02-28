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
let EmailTemplates = class EmailTemplates {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], EmailTemplates.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], EmailTemplates.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "published", nullable: true, length: 3 }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "published", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "subject", nullable: true, length: 255 }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "subject", void 0);
__decorate([
    typeorm_1.Column("text", { name: "body", nullable: true }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "body", void 0);
__decorate([
    typeorm_1.Column("text", { name: "body_html", nullable: true }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "bodyHtml", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], EmailTemplates.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "text_only", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], EmailTemplates.prototype, "textOnly", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], EmailTemplates.prototype, "type", void 0);
EmailTemplates = __decorate([
    typeorm_1.Index("idx_email_template_name", ["name"], {}),
    typeorm_1.Entity("email_templates", { schema: "sugar" })
], EmailTemplates);
exports.EmailTemplates = EmailTemplates;
//# sourceMappingURL=EmailTemplates.js.map
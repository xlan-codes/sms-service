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
let Documents = class Documents {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Documents.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Documents.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Documents.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Documents.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Documents.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Documents.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Documents.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Documents.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "document_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Documents.prototype, "documentName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "doc_id", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Documents.prototype, "docId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "doc_type",
        nullable: true,
        length: 100,
        default: () => "'Sugar'"
    }),
    __metadata("design:type", String)
], Documents.prototype, "docType", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "doc_url", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Documents.prototype, "docUrl", void 0);
__decorate([
    typeorm_1.Column("date", { name: "active_date", nullable: true }),
    __metadata("design:type", String)
], Documents.prototype, "activeDate", void 0);
__decorate([
    typeorm_1.Column("date", { name: "exp_date", nullable: true }),
    __metadata("design:type", String)
], Documents.prototype, "expDate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "category_id", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Documents.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "subcategory_id", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Documents.prototype, "subcategoryId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status_id", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Documents.prototype, "statusId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "document_revision_id",
        nullable: true,
        length: 36
    }),
    __metadata("design:type", String)
], Documents.prototype, "documentRevisionId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "related_doc_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Documents.prototype, "relatedDocId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "related_doc_rev_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Documents.prototype, "relatedDocRevId", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "is_template",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Documents.prototype, "isTemplate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "template_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Documents.prototype, "templateType", void 0);
Documents = __decorate([
    typeorm_1.Index("idx_doc_cat", ["categoryId", "subcategoryId"], {}),
    typeorm_1.Entity("documents", { schema: "sugar" })
], Documents);
exports.Documents = Documents;
//# sourceMappingURL=Documents.js.map
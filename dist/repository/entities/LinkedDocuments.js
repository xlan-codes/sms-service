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
let LinkedDocuments = class LinkedDocuments {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], LinkedDocuments.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "parent_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], LinkedDocuments.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "parent_type", nullable: true, length: 25 }),
    __metadata("design:type", String)
], LinkedDocuments.prototype, "parentType", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "document_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], LinkedDocuments.prototype, "documentId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "document_revision_id",
        nullable: true,
        length: 36
    }),
    __metadata("design:type", String)
], LinkedDocuments.prototype, "documentRevisionId", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], LinkedDocuments.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], LinkedDocuments.prototype, "deleted", void 0);
LinkedDocuments = __decorate([
    typeorm_1.Index("idx_parent_document", ["parentType", "parentId", "documentId"], {}),
    typeorm_1.Entity("linked_documents", { schema: "sugar" })
], LinkedDocuments);
exports.LinkedDocuments = LinkedDocuments;
//# sourceMappingURL=LinkedDocuments.js.map
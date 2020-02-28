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
let Notes = class Notes {
};
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Notes.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Notes.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Notes.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Notes.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Notes.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Notes.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Notes.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "file_mime_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Notes.prototype, "fileMimeType", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "filename", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Notes.prototype, "filename", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "parent_type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Notes.prototype, "parentType", void 0);
__decorate([
    typeorm_1.Column("char", { name: "parent_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Notes.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "contact_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Notes.prototype, "contactId", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "portal_flag", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], Notes.prototype, "portalFlag", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "embed_flag",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Notes.prototype, "embedFlag", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Notes.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Notes.prototype, "deleted", void 0);
Notes = __decorate([
    typeorm_1.Index("idx_note_name", ["name"], {}),
    typeorm_1.Index("idx_notes_parent", ["parentId", "parentType"], {}),
    typeorm_1.Index("idx_note_contact", ["contactId"], {}),
    typeorm_1.Index("idx_notes_assigned_del", ["deleted", "assignedUserId"], {}),
    typeorm_1.Entity("notes", { schema: "sugar" })
], Notes);
exports.Notes = Notes;
//# sourceMappingURL=Notes.js.map
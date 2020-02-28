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
let ProspectLists = class ProspectLists {
};
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProspectLists.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ProspectLists.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ProspectLists.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "list_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], ProspectLists.prototype, "listType", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], ProspectLists.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], ProspectLists.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProspectLists.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProspectLists.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], ProspectLists.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], ProspectLists.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "domain_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProspectLists.prototype, "domainName", void 0);
ProspectLists = __decorate([
    typeorm_1.Index("idx_prospect_list_name", ["name"], {}),
    typeorm_1.Entity("prospect_lists", { schema: "sugar" })
], ProspectLists);
exports.ProspectLists = ProspectLists;
//# sourceMappingURL=ProspectLists.js.map
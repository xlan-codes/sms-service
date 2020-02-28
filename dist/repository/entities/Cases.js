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
let Cases = class Cases {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Cases.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Cases.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Cases.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Cases.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Cases.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Cases.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Cases.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Cases.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Cases.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "case_number" }),
    __metadata("design:type", Number)
], Cases.prototype, "caseNumber", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Cases.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Cases.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "priority", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Cases.prototype, "priority", void 0);
__decorate([
    typeorm_1.Column("text", { name: "resolution", nullable: true }),
    __metadata("design:type", String)
], Cases.prototype, "resolution", void 0);
__decorate([
    typeorm_1.Column("text", { name: "work_log", nullable: true }),
    __metadata("design:type", String)
], Cases.prototype, "workLog", void 0);
__decorate([
    typeorm_1.Column("char", { name: "account_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Cases.prototype, "accountId", void 0);
Cases = __decorate([
    typeorm_1.Index("casesnumk", ["caseNumber"], { unique: true }),
    typeorm_1.Index("case_number", ["caseNumber"], {}),
    typeorm_1.Index("idx_case_name", ["name"], {}),
    typeorm_1.Index("idx_account_id", ["accountId"], {}),
    typeorm_1.Index("idx_cases_stat_del", ["assignedUserId", "status", "deleted"], {}),
    typeorm_1.Entity("cases", { schema: "sugar" })
], Cases);
exports.Cases = Cases;
//# sourceMappingURL=Cases.js.map
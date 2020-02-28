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
let Bugs = class Bugs {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Bugs.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Bugs.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Bugs.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Bugs.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Bugs.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Bugs.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Bugs.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Bugs.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Bugs.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "bug_number" }),
    __metadata("design:type", Number)
], Bugs.prototype, "bugNumber", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Bugs.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Bugs.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "priority", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Bugs.prototype, "priority", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "resolution", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Bugs.prototype, "resolution", void 0);
__decorate([
    typeorm_1.Column("text", { name: "work_log", nullable: true }),
    __metadata("design:type", String)
], Bugs.prototype, "workLog", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "found_in_release", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Bugs.prototype, "foundInRelease", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fixed_in_release", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Bugs.prototype, "fixedInRelease", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "source", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Bugs.prototype, "source", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "product_category", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Bugs.prototype, "productCategory", void 0);
Bugs = __decorate([
    typeorm_1.Index("bugsnumk", ["bugNumber"], { unique: true }),
    typeorm_1.Index("bug_number", ["bugNumber"], {}),
    typeorm_1.Index("idx_bug_name", ["name"], {}),
    typeorm_1.Index("idx_bugs_assigned_user", ["assignedUserId"], {}),
    typeorm_1.Entity("bugs", { schema: "sugar" })
], Bugs);
exports.Bugs = Bugs;
//# sourceMappingURL=Bugs.js.map
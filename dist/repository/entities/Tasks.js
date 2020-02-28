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
let Tasks = class Tasks {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Tasks.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Tasks.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Tasks.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Tasks.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Tasks.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Tasks.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Tasks.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Tasks.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Tasks.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "status",
        nullable: true,
        length: 100,
        default: () => "'Not Started'"
    }),
    __metadata("design:type", String)
], Tasks.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "date_due_flag",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Tasks.prototype, "dateDueFlag", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_due", nullable: true }),
    __metadata("design:type", Date)
], Tasks.prototype, "dateDue", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "date_start_flag",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Tasks.prototype, "dateStartFlag", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_start", nullable: true }),
    __metadata("design:type", Date)
], Tasks.prototype, "dateStart", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "parent_type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tasks.prototype, "parentType", void 0);
__decorate([
    typeorm_1.Column("char", { name: "parent_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Tasks.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "contact_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Tasks.prototype, "contactId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "priority", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Tasks.prototype, "priority", void 0);
Tasks = __decorate([
    typeorm_1.Index("idx_tsk_name", ["name"], {}),
    typeorm_1.Index("idx_task_con_del", ["contactId", "deleted"], {}),
    typeorm_1.Index("idx_task_par_del", ["parentId", "parentType", "deleted"], {}),
    typeorm_1.Index("idx_task_assigned", ["assignedUserId"], {}),
    typeorm_1.Index("idx_task_status", ["status"], {}),
    typeorm_1.Entity("tasks", { schema: "sugar" })
], Tasks);
exports.Tasks = Tasks;
//# sourceMappingURL=Tasks.js.map
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
let ProjectTask = class ProjectTask {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ProjectTask.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], ProjectTask.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], ProjectTask.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "project_id", length: 36 }),
    __metadata("design:type", String)
], ProjectTask.prototype, "projectId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "project_task_id", nullable: true }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "projectTaskId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ProjectTask.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProjectTask.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], ProjectTask.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("text", { name: "predecessors", nullable: true }),
    __metadata("design:type", String)
], ProjectTask.prototype, "predecessors", void 0);
__decorate([
    typeorm_1.Column("date", { name: "date_start", nullable: true }),
    __metadata("design:type", String)
], ProjectTask.prototype, "dateStart", void 0);
__decorate([
    typeorm_1.Column("int", { name: "time_start", nullable: true }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "timeStart", void 0);
__decorate([
    typeorm_1.Column("int", { name: "time_finish", nullable: true }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "timeFinish", void 0);
__decorate([
    typeorm_1.Column("date", { name: "date_finish", nullable: true }),
    __metadata("design:type", String)
], ProjectTask.prototype, "dateFinish", void 0);
__decorate([
    typeorm_1.Column("int", { name: "duration", nullable: true }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "duration", void 0);
__decorate([
    typeorm_1.Column("text", { name: "duration_unit", nullable: true }),
    __metadata("design:type", String)
], ProjectTask.prototype, "durationUnit", void 0);
__decorate([
    typeorm_1.Column("int", { name: "actual_duration", nullable: true }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "actualDuration", void 0);
__decorate([
    typeorm_1.Column("int", { name: "percent_complete", nullable: true }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "percentComplete", void 0);
__decorate([
    typeorm_1.Column("date", { name: "date_due", nullable: true }),
    __metadata("design:type", String)
], ProjectTask.prototype, "dateDue", void 0);
__decorate([
    typeorm_1.Column("time", { name: "time_due", nullable: true }),
    __metadata("design:type", String)
], ProjectTask.prototype, "timeDue", void 0);
__decorate([
    typeorm_1.Column("int", { name: "parent_task_id", nullable: true }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "parentTaskId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProjectTask.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProjectTask.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "priority", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProjectTask.prototype, "priority", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProjectTask.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "milestone_flag", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], ProjectTask.prototype, "milestoneFlag", void 0);
__decorate([
    typeorm_1.Column("int", { name: "order_number", nullable: true, default: () => "'1'" }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "orderNumber", void 0);
__decorate([
    typeorm_1.Column("int", { name: "task_number", nullable: true }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "taskNumber", void 0);
__decorate([
    typeorm_1.Column("int", { name: "estimated_effort", nullable: true }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "estimatedEffort", void 0);
__decorate([
    typeorm_1.Column("int", { name: "actual_effort", nullable: true }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "actualEffort", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], ProjectTask.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "utilization",
        nullable: true,
        default: () => "'100'"
    }),
    __metadata("design:type", Number)
], ProjectTask.prototype, "utilization", void 0);
ProjectTask = __decorate([
    typeorm_1.Entity("project_task", { schema: "sugar" })
], ProjectTask);
exports.ProjectTask = ProjectTask;
//# sourceMappingURL=ProjectTask.js.map
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
let Calls = class Calls {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Calls.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Calls.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Calls.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Calls.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Calls.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Calls.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Calls.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Calls.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Calls.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "duration_hours", nullable: true }),
    __metadata("design:type", Number)
], Calls.prototype, "durationHours", void 0);
__decorate([
    typeorm_1.Column("int", { name: "duration_minutes", nullable: true }),
    __metadata("design:type", Number)
], Calls.prototype, "durationMinutes", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_start", nullable: true }),
    __metadata("design:type", Date)
], Calls.prototype, "dateStart", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_end", nullable: true }),
    __metadata("design:type", Date)
], Calls.prototype, "dateEnd", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "parent_type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Calls.prototype, "parentType", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "status",
        nullable: true,
        length: 100,
        default: () => "'Planned'"
    }),
    __metadata("design:type", String)
], Calls.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "direction", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Calls.prototype, "direction", void 0);
__decorate([
    typeorm_1.Column("char", { name: "parent_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Calls.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "reminder_time",
        nullable: true,
        default: () => "'-1'"
    }),
    __metadata("design:type", Number)
], Calls.prototype, "reminderTime", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "email_reminder_time",
        nullable: true,
        default: () => "'-1'"
    }),
    __metadata("design:type", Number)
], Calls.prototype, "emailReminderTime", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "email_reminder_sent",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Calls.prototype, "emailReminderSent", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "outlook_id", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Calls.prototype, "outlookId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "repeat_type", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Calls.prototype, "repeatType", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "repeat_interval",
        nullable: true,
        default: () => "'1'"
    }),
    __metadata("design:type", Number)
], Calls.prototype, "repeatInterval", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "repeat_dow", nullable: true, length: 7 }),
    __metadata("design:type", String)
], Calls.prototype, "repeatDow", void 0);
__decorate([
    typeorm_1.Column("date", { name: "repeat_until", nullable: true }),
    __metadata("design:type", String)
], Calls.prototype, "repeatUntil", void 0);
__decorate([
    typeorm_1.Column("int", { name: "repeat_count", nullable: true }),
    __metadata("design:type", Number)
], Calls.prototype, "repeatCount", void 0);
__decorate([
    typeorm_1.Column("char", { name: "repeat_parent_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Calls.prototype, "repeatParentId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "recurring_source", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Calls.prototype, "recurringSource", void 0);
Calls = __decorate([
    typeorm_1.Index("idx_call_name", ["name"], {}),
    typeorm_1.Index("idx_status", ["status"], {}),
    typeorm_1.Index("idx_calls_date_start", ["dateStart"], {}),
    typeorm_1.Index("idx_calls_par_del", ["parentId", "parentType", "deleted"], {}),
    typeorm_1.Index("idx_calls_assigned_del", ["deleted", "assignedUserId"], {}),
    typeorm_1.Entity("calls", { schema: "sugar" })
], Calls);
exports.Calls = Calls;
//# sourceMappingURL=Calls.js.map
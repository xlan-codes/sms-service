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
let Meetings = class Meetings {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Meetings.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Meetings.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Meetings.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Meetings.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Meetings.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Meetings.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Meetings.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Meetings.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Meetings.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "location", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Meetings.prototype, "location", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "password", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Meetings.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "join_url", nullable: true, length: 200 }),
    __metadata("design:type", String)
], Meetings.prototype, "joinUrl", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "host_url", nullable: true, length: 400 }),
    __metadata("design:type", String)
], Meetings.prototype, "hostUrl", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "displayed_url", nullable: true, length: 400 }),
    __metadata("design:type", String)
], Meetings.prototype, "displayedUrl", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "creator", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Meetings.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "external_id", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Meetings.prototype, "externalId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "duration_hours", nullable: true }),
    __metadata("design:type", Number)
], Meetings.prototype, "durationHours", void 0);
__decorate([
    typeorm_1.Column("int", { name: "duration_minutes", nullable: true }),
    __metadata("design:type", Number)
], Meetings.prototype, "durationMinutes", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_start", nullable: true }),
    __metadata("design:type", Date)
], Meetings.prototype, "dateStart", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_end", nullable: true }),
    __metadata("design:type", Date)
], Meetings.prototype, "dateEnd", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "parent_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Meetings.prototype, "parentType", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "status",
        nullable: true,
        length: 100,
        default: () => "'Planned'"
    }),
    __metadata("design:type", String)
], Meetings.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "type",
        nullable: true,
        length: 255,
        default: () => "'Sugar'"
    }),
    __metadata("design:type", String)
], Meetings.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("char", { name: "parent_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Meetings.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "reminder_time",
        nullable: true,
        default: () => "'-1'"
    }),
    __metadata("design:type", Number)
], Meetings.prototype, "reminderTime", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "email_reminder_time",
        nullable: true,
        default: () => "'-1'"
    }),
    __metadata("design:type", Number)
], Meetings.prototype, "emailReminderTime", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "email_reminder_sent",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Meetings.prototype, "emailReminderSent", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "outlook_id", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Meetings.prototype, "outlookId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "sequence", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], Meetings.prototype, "sequence", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "repeat_type", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Meetings.prototype, "repeatType", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "repeat_interval",
        nullable: true,
        default: () => "'1'"
    }),
    __metadata("design:type", Number)
], Meetings.prototype, "repeatInterval", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "repeat_dow", nullable: true, length: 7 }),
    __metadata("design:type", String)
], Meetings.prototype, "repeatDow", void 0);
__decorate([
    typeorm_1.Column("date", { name: "repeat_until", nullable: true }),
    __metadata("design:type", String)
], Meetings.prototype, "repeatUntil", void 0);
__decorate([
    typeorm_1.Column("int", { name: "repeat_count", nullable: true }),
    __metadata("design:type", Number)
], Meetings.prototype, "repeatCount", void 0);
__decorate([
    typeorm_1.Column("char", { name: "repeat_parent_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Meetings.prototype, "repeatParentId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "recurring_source", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Meetings.prototype, "recurringSource", void 0);
Meetings = __decorate([
    typeorm_1.Index("idx_mtg_name", ["name"], {}),
    typeorm_1.Index("idx_meet_par_del", ["parentId", "parentType", "deleted"], {}),
    typeorm_1.Index("idx_meet_stat_del", ["assignedUserId", "status", "deleted"], {}),
    typeorm_1.Index("idx_meet_date_start", ["dateStart"], {}),
    typeorm_1.Entity("meetings", { schema: "sugar" })
], Meetings);
exports.Meetings = Meetings;
//# sourceMappingURL=Meetings.js.map
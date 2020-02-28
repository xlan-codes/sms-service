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
let JobQueue = class JobQueue {
};
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], JobQueue.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], JobQueue.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], JobQueue.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], JobQueue.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], JobQueue.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], JobQueue.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "scheduler_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], JobQueue.prototype, "schedulerId", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "execute_time", nullable: true }),
    __metadata("design:type", Date)
], JobQueue.prototype, "executeTime", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 20 }),
    __metadata("design:type", String)
], JobQueue.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "resolution", nullable: true, length: 20 }),
    __metadata("design:type", String)
], JobQueue.prototype, "resolution", void 0);
__decorate([
    typeorm_1.Column("text", { name: "message", nullable: true }),
    __metadata("design:type", String)
], JobQueue.prototype, "message", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "target", nullable: true, length: 255 }),
    __metadata("design:type", String)
], JobQueue.prototype, "target", void 0);
__decorate([
    typeorm_1.Column("text", { name: "data", nullable: true }),
    __metadata("design:type", String)
], JobQueue.prototype, "data", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "requeue",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], JobQueue.prototype, "requeue", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "retry_count", nullable: true }),
    __metadata("design:type", Number)
], JobQueue.prototype, "retryCount", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "failure_count", nullable: true }),
    __metadata("design:type", Number)
], JobQueue.prototype, "failureCount", void 0);
__decorate([
    typeorm_1.Column("int", { name: "job_delay", nullable: true }),
    __metadata("design:type", Number)
], JobQueue.prototype, "jobDelay", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "client", nullable: true, length: 255 }),
    __metadata("design:type", String)
], JobQueue.prototype, "client", void 0);
__decorate([
    typeorm_1.Column("int", { name: "percent_complete", nullable: true }),
    __metadata("design:type", Number)
], JobQueue.prototype, "percentComplete", void 0);
JobQueue = __decorate([
    typeorm_1.Index("idx_status_scheduler", ["status", "schedulerId"], {}),
    typeorm_1.Index("idx_status_time", ["status", "executeTime", "dateEntered"], {}),
    typeorm_1.Index("idx_status_entered", ["status", "dateEntered"], {}),
    typeorm_1.Index("idx_status_modified", ["status", "dateModified"], {}),
    typeorm_1.Entity("job_queue", { schema: "sugar" })
], JobQueue);
exports.JobQueue = JobQueue;
//# sourceMappingURL=JobQueue.js.map
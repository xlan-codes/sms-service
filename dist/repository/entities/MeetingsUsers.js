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
let MeetingsUsers = class MeetingsUsers {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], MeetingsUsers.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "meeting_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], MeetingsUsers.prototype, "meetingId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], MeetingsUsers.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "required",
        nullable: true,
        length: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", String)
], MeetingsUsers.prototype, "required", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "accept_status",
        nullable: true,
        length: 25,
        default: () => "'none'"
    }),
    __metadata("design:type", String)
], MeetingsUsers.prototype, "acceptStatus", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], MeetingsUsers.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], MeetingsUsers.prototype, "deleted", void 0);
MeetingsUsers = __decorate([
    typeorm_1.Index("idx_usr_mtg_mtg", ["meetingId"], {}),
    typeorm_1.Index("idx_usr_mtg_usr", ["userId"], {}),
    typeorm_1.Index("idx_meeting_users", ["meetingId", "userId"], {}),
    typeorm_1.Entity("meetings_users", { schema: "sugar" })
], MeetingsUsers);
exports.MeetingsUsers = MeetingsUsers;
//# sourceMappingURL=MeetingsUsers.js.map
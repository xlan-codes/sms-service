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
let CallsUsers = class CallsUsers {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], CallsUsers.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "call_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CallsUsers.prototype, "callId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CallsUsers.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "required",
        nullable: true,
        length: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", String)
], CallsUsers.prototype, "required", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "accept_status",
        nullable: true,
        length: 25,
        default: () => "'none'"
    }),
    __metadata("design:type", String)
], CallsUsers.prototype, "acceptStatus", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], CallsUsers.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], CallsUsers.prototype, "deleted", void 0);
CallsUsers = __decorate([
    typeorm_1.Index("idx_usr_call_call", ["callId"], {}),
    typeorm_1.Index("idx_usr_call_usr", ["userId"], {}),
    typeorm_1.Index("idx_call_users", ["callId", "userId"], {}),
    typeorm_1.Entity("calls_users", { schema: "sugar" })
], CallsUsers);
exports.CallsUsers = CallsUsers;
//# sourceMappingURL=CallsUsers.js.map
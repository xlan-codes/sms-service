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
let Users = class Users {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "user_name", nullable: true, length: 60 }),
    __metadata("design:type", String)
], Users.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "user_hash", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Users.prototype, "userHash", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "system_generated_password",
        nullable: true,
        width: 1
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "systemGeneratedPassword", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "pwd_last_changed", nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "pwdLastChanged", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "authenticate_id", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Users.prototype, "authenticateId", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "sugar_login",
        nullable: true,
        width: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "sugarLogin", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "first_name", nullable: true, length: 30 }),
    __metadata("design:type", String)
], Users.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "last_name", nullable: true, length: 30 }),
    __metadata("design:type", String)
], Users.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "is_admin",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "isAdmin", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "external_auth_only",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "externalAuthOnly", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "receive_notifications",
        nullable: true,
        width: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "receiveNotifications", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Users.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Users.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "title", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Users.prototype, "title", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "department", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Users.prototype, "department", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_home", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Users.prototype, "phoneHome", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_mobile", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Users.prototype, "phoneMobile", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_work", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Users.prototype, "phoneWork", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_other", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Users.prototype, "phoneOther", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_fax", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Users.prototype, "phoneFax", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Users.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "address_street", nullable: true, length: 150 }),
    __metadata("design:type", String)
], Users.prototype, "addressStreet", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "address_city", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Users.prototype, "addressCity", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "address_state", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Users.prototype, "addressState", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "address_country", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Users.prototype, "addressCountry", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "address_postalcode", nullable: true, length: 20 }),
    __metadata("design:type", String)
], Users.prototype, "addressPostalcode", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], Users.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "portal_only",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "portalOnly", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "show_on_employees",
        nullable: true,
        width: 1,
        default: () => "'1'"
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "showOnEmployees", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "employee_status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Users.prototype, "employeeStatus", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "messenger_id", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Users.prototype, "messengerId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "messenger_type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Users.prototype, "messengerType", void 0);
__decorate([
    typeorm_1.Column("char", { name: "reports_to_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Users.prototype, "reportsToId", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "is_group", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], Users.prototype, "isGroup", void 0);
Users = __decorate([
    typeorm_1.Index("idx_user_name", ["userName", "isGroup", "status", "lastName", "firstName", "id"], {}),
    typeorm_1.Entity("users", { schema: "sugar" })
], Users);
exports.Users = Users;
//# sourceMappingURL=Users.js.map
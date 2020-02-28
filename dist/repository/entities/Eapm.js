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
let Eapm = class Eapm {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Eapm.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Eapm.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Eapm.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Eapm.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Eapm.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Eapm.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Eapm.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Eapm.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Eapm.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "password", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Eapm.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "url", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Eapm.prototype, "url", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "application",
        nullable: true,
        length: 100,
        default: () => "'webex'"
    }),
    __metadata("design:type", String)
], Eapm.prototype, "application", void 0);
__decorate([
    typeorm_1.Column("text", { name: "api_data", nullable: true }),
    __metadata("design:type", String)
], Eapm.prototype, "apiData", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "consumer_key", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Eapm.prototype, "consumerKey", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "consumer_secret", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Eapm.prototype, "consumerSecret", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "oauth_token", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Eapm.prototype, "oauthToken", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "oauth_secret", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Eapm.prototype, "oauthSecret", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "validated", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], Eapm.prototype, "validated", void 0);
Eapm = __decorate([
    typeorm_1.Index("idx_app_active", ["assignedUserId", "application", "validated"], {}),
    typeorm_1.Entity("eapm", { schema: "sugar" })
], Eapm);
exports.Eapm = Eapm;
//# sourceMappingURL=Eapm.js.map
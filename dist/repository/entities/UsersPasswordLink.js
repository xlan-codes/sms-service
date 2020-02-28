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
let UsersPasswordLink = class UsersPasswordLink {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], UsersPasswordLink.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "username", nullable: true, length: 36 }),
    __metadata("design:type", String)
], UsersPasswordLink.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_generated", nullable: true }),
    __metadata("design:type", Date)
], UsersPasswordLink.prototype, "dateGenerated", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], UsersPasswordLink.prototype, "deleted", void 0);
UsersPasswordLink = __decorate([
    typeorm_1.Index("idx_username", ["username"], {}),
    typeorm_1.Entity("users_password_link", { schema: "sugar" })
], UsersPasswordLink);
exports.UsersPasswordLink = UsersPasswordLink;
//# sourceMappingURL=UsersPasswordLink.js.map
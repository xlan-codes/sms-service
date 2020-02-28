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
let UsersSignatures = class UsersSignatures {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], UsersSignatures.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], UsersSignatures.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], UsersSignatures.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], UsersSignatures.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], UsersSignatures.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], UsersSignatures.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("text", { name: "signature", nullable: true }),
    __metadata("design:type", String)
], UsersSignatures.prototype, "signature", void 0);
__decorate([
    typeorm_1.Column("text", { name: "signature_html", nullable: true }),
    __metadata("design:type", String)
], UsersSignatures.prototype, "signatureHtml", void 0);
UsersSignatures = __decorate([
    typeorm_1.Index("idx_usersig_uid", ["userId"], {}),
    typeorm_1.Entity("users_signatures", { schema: "sugar" })
], UsersSignatures);
exports.UsersSignatures = UsersSignatures;
//# sourceMappingURL=UsersSignatures.js.map
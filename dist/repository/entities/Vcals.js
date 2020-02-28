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
let Vcals = class Vcals {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Vcals.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], Vcals.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Vcals.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Vcals.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "user_id", length: 36 }),
    __metadata("design:type", String)
], Vcals.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "type", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Vcals.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "source", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Vcals.prototype, "source", void 0);
__decorate([
    typeorm_1.Column("text", { name: "content", nullable: true }),
    __metadata("design:type", String)
], Vcals.prototype, "content", void 0);
Vcals = __decorate([
    typeorm_1.Index("idx_vcal", ["type", "userId"], {}),
    typeorm_1.Entity("vcals", { schema: "sugar" })
], Vcals);
exports.Vcals = Vcals;
//# sourceMappingURL=Vcals.js.map
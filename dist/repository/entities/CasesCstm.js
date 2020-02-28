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
let CasesCstm = class CasesCstm {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id_c", length: 36 }),
    __metadata("design:type", String)
], CasesCstm.prototype, "idC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "supportlevel_c",
        nullable: true,
        length: 100,
        default: () => "'level1'"
    }),
    __metadata("design:type", String)
], CasesCstm.prototype, "supportlevelC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "category_c",
        nullable: true,
        length: 100,
        default: () => "'1100'"
    }),
    __metadata("design:type", String)
], CasesCstm.prototype, "categoryC", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "clientavailablefrom_c", nullable: true }),
    __metadata("design:type", Date)
], CasesCstm.prototype, "clientavailablefromC", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "clientavailableto_c", nullable: true }),
    __metadata("design:type", Date)
], CasesCstm.prototype, "clientavailabletoC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "technology_c",
        nullable: true,
        length: 100,
        default: () => "'fiber'"
    }),
    __metadata("design:type", String)
], CasesCstm.prototype, "technologyC", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "product_c",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], CasesCstm.prototype, "productC", void 0);
__decorate([
    typeorm_1.Column("char", { name: "project_id_c", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CasesCstm.prototype, "projectIdC", void 0);
__decorate([
    typeorm_1.Column("text", { name: "producttechnicaldetails_c", nullable: true }),
    __metadata("design:type", String)
], CasesCstm.prototype, "producttechnicaldetailsC", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "closedate_c", nullable: true }),
    __metadata("design:type", Date)
], CasesCstm.prototype, "closedateC", void 0);
__decorate([
    typeorm_1.Column("text", { name: "solutions_c", nullable: true }),
    __metadata("design:type", String)
], CasesCstm.prototype, "solutionsC", void 0);
CasesCstm = __decorate([
    typeorm_1.Entity("cases_cstm", { schema: "sugar" })
], CasesCstm);
exports.CasesCstm = CasesCstm;
//# sourceMappingURL=CasesCstm.js.map
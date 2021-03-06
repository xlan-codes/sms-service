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
let ProjectsCases = class ProjectsCases {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ProjectsCases.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "case_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProjectsCases.prototype, "caseId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "project_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProjectsCases.prototype, "projectId", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], ProjectsCases.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], ProjectsCases.prototype, "deleted", void 0);
ProjectsCases = __decorate([
    typeorm_1.Index("idx_proj_case_proj", ["projectId"], {}),
    typeorm_1.Index("idx_proj_case_case", ["caseId"], {}),
    typeorm_1.Index("projects_cases_alt", ["projectId", "caseId"], {}),
    typeorm_1.Entity("projects_cases", { schema: "sugar" })
], ProjectsCases);
exports.ProjectsCases = ProjectsCases;
//# sourceMappingURL=ProjectsCases.js.map
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
let RolesModules = class RolesModules {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], RolesModules.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "role_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], RolesModules.prototype, "roleId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "module_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], RolesModules.prototype, "moduleId", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "allow",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], RolesModules.prototype, "allow", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], RolesModules.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], RolesModules.prototype, "deleted", void 0);
RolesModules = __decorate([
    typeorm_1.Index("idx_role_id", ["roleId"], {}),
    typeorm_1.Index("idx_module_id", ["moduleId"], {}),
    typeorm_1.Entity("roles_modules", { schema: "sugar" })
], RolesModules);
exports.RolesModules = RolesModules;
//# sourceMappingURL=RolesModules.js.map
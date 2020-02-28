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
let UsersLastImport = class UsersLastImport {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], UsersLastImport.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], UsersLastImport.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "import_module", nullable: true, length: 36 }),
    __metadata("design:type", String)
], UsersLastImport.prototype, "importModule", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "bean_type", nullable: true, length: 36 }),
    __metadata("design:type", String)
], UsersLastImport.prototype, "beanType", void 0);
__decorate([
    typeorm_1.Column("char", { name: "bean_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], UsersLastImport.prototype, "beanId", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], UsersLastImport.prototype, "deleted", void 0);
UsersLastImport = __decorate([
    typeorm_1.Index("idx_user_id", ["assignedUserId"], {}),
    typeorm_1.Entity("users_last_import", { schema: "sugar" })
], UsersLastImport);
exports.UsersLastImport = UsersLastImport;
//# sourceMappingURL=UsersLastImport.js.map
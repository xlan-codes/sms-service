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
let AclActions = class AclActions {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], AclActions.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], AclActions.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], AclActions.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], AclActions.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], AclActions.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 150 }),
    __metadata("design:type", String)
], AclActions.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "category", nullable: true, length: 100 }),
    __metadata("design:type", String)
], AclActions.prototype, "category", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "acltype", nullable: true, length: 100 }),
    __metadata("design:type", String)
], AclActions.prototype, "acltype", void 0);
__decorate([
    typeorm_1.Column("int", { name: "aclaccess", nullable: true }),
    __metadata("design:type", Number)
], AclActions.prototype, "aclaccess", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], AclActions.prototype, "deleted", void 0);
AclActions = __decorate([
    typeorm_1.Index("idx_aclaction_id_del", ["id", "deleted"], {}),
    typeorm_1.Index("idx_category_name", ["category", "name"], {}),
    typeorm_1.Entity("acl_actions", { schema: "sugar" })
], AclActions);
exports.AclActions = AclActions;
//# sourceMappingURL=AclActions.js.map
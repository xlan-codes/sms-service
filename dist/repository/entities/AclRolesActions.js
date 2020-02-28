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
let AclRolesActions = class AclRolesActions {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], AclRolesActions.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "role_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], AclRolesActions.prototype, "roleId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "action_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], AclRolesActions.prototype, "actionId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "access_override", nullable: true }),
    __metadata("design:type", Number)
], AclRolesActions.prototype, "accessOverride", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], AclRolesActions.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], AclRolesActions.prototype, "deleted", void 0);
AclRolesActions = __decorate([
    typeorm_1.Index("idx_acl_role_id", ["roleId"], {}),
    typeorm_1.Index("idx_acl_action_id", ["actionId"], {}),
    typeorm_1.Index("idx_aclrole_action", ["roleId", "actionId"], {}),
    typeorm_1.Entity("acl_roles_actions", { schema: "sugar" })
], AclRolesActions);
exports.AclRolesActions = AclRolesActions;
//# sourceMappingURL=AclRolesActions.js.map
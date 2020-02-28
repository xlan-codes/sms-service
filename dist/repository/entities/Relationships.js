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
let Relationships = class Relationships {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Relationships.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "relationship_name", nullable: true, length: 150 }),
    __metadata("design:type", String)
], Relationships.prototype, "relationshipName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "lhs_module", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Relationships.prototype, "lhsModule", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "lhs_table", nullable: true, length: 64 }),
    __metadata("design:type", String)
], Relationships.prototype, "lhsTable", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "lhs_key", nullable: true, length: 64 }),
    __metadata("design:type", String)
], Relationships.prototype, "lhsKey", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "rhs_module", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Relationships.prototype, "rhsModule", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "rhs_table", nullable: true, length: 64 }),
    __metadata("design:type", String)
], Relationships.prototype, "rhsTable", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "rhs_key", nullable: true, length: 64 }),
    __metadata("design:type", String)
], Relationships.prototype, "rhsKey", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "join_table", nullable: true, length: 128 }),
    __metadata("design:type", String)
], Relationships.prototype, "joinTable", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "join_key_lhs", nullable: true, length: 128 }),
    __metadata("design:type", String)
], Relationships.prototype, "joinKeyLhs", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "join_key_rhs", nullable: true, length: 128 }),
    __metadata("design:type", String)
], Relationships.prototype, "joinKeyRhs", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "relationship_type", nullable: true, length: 64 }),
    __metadata("design:type", String)
], Relationships.prototype, "relationshipType", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "relationship_role_column",
        nullable: true,
        length: 64
    }),
    __metadata("design:type", String)
], Relationships.prototype, "relationshipRoleColumn", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "relationship_role_column_value",
        nullable: true,
        length: 50
    }),
    __metadata("design:type", String)
], Relationships.prototype, "relationshipRoleColumnValue", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "reverse",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Relationships.prototype, "reverse", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Relationships.prototype, "deleted", void 0);
Relationships = __decorate([
    typeorm_1.Index("idx_rel_name", ["relationshipName"], {}),
    typeorm_1.Entity("relationships", { schema: "sugar" })
], Relationships);
exports.Relationships = Relationships;
//# sourceMappingURL=Relationships.js.map
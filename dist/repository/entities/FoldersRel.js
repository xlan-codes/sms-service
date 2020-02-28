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
let FoldersRel = class FoldersRel {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], FoldersRel.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("char", { name: "folder_id", length: 36 }),
    __metadata("design:type", String)
], FoldersRel.prototype, "folderId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "polymorphic_module", nullable: true, length: 25 }),
    __metadata("design:type", String)
], FoldersRel.prototype, "polymorphicModule", void 0);
__decorate([
    typeorm_1.Column("char", { name: "polymorphic_id", length: 36 }),
    __metadata("design:type", String)
], FoldersRel.prototype, "polymorphicId", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], FoldersRel.prototype, "deleted", void 0);
FoldersRel = __decorate([
    typeorm_1.Index("idx_poly_module_poly_id", ["polymorphicModule", "polymorphicId"], {}),
    typeorm_1.Index("idx_fr_id_deleted_poly", ["folderId", "deleted", "polymorphicId"], {}),
    typeorm_1.Entity("folders_rel", { schema: "sugar" })
], FoldersRel);
exports.FoldersRel = FoldersRel;
//# sourceMappingURL=FoldersRel.js.map
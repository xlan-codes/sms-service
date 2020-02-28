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
let ProjectsProducts = class ProjectsProducts {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ProjectsProducts.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "product_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProjectsProducts.prototype, "productId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "project_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProjectsProducts.prototype, "projectId", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], ProjectsProducts.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], ProjectsProducts.prototype, "deleted", void 0);
ProjectsProducts = __decorate([
    typeorm_1.Index("idx_proj_prod_project", ["projectId"], {}),
    typeorm_1.Index("idx_proj_prod_product", ["productId"], {}),
    typeorm_1.Index("projects_products_alt", ["projectId", "productId"], {}),
    typeorm_1.Entity("projects_products", { schema: "sugar" })
], ProjectsProducts);
exports.ProjectsProducts = ProjectsProducts;
//# sourceMappingURL=ProjectsProducts.js.map
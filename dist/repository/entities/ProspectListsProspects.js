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
let ProspectListsProspects = class ProspectListsProspects {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ProspectListsProspects.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "prospect_list_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProspectListsProspects.prototype, "prospectListId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "related_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProspectListsProspects.prototype, "relatedId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "related_type", nullable: true, length: 25 }),
    __metadata("design:type", String)
], ProspectListsProspects.prototype, "relatedType", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], ProspectListsProspects.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], ProspectListsProspects.prototype, "deleted", void 0);
ProspectListsProspects = __decorate([
    typeorm_1.Index("idx_plp_pro_id", ["prospectListId"], {}),
    typeorm_1.Index("idx_plp_rel_id", ["relatedId", "relatedType", "prospectListId"], {}),
    typeorm_1.Entity("prospect_lists_prospects", { schema: "sugar" })
], ProspectListsProspects);
exports.ProspectListsProspects = ProspectListsProspects;
//# sourceMappingURL=ProspectListsProspects.js.map
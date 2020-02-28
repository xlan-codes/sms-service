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
let SavedSearch = class SavedSearch {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], SavedSearch.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 150 }),
    __metadata("design:type", String)
], SavedSearch.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "search_module", nullable: true, length: 150 }),
    __metadata("design:type", String)
], SavedSearch.prototype, "searchModule", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "deleted", nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], SavedSearch.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], SavedSearch.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], SavedSearch.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], SavedSearch.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("text", { name: "contents", nullable: true }),
    __metadata("design:type", String)
], SavedSearch.prototype, "contents", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], SavedSearch.prototype, "description", void 0);
SavedSearch = __decorate([
    typeorm_1.Index("idx_desc", ["name", "deleted"], {}),
    typeorm_1.Entity("saved_search", { schema: "sugar" })
], SavedSearch);
exports.SavedSearch = SavedSearch;
//# sourceMappingURL=SavedSearch.js.map
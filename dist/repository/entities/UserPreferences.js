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
let UserPreferences = class UserPreferences {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], UserPreferences.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "category", nullable: true, length: 50 }),
    __metadata("design:type", String)
], UserPreferences.prototype, "category", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], UserPreferences.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], UserPreferences.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], UserPreferences.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], UserPreferences.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("longtext", { name: "contents", nullable: true }),
    __metadata("design:type", String)
], UserPreferences.prototype, "contents", void 0);
UserPreferences = __decorate([
    typeorm_1.Index("idx_userprefnamecat", ["assignedUserId", "category"], {}),
    typeorm_1.Entity("user_preferences", { schema: "sugar" })
], UserPreferences);
exports.UserPreferences = UserPreferences;
//# sourceMappingURL=UserPreferences.js.map
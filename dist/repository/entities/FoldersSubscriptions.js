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
let FoldersSubscriptions = class FoldersSubscriptions {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], FoldersSubscriptions.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("char", { name: "folder_id", length: 36 }),
    __metadata("design:type", String)
], FoldersSubscriptions.prototype, "folderId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", length: 36 }),
    __metadata("design:type", String)
], FoldersSubscriptions.prototype, "assignedUserId", void 0);
FoldersSubscriptions = __decorate([
    typeorm_1.Index("idx_folder_id_assigned_user_id", ["folderId", "assignedUserId"], {}),
    typeorm_1.Entity("folders_subscriptions", { schema: "sugar" })
], FoldersSubscriptions);
exports.FoldersSubscriptions = FoldersSubscriptions;
//# sourceMappingURL=FoldersSubscriptions.js.map
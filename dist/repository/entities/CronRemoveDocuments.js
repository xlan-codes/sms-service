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
let CronRemoveDocuments = class CronRemoveDocuments {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], CronRemoveDocuments.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "bean_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], CronRemoveDocuments.prototype, "beanId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "module", nullable: true, length: 25 }),
    __metadata("design:type", String)
], CronRemoveDocuments.prototype, "module", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], CronRemoveDocuments.prototype, "dateModified", void 0);
CronRemoveDocuments = __decorate([
    typeorm_1.Index("idx_cron_remove_document_bean_id", ["beanId"], {}),
    typeorm_1.Index("idx_cron_remove_document_stamp", ["dateModified"], {}),
    typeorm_1.Entity("cron_remove_documents", { schema: "sugar" })
], CronRemoveDocuments);
exports.CronRemoveDocuments = CronRemoveDocuments;
//# sourceMappingURL=CronRemoveDocuments.js.map
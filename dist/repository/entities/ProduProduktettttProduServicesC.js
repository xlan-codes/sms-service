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
let ProduProduktettttProduServicesC = class ProduProduktettttProduServicesC {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ProduProduktettttProduServicesC.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], ProduProduktettttProduServicesC.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], ProduProduktettttProduServicesC.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "produ_produktetttt_produ_servicesprodu_produktetttt_ida",
        nullable: true,
        length: 36
    }),
    __metadata("design:type", String)
], ProduProduktettttProduServicesC.prototype, "produProduktettttProduServicesproduProduktettttIda", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "produ_produktetttt_produ_servicesprodu_services_idb",
        nullable: true,
        length: 36
    }),
    __metadata("design:type", String)
], ProduProduktettttProduServicesC.prototype, "produProduktettttProduServicesproduServicesIdb", void 0);
ProduProduktettttProduServicesC = __decorate([
    typeorm_1.Index("produ_produktetttt_produ_services_ida1", ["produProduktettttProduServicesproduProduktettttIda"], {}),
    typeorm_1.Index("produ_produktetttt_produ_services_alt", ["produProduktettttProduServicesproduServicesIdb"], {}),
    typeorm_1.Entity("produ_produktetttt_produ_services_c", { schema: "sugar" })
], ProduProduktettttProduServicesC);
exports.ProduProduktettttProduServicesC = ProduProduktettttProduServicesC;
//# sourceMappingURL=ProduProduktettttProduServicesC.js.map
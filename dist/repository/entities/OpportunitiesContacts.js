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
let OpportunitiesContacts = class OpportunitiesContacts {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], OpportunitiesContacts.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contact_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], OpportunitiesContacts.prototype, "contactId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "opportunity_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], OpportunitiesContacts.prototype, "opportunityId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contact_role", nullable: true, length: 50 }),
    __metadata("design:type", String)
], OpportunitiesContacts.prototype, "contactRole", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], OpportunitiesContacts.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], OpportunitiesContacts.prototype, "deleted", void 0);
OpportunitiesContacts = __decorate([
    typeorm_1.Index("idx_con_opp_con", ["contactId"], {}),
    typeorm_1.Index("idx_con_opp_opp", ["opportunityId"], {}),
    typeorm_1.Index("idx_opportunities_contacts", ["opportunityId", "contactId"], {}),
    typeorm_1.Entity("opportunities_contacts", { schema: "sugar" })
], OpportunitiesContacts);
exports.OpportunitiesContacts = OpportunitiesContacts;
//# sourceMappingURL=OpportunitiesContacts.js.map
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
let Leads = class Leads {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Leads.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Leads.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Leads.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Leads.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Leads.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Leads.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Leads.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "salutation", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "salutation", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "first_name", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "last_name", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "title", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "title", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "department", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "department", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "do_not_call",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Leads.prototype, "doNotCall", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_home", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "phoneHome", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_mobile", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "phoneMobile", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_work", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "phoneWork", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_other", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "phoneOther", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_fax", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "phoneFax", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_street",
        nullable: true,
        length: 150
    }),
    __metadata("design:type", String)
], Leads.prototype, "primaryAddressStreet", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_city",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], Leads.prototype, "primaryAddressCity", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_state",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], Leads.prototype, "primaryAddressState", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_postalcode",
        nullable: true,
        length: 20
    }),
    __metadata("design:type", String)
], Leads.prototype, "primaryAddressPostalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_country",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], Leads.prototype, "primaryAddressCountry", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "alt_address_street",
        nullable: true,
        length: 150
    }),
    __metadata("design:type", String)
], Leads.prototype, "altAddressStreet", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "alt_address_city", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "altAddressCity", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "alt_address_state", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "altAddressState", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "alt_address_postalcode",
        nullable: true,
        length: 20
    }),
    __metadata("design:type", String)
], Leads.prototype, "altAddressPostalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "alt_address_country",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], Leads.prototype, "altAddressCountry", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "assistant", nullable: true, length: 75 }),
    __metadata("design:type", String)
], Leads.prototype, "assistant", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "assistant_phone", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "assistantPhone", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "converted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Leads.prototype, "converted", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "refered_by", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "referedBy", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "lead_source", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "leadSource", void 0);
__decorate([
    typeorm_1.Column("text", { name: "lead_source_description", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "leadSourceDescription", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Leads.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("text", { name: "status_description", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "statusDescription", void 0);
__decorate([
    typeorm_1.Column("char", { name: "reports_to_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Leads.prototype, "reportsToId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "account_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "accountName", void 0);
__decorate([
    typeorm_1.Column("text", { name: "account_description", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "accountDescription", void 0);
__decorate([
    typeorm_1.Column("char", { name: "contact_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Leads.prototype, "contactId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "account_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Leads.prototype, "accountId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "opportunity_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Leads.prototype, "opportunityId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "opportunity_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "opportunityName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "opportunity_amount", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Leads.prototype, "opportunityAmount", void 0);
__decorate([
    typeorm_1.Column("char", { name: "campaign_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Leads.prototype, "campaignId", void 0);
__decorate([
    typeorm_1.Column("date", { name: "birthdate", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "birthdate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "portal_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "portalName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "portal_app", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "portalApp", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "website", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Leads.prototype, "website", void 0);
Leads = __decorate([
    typeorm_1.Index("idx_lead_acct_name_first", ["accountName", "deleted"], {}),
    typeorm_1.Index("idx_lead_last_first", ["lastName", "firstName", "deleted"], {}),
    typeorm_1.Index("idx_lead_del_stat", ["lastName", "status", "deleted", "firstName"], {}),
    typeorm_1.Index("idx_lead_opp_del", ["opportunityId", "deleted"], {}),
    typeorm_1.Index("idx_leads_acct_del", ["accountId", "deleted"], {}),
    typeorm_1.Index("idx_del_user", ["deleted", "assignedUserId"], {}),
    typeorm_1.Index("idx_lead_assigned", ["assignedUserId"], {}),
    typeorm_1.Index("idx_lead_contact", ["contactId"], {}),
    typeorm_1.Index("idx_reports_to", ["reportsToId"], {}),
    typeorm_1.Index("idx_lead_phone_work", ["phoneWork"], {}),
    typeorm_1.Index("idx_leads_id_del", ["id", "deleted"], {}),
    typeorm_1.Entity("leads", { schema: "sugar" })
], Leads);
exports.Leads = Leads;
//# sourceMappingURL=Leads.js.map
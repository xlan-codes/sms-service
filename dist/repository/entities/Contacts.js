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
let Contacts = class Contacts {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Contacts.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Contacts.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Contacts.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Contacts.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Contacts.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Contacts.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Contacts.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Contacts.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "salutation", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Contacts.prototype, "salutation", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "first_name", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "last_name", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "title", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "title", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "department", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Contacts.prototype, "department", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "do_not_call",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Contacts.prototype, "doNotCall", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_home", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "phoneHome", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_mobile", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "phoneMobile", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_work", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "phoneWork", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_other", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "phoneOther", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_fax", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "phoneFax", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_street",
        nullable: true,
        length: 150
    }),
    __metadata("design:type", String)
], Contacts.prototype, "primaryAddressStreet", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_city",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], Contacts.prototype, "primaryAddressCity", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_state",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], Contacts.prototype, "primaryAddressState", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_postalcode",
        nullable: true,
        length: 20
    }),
    __metadata("design:type", String)
], Contacts.prototype, "primaryAddressPostalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_country",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], Contacts.prototype, "primaryAddressCountry", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "alt_address_street",
        nullable: true,
        length: 150
    }),
    __metadata("design:type", String)
], Contacts.prototype, "altAddressStreet", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "alt_address_city", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "altAddressCity", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "alt_address_state", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "altAddressState", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "alt_address_postalcode",
        nullable: true,
        length: 20
    }),
    __metadata("design:type", String)
], Contacts.prototype, "altAddressPostalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "alt_address_country",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], Contacts.prototype, "altAddressCountry", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "assistant", nullable: true, length: 75 }),
    __metadata("design:type", String)
], Contacts.prototype, "assistant", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "assistant_phone", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Contacts.prototype, "assistantPhone", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "lead_source", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Contacts.prototype, "leadSource", void 0);
__decorate([
    typeorm_1.Column("char", { name: "reports_to_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Contacts.prototype, "reportsToId", void 0);
__decorate([
    typeorm_1.Column("date", { name: "birthdate", nullable: true }),
    __metadata("design:type", String)
], Contacts.prototype, "birthdate", void 0);
__decorate([
    typeorm_1.Column("char", { name: "campaign_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Contacts.prototype, "campaignId", void 0);
Contacts = __decorate([
    typeorm_1.Index("idx_cont_last_first", ["lastName", "firstName", "deleted"], {}),
    typeorm_1.Index("idx_contacts_del_last", ["deleted", "lastName"], {}),
    typeorm_1.Index("idx_cont_del_reports", ["deleted", "reportsToId", "lastName"], {}),
    typeorm_1.Index("idx_reports_to_id", ["reportsToId"], {}),
    typeorm_1.Index("idx_del_id_user", ["deleted", "id", "assignedUserId"], {}),
    typeorm_1.Index("idx_cont_assigned", ["assignedUserId"], {}),
    typeorm_1.Entity("contacts", { schema: "sugar" })
], Contacts);
exports.Contacts = Contacts;
//# sourceMappingURL=Contacts.js.map
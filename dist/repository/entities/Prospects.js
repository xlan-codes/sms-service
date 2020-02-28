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
let Prospects = class Prospects {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], Prospects.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], Prospects.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Prospects.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Prospects.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Prospects.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Prospects.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Prospects.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Prospects.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "salutation", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Prospects.prototype, "salutation", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "first_name", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "last_name", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "title", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "title", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "department", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Prospects.prototype, "department", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "do_not_call",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Prospects.prototype, "doNotCall", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_home", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "phoneHome", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_mobile", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "phoneMobile", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_work", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "phoneWork", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_other", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "phoneOther", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone_fax", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "phoneFax", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_street",
        nullable: true,
        length: 150
    }),
    __metadata("design:type", String)
], Prospects.prototype, "primaryAddressStreet", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_city",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], Prospects.prototype, "primaryAddressCity", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_state",
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], Prospects.prototype, "primaryAddressState", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_postalcode",
        nullable: true,
        length: 20
    }),
    __metadata("design:type", String)
], Prospects.prototype, "primaryAddressPostalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "primary_address_country",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], Prospects.prototype, "primaryAddressCountry", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "alt_address_street",
        nullable: true,
        length: 150
    }),
    __metadata("design:type", String)
], Prospects.prototype, "altAddressStreet", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "alt_address_city", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "altAddressCity", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "alt_address_state", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "altAddressState", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "alt_address_postalcode",
        nullable: true,
        length: 20
    }),
    __metadata("design:type", String)
], Prospects.prototype, "altAddressPostalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "alt_address_country",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], Prospects.prototype, "altAddressCountry", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "assistant", nullable: true, length: 75 }),
    __metadata("design:type", String)
], Prospects.prototype, "assistant", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "assistant_phone", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Prospects.prototype, "assistantPhone", void 0);
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "tracker_key" }),
    __metadata("design:type", Number)
], Prospects.prototype, "trackerKey", void 0);
__decorate([
    typeorm_1.Column("date", { name: "birthdate", nullable: true }),
    __metadata("design:type", String)
], Prospects.prototype, "birthdate", void 0);
__decorate([
    typeorm_1.Column("char", { name: "lead_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Prospects.prototype, "leadId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "account_name", nullable: true, length: 150 }),
    __metadata("design:type", String)
], Prospects.prototype, "accountName", void 0);
__decorate([
    typeorm_1.Column("char", { name: "campaign_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Prospects.prototype, "campaignId", void 0);
Prospects = __decorate([
    typeorm_1.Index("prospect_auto_tracker_key", ["trackerKey"], {}),
    typeorm_1.Index("idx_prospects_last_first", ["lastName", "firstName", "deleted"], {}),
    typeorm_1.Index("idx_prospecs_del_last", ["lastName", "deleted"], {}),
    typeorm_1.Index("idx_prospects_id_del", ["id", "deleted"], {}),
    typeorm_1.Index("idx_prospects_assigned", ["assignedUserId"], {}),
    typeorm_1.Entity("prospects", { schema: "sugar" })
], Prospects);
exports.Prospects = Prospects;
//# sourceMappingURL=Prospects.js.map
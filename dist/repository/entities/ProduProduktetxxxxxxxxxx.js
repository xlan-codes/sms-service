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
let ProduProduktetxxxxxxxxxx = class ProduProduktetxxxxxxxxxx {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], ProduProduktetxxxxxxxxxx.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], ProduProduktetxxxxxxxxxx.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], ProduProduktetxxxxxxxxxx.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ip", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "ip", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ap", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "ap", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "aphostname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "aphostname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "postalcode", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "postalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "location",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "location", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "city", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "city", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "state", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "state", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethswitchname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "ethswitchname", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "ethernetdownstreamspeed",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "ethernetdownstreamspeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethcablelength", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "ethcablelength", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethswitchport", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "ethswitchport", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "ethernetupstreamspeed",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "ethernetupstreamspeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fomsanname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "fomsanname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fomsanslot", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "fomsanslot", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fomsanport", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "fomsanport", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fodownstreamspeed", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "fodownstreamspeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "foupstreamspeed", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "foupstreamspeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "foswitchname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "foswitchname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "foswitchport", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "foswitchport", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "fofiberopticlossdb",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "fofiberopticlossdb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "foconnectortype", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "foconnectortype", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fofibercable", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "fofibercable", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fofibersplice", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "fofibersplice", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "foodfport", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "foodfport", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "category",
        nullable: true,
        length: 100,
        default: () => "'familjare_prepaid'"
    }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "category", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "status",
        nullable: true,
        length: 100,
        default: () => "'new'"
    }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "modemtype",
        nullable: true,
        length: 100,
        default: () => "'modem_type_1'"
    }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "modemtype", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "pos",
        nullable: true,
        length: 100,
        default: () => "'empty'"
    }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "pos", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "iptype",
        nullable: true,
        length: 100,
        default: () => "'dynamic'"
    }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "iptype", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "iprange", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "iprange", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "staticipaddress", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "staticipaddress", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ipmask", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "ipmask", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contactperson", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "contactperson", void 0);
__decorate([
    typeorm_1.Column("date", { name: "serviceenddate", nullable: true }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "serviceenddate", void 0);
__decorate([
    typeorm_1.Column("date", { name: "installationdate", nullable: true }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "installationdate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "country", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "country", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fofiberpairs", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "fofiberpairs", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "street", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "street", void 0);
__decorate([
    typeorm_1.Column("date", { name: "contractdate", nullable: true }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "contractdate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contacts", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "contacts", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "technology", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetxxxxxxxxxx.prototype, "technology", void 0);
ProduProduktetxxxxxxxxxx = __decorate([
    typeorm_1.Entity("produ_produktetxxxxxxxxxx", { schema: "sugar" })
], ProduProduktetxxxxxxxxxx);
exports.ProduProduktetxxxxxxxxxx = ProduProduktetxxxxxxxxxx;
//# sourceMappingURL=ProduProduktetxxxxxxxxxx.js.map
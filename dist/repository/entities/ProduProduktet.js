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
let ProduProduktet = class ProduProduktet {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], ProduProduktet.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], ProduProduktet.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], ProduProduktet.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ip", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ip", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ap", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ap", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "aphostname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "aphostname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "street", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "street", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "postalcode", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "postalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "location",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "location", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "city", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "city", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "state", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "state", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethswitchname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ethswitchname", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "ethernetdownstreamspeed",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ethernetdownstreamspeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethcablelength", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ethcablelength", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethswitchport", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ethswitchport", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "ethernetupstreamspeed",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ethernetupstreamspeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fomsanname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "fomsanname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fomsanslot", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "fomsanslot", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fomsanport", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "fomsanport", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fodownstreamspeed", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "fodownstreamspeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "foupstreamspeed", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foupstreamspeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "foswitchname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foswitchname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "foswitchport", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foswitchport", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "fofiberopticlossdb",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "fofiberopticlossdb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "foconnectortype", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foconnectortype", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fofibercable", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "fofibercable", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fofibersplice", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "fofibersplice", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "foodfport", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foodfport", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "category",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "category", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "technolody",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "technolody", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "status",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "phone", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "devicetype",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "devicetype", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "modemtype",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "modemtype", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "pos",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "pos", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "telephonybundles",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "telephonybundles", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "iptype",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "iptype", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "iprange", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "iprange", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "staticipaddress", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "staticipaddress", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ipmask", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ipmask", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "smartcard", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "smartcard", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contactperson", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "contactperson", void 0);
__decorate([
    typeorm_1.Column("date", { name: "serviceenddate", nullable: true }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "serviceenddate", void 0);
__decorate([
    typeorm_1.Column("date", { name: "installationdate", nullable: true }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "installationdate", void 0);
__decorate([
    typeorm_1.Column("date", { name: "contractdate", nullable: true }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "contractdate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "country", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "country", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fofiberpairs", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "fofiberpairs", void 0);
__decorate([
    typeorm_1.Column("char", { name: "contact_id_c", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "contactIdC", void 0);
__decorate([
    typeorm_1.Column("char", { name: "produ_services_id_c", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "produServicesIdC", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "services", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "services", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contacts", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "contacts", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "technology", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "technology", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "installation",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "installation", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_msan_port", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foMsanPort", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "fo_downstream_speed",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foDownstreamSpeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethdownstream", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ethdownstream", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_switch_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foSwitchName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_switch_port", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foSwitchPort", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "canopyip", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "canopyip", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "fo_fiber_optic_lossdb",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foFiberOpticLossdb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_connector_type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foConnectorType", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_msan_slot", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foMsanSlot", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_fiber_pairs", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foFiberPairs", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_upstream_speed", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foUpstreamSpeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_fiber_cable", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foFiberCable", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_fiber_splice", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "foFiberSplice", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "sate", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "sate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ip_mask", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ipMask", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contact_person", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "contactPerson", void 0);
__decorate([
    typeorm_1.Column("date", { name: "contract_date", nullable: true }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "contractDate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ip_range", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ipRange", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "static_ip_address", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "staticIpAddress", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "ip_type",
        nullable: true,
        length: 100,
        default: () => "'dynamic'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "ipType", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "modem_type",
        nullable: true,
        length: 100,
        default: () => "'modem_type_1'"
    }),
    __metadata("design:type", String)
], ProduProduktet.prototype, "modemType", void 0);
ProduProduktet = __decorate([
    typeorm_1.Entity("produ_produktet", { schema: "sugar" })
], ProduProduktet);
exports.ProduProduktet = ProduProduktet;
//# sourceMappingURL=ProduProduktet.js.map
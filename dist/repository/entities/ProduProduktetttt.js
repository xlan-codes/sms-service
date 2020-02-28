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
let ProduProduktetttt = class ProduProduktetttt {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_entered", nullable: true }),
    __metadata("design:type", Date)
], ProduProduktetttt.prototype, "dateEntered", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], ProduProduktetttt.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("char", { name: "modified_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "modifiedUserId", void 0);
__decorate([
    typeorm_1.Column("char", { name: "created_by", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], ProduProduktetttt.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "category",
        nullable: true,
        length: 100,
        default: () => "'empty'"
    }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "category", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "technology",
        nullable: true,
        length: 100,
        default: () => "'fiber'"
    }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "technology", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "pos",
        nullable: true,
        length: 100,
        default: () => "'empty'"
    }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "pos", void 0);
__decorate([
    typeorm_1.Column("date", { name: "installationdate", nullable: true }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "installationdate", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "installation",
        nullable: true,
        length: 100,
        default: () => "'0'"
    }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "installation", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "street", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "street", void 0);
__decorate([
    typeorm_1.Column("date", { name: "serviceenddate", nullable: true }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "serviceenddate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "city", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "city", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "postalcode", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "postalcode", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contacts", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "contacts", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "location", nullable: true, length: 100 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "location", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fomsanname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "fomsanname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_msan_port", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foMsanPort", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "fo_downstream_speed",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foDownstreamSpeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "country", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "country", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethswitchname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "ethswitchname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethcablelength", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "ethcablelength", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethdownstream", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "ethdownstream", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_switch_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foSwitchName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ethswitchport", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "ethswitchport", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_switch_port", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foSwitchPort", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "ethernetupstreamspeed",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "ethernetupstreamspeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "canopyip", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "canopyip", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "fo_fiber_optic_lossdb",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foFiberOpticLossdb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ap", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "ap", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_connector_type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foConnectorType", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "aphostname", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "aphostname", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_msan_slot", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foMsanSlot", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_fiber_pairs", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foFiberPairs", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_upstream_speed", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foUpstreamSpeed", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_fiber_cable", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foFiberCable", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "fo_fiber_splice", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "foFiberSplice", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "sate", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "sate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ip_mask", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "ipMask", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "contact_person", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "contactPerson", void 0);
__decorate([
    typeorm_1.Column("date", { name: "contract_date", nullable: true }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "contractDate", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ip_range", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "ipRange", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "static_ip_address", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "staticIpAddress", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "modem_type", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "modemType", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "ip_type",
        nullable: true,
        length: 100,
        default: () => "'dynamic'"
    }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "ipType", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "services", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProduProduktetttt.prototype, "services", void 0);
ProduProduktetttt = __decorate([
    typeorm_1.Entity("produ_produktetttt", { schema: "sugar" })
], ProduProduktetttt);
exports.ProduProduktetttt = ProduProduktetttt;
//# sourceMappingURL=ProduProduktetttt.js.map
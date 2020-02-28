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
let EmailAddresses = class EmailAddresses {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], EmailAddresses.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "email_address", nullable: true, length: 255 }),
    __metadata("design:type", String)
], EmailAddresses.prototype, "emailAddress", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "email_address_caps",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], EmailAddresses.prototype, "emailAddressCaps", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "invalid_email",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], EmailAddresses.prototype, "invalidEmail", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "opt_out",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], EmailAddresses.prototype, "optOut", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_created", nullable: true }),
    __metadata("design:type", Date)
], EmailAddresses.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], EmailAddresses.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], EmailAddresses.prototype, "deleted", void 0);
EmailAddresses = __decorate([
    typeorm_1.Index("idx_ea_caps_opt_out_invalid", ["emailAddressCaps", "optOut", "invalidEmail"], {}),
    typeorm_1.Index("idx_ea_opt_out_invalid", ["emailAddress", "optOut", "invalidEmail"], {}),
    typeorm_1.Entity("email_addresses", { schema: "sugar" })
], EmailAddresses);
exports.EmailAddresses = EmailAddresses;
//# sourceMappingURL=EmailAddresses.js.map
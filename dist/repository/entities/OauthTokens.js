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
let OauthTokens = class OauthTokens {
};
__decorate([
    typeorm_1.Column("char", { primary: true, name: "id", length: 36 }),
    __metadata("design:type", String)
], OauthTokens.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "secret", nullable: true, length: 32 }),
    __metadata("design:type", String)
], OauthTokens.prototype, "secret", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "tstate", nullable: true, length: 1 }),
    __metadata("design:type", String)
], OauthTokens.prototype, "tstate", void 0);
__decorate([
    typeorm_1.Column("char", { name: "consumer", length: 36 }),
    __metadata("design:type", String)
], OauthTokens.prototype, "consumer", void 0);
__decorate([
    typeorm_1.Column("bigint", { name: "token_ts", nullable: true }),
    __metadata("design:type", String)
], OauthTokens.prototype, "tokenTs", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "verify", nullable: true, length: 32 }),
    __metadata("design:type", String)
], OauthTokens.prototype, "verify", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        primary: true,
        name: "deleted",
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], OauthTokens.prototype, "deleted", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "callback_url", nullable: true, length: 255 }),
    __metadata("design:type", String)
], OauthTokens.prototype, "callbackUrl", void 0);
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], OauthTokens.prototype, "assignedUserId", void 0);
OauthTokens = __decorate([
    typeorm_1.Index("oauth_state_ts", ["tstate", "tokenTs"], {}),
    typeorm_1.Index("constoken_key", ["consumer"], {}),
    typeorm_1.Entity("oauth_tokens", { schema: "sugar" })
], OauthTokens);
exports.OauthTokens = OauthTokens;
//# sourceMappingURL=OauthTokens.js.map
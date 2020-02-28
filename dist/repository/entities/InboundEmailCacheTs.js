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
let InboundEmailCacheTs = class InboundEmailCacheTs {
};
__decorate([
    typeorm_1.Column("varchar", { primary: true, name: "id", length: 255 }),
    __metadata("design:type", String)
], InboundEmailCacheTs.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int", { name: "ie_timestamp", nullable: true, unsigned: true }),
    __metadata("design:type", Number)
], InboundEmailCacheTs.prototype, "ieTimestamp", void 0);
InboundEmailCacheTs = __decorate([
    typeorm_1.Entity("inbound_email_cache_ts", { schema: "sugar" })
], InboundEmailCacheTs);
exports.InboundEmailCacheTs = InboundEmailCacheTs;
//# sourceMappingURL=InboundEmailCacheTs.js.map
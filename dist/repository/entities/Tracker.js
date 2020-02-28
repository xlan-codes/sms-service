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
let Tracker = class Tracker {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Tracker.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("char", { name: "monitor_id", length: 36 }),
    __metadata("design:type", String)
], Tracker.prototype, "monitorId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "user_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Tracker.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "module_name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tracker.prototype, "moduleName", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "item_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Tracker.prototype, "itemId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "item_summary", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tracker.prototype, "itemSummary", void 0);
__decorate([
    typeorm_1.Column("datetime", { name: "date_modified", nullable: true }),
    __metadata("design:type", Date)
], Tracker.prototype, "dateModified", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "action", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tracker.prototype, "action", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "session_id", nullable: true, length: 36 }),
    __metadata("design:type", String)
], Tracker.prototype, "sessionId", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "visible",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Tracker.prototype, "visible", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        name: "deleted",
        nullable: true,
        width: 1,
        default: () => "'0'"
    }),
    __metadata("design:type", Boolean)
], Tracker.prototype, "deleted", void 0);
Tracker = __decorate([
    typeorm_1.Index("idx_tracker_iid", ["itemId"], {}),
    typeorm_1.Index("idx_tracker_userid_vis_id", ["userId", "visible", "id"], {}),
    typeorm_1.Index("idx_tracker_userid_itemid_vis", ["userId", "itemId", "visible"], {}),
    typeorm_1.Index("idx_tracker_monitor_id", ["monitorId"], {}),
    typeorm_1.Index("idx_tracker_date_modified", ["dateModified"], {}),
    typeorm_1.Entity("tracker", { schema: "sugar" })
], Tracker);
exports.Tracker = Tracker;
//# sourceMappingURL=Tracker.js.map
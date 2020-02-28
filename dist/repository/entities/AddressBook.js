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
let AddressBook = class AddressBook {
};
__decorate([
    typeorm_1.Column("char", { name: "assigned_user_id", length: 36 }),
    __metadata("design:type", String)
], AddressBook.prototype, "assignedUserId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "bean", nullable: true, length: 50 }),
    __metadata("design:type", String)
], AddressBook.prototype, "bean", void 0);
__decorate([
    typeorm_1.Column("char", { name: "bean_id", length: 36 }),
    __metadata("design:type", String)
], AddressBook.prototype, "beanId", void 0);
AddressBook = __decorate([
    typeorm_1.Index("ab_user_bean_idx", ["assignedUserId", "bean"], {}),
    typeorm_1.Entity("address_book", { schema: "sugar" })
], AddressBook);
exports.AddressBook = AddressBook;
//# sourceMappingURL=AddressBook.js.map
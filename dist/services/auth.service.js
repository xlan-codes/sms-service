"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_base64_1 = require("js-base64");
class AuthService {
    constructor() {
        this.password = process.env.REST_PASSWORD;
        this.username = process.env.REST_USERNAME;
    }
    getToken() {
        return js_base64_1.Base64.encode(this.username + ":" + this.password);
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
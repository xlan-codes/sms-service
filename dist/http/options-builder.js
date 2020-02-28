"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { OptionsWithUri } from "request";
class OptionsBuilder {
    constructor(baseUrl) {
        this.options = new OptionsExt();
        this.options.baseURL = baseUrl;
    }
    static create(baseUrl) {
        const ob = new OptionsBuilder(baseUrl);
        return ob;
    }
    method(method) {
        this.options.method = method;
        return this;
    }
    baseUrl(uri) {
        this.options.baseURL = uri;
        return this;
    }
    uri(uri) {
        this.options.url = uri;
        return this;
    }
    body(body) {
        this.options.data = body;
        return this;
    }
    headers(header) {
        this.options.headers = header;
        return this;
    }
    json(flag) {
        // this.options.json = flag;
        return this;
    }
    build() {
        return this.options;
    }
}
exports.OptionsBuilder = OptionsBuilder;
class OptionsExt {
}
//# sourceMappingURL=options-builder.js.map
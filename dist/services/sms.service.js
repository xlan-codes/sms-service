"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const options_builder_1 = require("../http/options-builder");
const async_request_1 = require("../http/async-request");
const logger_1 = require("../utils/logger");
// import { MessageModel } from "../models/message.model";
class SMSService {
    constructor(token) {
        this.authToken = token;
        this.requestBuilder = options_builder_1.OptionsBuilder.create(process.env.SMS_REST_API_URL);
    }
    sendSms(sms) {
        return __awaiter(this, void 0, void 0, function* () {
            var a = { "Authorization": `Basic ${this.authToken}`, "Accept": "application/json", "Content-Type": "application/json" };
            console.log(this.authToken);
            var conf = this.requestBuilder.uri('/sms').method("POST").headers(a).body(sms).build();
            yield async_request_1.requestAsync(conf).then((res) => {
                logger_1.logger.info("Message Sended");
            }).catch((rejects) => {
                Promise.reject(rejects);
            });
            return Promise.resolve(false);
        });
    }
}
exports.SMSService = SMSService;
//# sourceMappingURL=sms.service.js.map
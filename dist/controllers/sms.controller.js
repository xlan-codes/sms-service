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
const base_controller_1 = require("./base.controller");
const sms_service_1 = require("../services/sms.service");
const auth_service_1 = require("../services/auth.service");
const base_repository_1 = require("../repository/base.repository");
const moment = require("moment");
const Utils_1 = require("../utils/Utils");
// import { MessageModel } from "../models/message.model";
class SMSController extends base_controller_1.BaseController {
    constructor() {
        super();
        let auth = new auth_service_1.AuthService();
        this.smsService = new sms_service_1.SMSService(auth.getToken());
        this.repo = new base_repository_1.BaseRepository();
    }
    sendSmss() {
        return __awaiter(this, void 0, void 0, function* () {
            const a = yield this.repo.getClients();
            for (let i = 0; i < a.length; i++) {
                if (Utils_1.Utils.phonenumber(a[i].phone_mobile)) {
                    var date = moment(a[i].serviceenddate).format("DD-MM-YYYY");
                    var sms = {
                        sender: "ArdiNet",
                        recipient: `${a[i].phone_mobile}`,
                        message: `I nderuar abonent ${a[i].first_name}  ${a[i].last_name}, ju kujtojme se sherbimi i Internetit mbaron ne daten ${date}. Ju lutem vizitoni pikat tona te shitjes ose telefononi tek +355 68 541 7798. Faleminderit ArdiNet`,
                        dlr: 1
                    };
                    continue;
                    yield this.smsService.sendSms(sms);
                }
            }
            return Promise.resolve();
        });
    }
}
exports.SMSController = SMSController;
//# sourceMappingURL=sms.controller.js.map
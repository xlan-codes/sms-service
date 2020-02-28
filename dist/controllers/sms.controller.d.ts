import { BaseController } from "./base.controller";
import { SMSService } from "../services/sms.service";
import { BaseRepository } from "../repository/base.repository";
export declare class SMSController extends BaseController {
    smsService: SMSService;
    repo: BaseRepository;
    constructor();
    sendSmss(): Promise<void>;
}

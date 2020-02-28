import { BaseController } from "./base.controller";
import { SMSService } from "../services/sms.service";
import { AuthService } from "../services/auth.service";
import { BaseRepository } from "../repository/base.repository";
import * as moment from 'moment';
import { Utils } from "../utils/Utils";
// import { MessageModel } from "../models/message.model";


export class SMSController extends BaseController {

    smsService: SMSService;
    repo: BaseRepository;
    constructor() {
        super();
        let auth =  new AuthService();
        this.smsService =  new SMSService(auth.getToken());
        this.repo = new BaseRepository();
    }
    
    public async sendSmss(): Promise<void> {
        const a = await this.repo.getClients();
        for(let i = 0; i < a.length; i++) {
            if(Utils.phonenumber(a[i].phone_mobile)) {
                var date = moment(a[i].serviceenddate).format("DD-MM-YYYY");
                var sms = {
                    sender: "ArdiNet",
                    recipient: `${a[i].phone_mobile}`,
                    message: `I nderuar abonent ${a[i].first_name}  ${a[i].last_name}, ju kujtojme se sherbimi i Internetit mbaron ne daten ${date}. Ju lutem vizitoni pikat tona te shitjes ose telefononi tek +355 68 541 7798. Faleminderit ArdiNet`,
                    dlr: 1
                } as any;
                continue;
                await this.smsService.sendSms(sms)
            }

        }
        return Promise.resolve();
    }
}
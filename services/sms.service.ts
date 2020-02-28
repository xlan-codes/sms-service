import { OptionsBuilder } from "../http/options-builder";
import { requestAsync } from "../http/async-request";
import { logger } from "../utils/logger";
// import { MessageModel } from "../models/message.model";


export class SMSService {
    authToken: string;
    private requestBuilder: OptionsBuilder;
    constructor(token: string) {
        this.authToken = token;
        this.requestBuilder = OptionsBuilder.create(
			process.env.SMS_REST_API_URL,
		);
    }

    public async sendSms(sms: any): Promise<boolean> {
        var a = {"Authorization": `Basic ${this.authToken}`, "Accept": "application/json", "Content-Type": "application/json"};
        console.log(this.authToken);

        var conf = this.requestBuilder.uri('/sms').method("POST").headers(a).body(sms).build();
        await requestAsync(conf).then((res) => {
            logger.info("Message Sended");
        }).catch((rejects) => { 
            Promise.reject(rejects)
        });
        return Promise.resolve(false);
    }
}
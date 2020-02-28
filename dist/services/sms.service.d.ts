export declare class SMSService {
    authToken: string;
    private requestBuilder;
    constructor(token: string);
    sendSms(sms: any): Promise<boolean>;
}

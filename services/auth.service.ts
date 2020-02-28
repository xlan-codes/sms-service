import { Base64 } from 'js-base64';

export class AuthService {
    private username: string;
    private password: string;
    constructor(){
        this.password = process.env.REST_PASSWORD;
        this.username = process.env.REST_USERNAME;
    }

    public getToken(): string {
        return Base64.encode(this.username+":"+this.password);
    }
}
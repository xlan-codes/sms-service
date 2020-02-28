import { Connection } from "typeorm";
export declare class BaseRepository {
    connection: Connection;
    constructor();
    getClients(): Promise<any>;
    connect(): Promise<void>;
}

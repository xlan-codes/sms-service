import { Connection } from "typeorm";
// import { Contacts } from "./entities/Contacts";
import { createConnection } from "typeorm";

import * as moment from "moment";

export class BaseRepository {

    public connection: Connection;

    constructor() {
        // this.connection = getConnection();
    }



    public async getClients(): Promise<any> {
        await this.connect();
        let date = moment().add(3, 'days').format("YYYY-MM-DD");
        let query = `
        select first_name, last_name, serviceenddate, phone_mobile
        from contacts c
                 inner join contacts_cstm cc on c.id = cc.id_c
                 inner join produ_produktet_contacts_c ppcc on cc.id_c = ppcc.produ_produktet_contactscontacts_ida
                 inner join produ_produktet pp on ppcc.produ_produktet_contactsprodu_produktet_idb = pp.id
                 where pp.serviceenddate = '${date}' and c.deleted=0
                 `;
        return await this.connection.manager.query(query);
        // return null;
    }

    public async connect(): Promise<void> {
        this.connection = await createConnection({
            name: "default",
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "sugar",
            entities: [
               __dirname + "repository/entities/**/*.ts"
            ],
            synchronize: true,
            logging: false
          });
    }

}
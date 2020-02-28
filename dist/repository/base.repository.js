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
// import { Contacts } from "./entities/Contacts";
const typeorm_1 = require("typeorm");
const moment = require("moment");
class BaseRepository {
    constructor() {
        // this.connection = getConnection();
    }
    getClients() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            let date = moment().add(3, 'days').format("YYYY-MM-DD");
            let query = `
        select first_name, last_name, serviceenddate, phone_mobile
        from contacts c
                 inner join contacts_cstm cc on c.id = cc.id_c
                 inner join produ_produktet_contacts_c ppcc on cc.id_c = ppcc.produ_produktet_contactscontacts_ida
                 inner join produ_produktet pp on ppcc.produ_produktet_contactsprodu_produktet_idb = pp.id
                 where pp.serviceenddate = '${date}' and c.deleted=0
                 `;
            return yield this.connection.manager.query(query);
            // return null;
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield typeorm_1.createConnection({
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
        });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map
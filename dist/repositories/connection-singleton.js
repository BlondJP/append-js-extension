import { createConnection } from "typeorm";
import { Family } from "../entities/family.entity.js";
import { Member } from "../entities/member.entity.js";
import { Present } from "../entities/present.entity.js";
import { List } from "../entities/list.entity.js";
export const startConnection = (async () => {
    // Initialize a connection pool against the database.
    try {
        const connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "jpb_dev",
            password: "Pick",
            database: "family-present",
            entities: [Family, Member, Present, List],
            synchronize: true,
        });
        return connection;
    }
    catch (err) {
        console.error({ err });
    }
});
export class ConnectionSingleton {
    static async getInstance() {
        if (!this.connection) {
            this.connection = await startConnection();
        }
        return this.connection;
    }
}

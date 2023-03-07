import {Connection} from "typeorm/connection/Connection";
import {createConnection} from "typeorm";
import * as entities from "../entities";

export const startConnection =  (async (): Promise<Connection> => {
    // Initialize a connection pool against the database.
    try {
        const connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "jpb_dev",
            password: "Pick",
            database: "family-present",
            entities: Object.keys(entities),
            synchronize: true,
        });
        return connection
    } catch(err) {
        console.error({err})
    }
})

export class ConnectionSingleton {
    static connection: Connection

    static async getInstance(): Promise<Connection> {
        if (!this.connection) {
            this.connection = await startConnection()
        }

        return this.connection
    }
}
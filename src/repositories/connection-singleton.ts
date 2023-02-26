import {Connection} from "typeorm/connection/Connection";
import {createConnection, Repository} from "typeorm";
import {Family} from "../entities/family.entity";
import {Member} from "../entities/member.entity";
import {Present} from "../entities/present.entity";

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
            entities: [Family, Member, Present],
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
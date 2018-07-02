import "reflect-metadata";
import { Connection, ConnectionOptions } from "typeorm";
export default class Util {
    databaseConfig: ConnectionOptions;
    entities: any;
    resetDatabase(dropDatabase?: boolean): Promise<Connection>;
    connect(): Promise<Connection>;
}

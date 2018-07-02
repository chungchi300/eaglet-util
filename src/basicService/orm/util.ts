import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryColumn,
  Connection,
  EntityManager,
  createConnection,
  getConnection,
  ConnectionOptions
} from "typeorm";

import TYPE from "./type";
import { inject, injectable } from "inversify";
@injectable()
export default class Util {
  @inject(TYPE.config) databaseConfig: ConnectionOptions;
  @inject("entities") entities;
  async resetDatabase(dropDatabase: boolean = false) {
    // console.log('reload database start')
    const connection = await this.connect();
    if (dropDatabase) {
      await connection.dropDatabase();
    } else {
      connection.entityMetadatas.forEach(async metaData => {
        await connection.manager.query("SET  FOREIGN_KEY_CHECKS=0;");
        await connection.manager.query(
          `  TRUNCATE TABLE ${metaData.tableName}`
        );
        await connection.manager.query("SET  FOREIGN_KEY_CHECKS=1;");
      });
    }

    //
    await connection.synchronize();

    return connection;
  }
  async connect() {
    try {
      let connection = getConnection();

      return connection;
    } catch (connectionError) {
      console.log("connection not found create ");
    }
    console.log("the option for connection", {
      ...this.databaseConfig,
      entities: this.entities
    });
    let connection = await createConnection({
      ...this.databaseConfig,
      entities: this.entities
    });

    return connection;
  }
}

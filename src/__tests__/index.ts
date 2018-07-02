import { Container } from "inversify";

import TYPE from "../basicService/orm/type";
import Util from "../basicService/orm/util";
import {
  ConnectionOptions,
  Entity,
  PrimaryGeneratedColumn,
  Column
} from "typeorm";
describe("DB", () => {
  it("DB ", async () => {
    let myContainer = new Container();

    let databaseOption: ConnectionOptions = {
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "root",
      password: "dockerPassword",
      database: "crm",

      synchronize: false,

      logging: false
    };

    @Entity()
    class Post {
      @PrimaryGeneratedColumn() id: number;
      @Column({})
      title: string;
    }
    myContainer
      .bind<ConnectionOptions>(TYPE.config)
      .toConstantValue(databaseOption);
    myContainer.bind("entities").toConstantValue([Post]);

    myContainer.bind(TYPE.util).to(Util);
    const DB = myContainer.get<Util>(TYPE.util);
    let connection = await DB.connect();
    await DB.resetDatabase(true);
    expect((await connection.manager.find(Post)).length).toBe(0);
  });
});

import "reflect-metadata"
import { DataSource } from "typeorm"
import { Block } from "./entity/block"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "pass",
    database: "blockchain",
    synchronize: true,
    logging: false,
    entities: [Block],
    migrations: [],
    subscribers: [],
})

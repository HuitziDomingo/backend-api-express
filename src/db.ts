import { DataSource } from "typeorm"
import { User } from "./entities/user"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: "postgres",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
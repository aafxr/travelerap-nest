import { DataSource } from "typeorm"

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: process.env.DATABASE_HOST,
                port: parseInt(process.env.DATABASE_PORT, 10),
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}'
                ],
                synchronize: true,
            })
            return await dataSource.initialize()
        }
    }
]
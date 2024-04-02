import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";

export const userProviders: Provider[] = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: ['DATA_SOURCE']
    }
]
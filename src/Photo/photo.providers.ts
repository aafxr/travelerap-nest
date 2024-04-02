import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Photo } from './entity/photo.entity';

export const photoProviders: Provider[] = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
    inject: ['DATA_SOURCE'],
  },
];

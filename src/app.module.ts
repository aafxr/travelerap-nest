import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import { DatabaseModule } from './db/database.module';
import { PhotoModule } from './photo/photo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, PhotoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

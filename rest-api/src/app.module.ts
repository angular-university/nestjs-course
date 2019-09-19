
import { Module } from '@nestjs/common';
import {CoursesModule} from './courses/courses.module';
import {MongooseModule} from '@nestjs/mongoose';
import {MONGO_CONNECTION} from './constants';
import * as mongoose from 'mongoose';
import {DatabaseModule} from './database/database.module';


@Module({
  imports: [
    CoursesModule,
    DatabaseModule,
    MongooseModule.forRoot(MONGO_CONNECTION)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

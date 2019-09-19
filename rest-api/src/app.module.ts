
import { Module } from '@nestjs/common';
import {CoursesModule} from './courses/courses.module';
import {MongooseModule} from '@nestjs/mongoose';
import {MONGO_CONNECTION} from './constants';



@Module({
  imports: [
    CoursesModule,
    MongooseModule.forRoot(MONGO_CONNECTION)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

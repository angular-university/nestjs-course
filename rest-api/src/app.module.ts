import { Module } from '@nestjs/common';
import {CoursesController} from './controllers/courses.controller';


@Module({
  imports: [],
  controllers: [
    CoursesController
  ],
  providers: [],
})
export class AppModule {}

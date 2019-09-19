import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CoursesController} from './controllers/courses.controller';
import {CourseSchema} from './schemas/course.schema';
import {CoursesService} from './services/courses.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: "Course", schema: CourseSchema}
    ])
  ],
  controllers: [
    CoursesController
  ],
  providers: [
    CoursesService
  ],
})
export class CoursesModule {}

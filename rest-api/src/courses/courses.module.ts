import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CoursesController} from './controllers/courses.controller';
import {CourseSchema} from './schemas/course.schema';
import {CoursesRepository} from './services/courses-repository.service';


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
    CoursesRepository
  ],
})
export class CoursesModule {}

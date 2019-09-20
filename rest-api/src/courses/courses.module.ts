import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CoursesController} from './controllers/courses.controller';
import {CourseSchema} from './schemas/course.schema';
import {CoursesRepository} from './repositories/courses-repository';
import {LessonsRepository} from './repositories/lessons.repository';
import {LessonSchema} from './schemas/lesson.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: "Course", schema: CourseSchema},
      {name: "Lesson", schema: LessonSchema}
    ])
  ],
  controllers: [
    CoursesController
  ],
  providers: [
    CoursesRepository,
    LessonsRepository
  ],
})
export class CoursesModule {



}

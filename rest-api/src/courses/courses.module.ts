import {Module} from '@nestjs/common';
import {CoursesController} from './controllers/courses.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {CoursesSchema} from './schemas/courses.schema';
import {CoursesRepository} from './repositories/courses.repository';
import {LessonsSchema} from './schemas/lessons.schema';


@Module({
    imports: [
        MongooseModule.forFeature([
            {name: "Course", schema: CoursesSchema},
            {name: "Lesson", schema: LessonsSchema}
        ])
    ],
    controllers: [
        CoursesController
    ],
    providers: [
        CoursesRepository
    ]
})
export class CoursesModule {

}

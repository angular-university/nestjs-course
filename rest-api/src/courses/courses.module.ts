import {Module} from '@nestjs/common';
import {CoursesController} from './controllers/courses.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {CoursesSchema} from './schemas/courses.schema';
import {CoursesRepository} from './repositories/courses.repository';
import {LessonsSchema} from './schemas/lessons.schema';
import {LessonsRepository} from './repositories/lessons.repository';
import {LessonsController} from './controllers/lessons.controller';


@Module({
    imports: [
        MongooseModule.forFeature([
            {name: "Course", schema: CoursesSchema},
            {name: "Lesson", schema: LessonsSchema}
        ])
    ],
    controllers: [
        CoursesController,
        LessonsController
    ],
    providers: [
        CoursesRepository,
        LessonsRepository
    ]
})
export class CoursesModule {

}

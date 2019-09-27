import {Module} from '@nestjs/common';
import {CoursesController} from './controllers/courses.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {CoursesSchema} from './schemas/courses.schema';


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: "Course", schema: CoursesSchema
            }
        ])
    ],
    controllers: [
        CoursesController
    ]
})
export class CoursesModule {

}

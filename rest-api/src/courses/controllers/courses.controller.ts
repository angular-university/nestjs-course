import {Controller, Get} from '@nestjs/common';
import {Course} from '../../../../shared/course';
import {findAllCourses} from '../../../db-data';


@Controller()
export class CoursesController {


    @Get('/api/courses')
    async findAllCourses(): Promise<Course[]> {

        return findAllCourses();

    }


}

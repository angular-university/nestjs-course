import {Controller, Get} from '@nestjs/common';
import {CoursesService} from '../services/courses.service';
import {Course} from '../../../../shared/course';


@Controller("courses")
export class CoursesController {

  constructor(private coursesService: CoursesService) {

  }

  @Get()
  async findAllCourses(): Promise<Course[]> {

    return this.coursesService.findAll();

  }


}

import {Controller, Get, HttpException, Param} from '@nestjs/common';
import {CoursesRepository} from '../services/courses-repository.service';
import {Course} from '../../../../shared/course';


@Controller("courses")
export class CoursesController {

  constructor(private coursesDb: CoursesRepository) {

  }

  @Get()
  async findAllCourses(): Promise<Course[]> {
    return this.coursesDb.findAll();
  }

  @Get(':courseUrl')
  async findCourseByUrl(@Param('courseUrl') courseUrl:string): Promise<Course> {

    console.log("Finding by courseUrl", courseUrl);

    const results = await this.coursesDb.findCoursesByUrl(courseUrl);

    if (results.length == 0) {
    throw new HttpException("Could not find course for url " + courseUrl, 404);
    }

    return results[0];

  }


}

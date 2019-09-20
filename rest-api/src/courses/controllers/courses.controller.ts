import {Body, Controller, Get, HttpException, Param, Put} from '@nestjs/common';
import {CoursesRepository} from '../services/courses-repository.service';
import {Course} from '../../../../shared/course';


@Controller("courses")
export class CoursesController {

  constructor(private coursesDb: CoursesRepository) {

  }

  @Get()
  async findAllCourses(): Promise<Course[]> {

    console.log("Finding all courses");

    return this.coursesDb.findAll();
  }

  @Get(':courseUrl')
  async findCourseByUrl(@Param('courseUrl') courseUrl:string): Promise<Course> {

    console.log("Finding by courseUrl", courseUrl);

    const course = await this.coursesDb.findCourseByUrl(courseUrl);

    if (!course) {
    throw new HttpException("Could not find course for url " + courseUrl, 404);
    }

    return course;

  }


  @Put(":courseId")
  async updateCourse(@Param("courseId") courseId:number, @Body() changes: Partial<Course>) : Promise<Course> {

    console.log("updating course");

    if (changes) {

    }

    return this.coursesDb.updateCourse(courseId, changes);

  }


}

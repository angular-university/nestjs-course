import {Body, Controller, Delete, Get, HttpException, Param, Post, Put} from '@nestjs/common';
import {Course} from '../../../../shared/course';
import {CoursesRepository} from '../repositories/courses-repository';


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
  async updateCourse(@Param("courseId") courseId:string, @Body() changes: Partial<Course>) : Promise<Course> {

    console.log("updating course");

    if (changes._id) {
        throw new HttpException("Can't update course Id ", 500);
    }

    return this.coursesDb.updateCourse(courseId, changes);
  }

  @Delete(":courseId")
  async deleteCourse(@Param("courseId") courseId:string) {

    console.log("deleting course");

    return this.coursesDb.deleteCourse(courseId);
  }

  @Post()
  async createCourse(@Body() course:Partial<Course>) {

    console.log("creating new course");

    return this.coursesDb.addCourse(course);
  }


}

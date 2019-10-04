import {Body, Controller, Get, Param, Put, Req, Res} from '@nestjs/common';
import {Course} from '../../../../shared/course';
import {findAllCourses} from '../../../db-data';
import {CoursesRepository} from '../repositories/courses.repository';
import {Request, Response} from 'express';



@Controller("courses")
export class CoursesController {

    constructor(private coursesDB: CoursesRepository) {

    }

    @Get()
    async findAllCourses(): Promise<Course[]> {
        return this.coursesDB.findAll();
    }

    @Put(':courseId')
    async updateCourse(
        @Param("courseId") courseId:string,
        @Body() changes: Partial<Course>):Promise<Course> {

        console.log("updating course");

        return this.coursesDB.updateCourse(courseId, changes);
    }



}

import {Controller, Get, HttpException, Query} from '@nestjs/common';
import {LessonsRepository} from '../repositories/lessons.repository';


@Controller("lessons")
export class LessonsController {

  constructor(private lessonsDb: LessonsRepository) {

  }

  @Get()
  async searchLessons(
    @Query('courseId') courseId:string,
    @Query('sortOrder') sortOrder = "asc",
    @Query('pageNumber') pageNumber = "0",
    @Query('pageSize') pageSize = "3"
  ) {

    if (!courseId) {
       throw new HttpException("courseId must be defined", 500);
    }

    if (sortOrder != 'asc' && sortOrder != "desc") {
      throw new HttpException('sortOrder must be asc or desc', 500);
    }

    return this.lessonsDb.search(courseId, sortOrder, parseInt(pageNumber), parseInt(pageSize));

  }



}

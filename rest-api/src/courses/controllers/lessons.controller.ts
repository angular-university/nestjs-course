import {BadRequestException, Controller, Get, HttpException, HttpStatus, ParseIntPipe, Query, UseFilters} from '@nestjs/common';
import {LessonsRepository} from '../repositories/lessons.repository';


@Controller("lessons")
//@UseFilters(new GlobalExceptionFilter())
export class LessonsController {

  constructor(private lessonsDb: LessonsRepository) {

  }

  @Get()
  async searchLessons(
    @Query('courseId') courseId:string,
    @Query('sortOrder') sortOrder = "asc",
    @Query('pageNumber', ParseIntPipe) pageNumber = 0,
    @Query('pageSize', ParseIntPipe) pageSize = 3
  ) {

    if (!courseId) {
       throw new BadRequestException("courseId must be defined");
    }

    if (sortOrder != 'asc' && sortOrder != "desc") {
      throw new BadRequestException('sortOrder must be asc or desc');
    }

    return this.lessonsDb.search(courseId, sortOrder, pageNumber, pageSize);

  }



}

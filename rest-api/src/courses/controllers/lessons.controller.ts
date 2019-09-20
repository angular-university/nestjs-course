import {Controller, Get, HttpException, Query} from '@nestjs/common';


@Controller("lessons")
export class LessonsController {

  constructor() {

  }

  @Get()
  async searchLessons(
    @Query('courseId') courseId:string,
    @Query('sortOrder') sortOrder:string,
    @Query('pageNumber') pageNumber:string,
    @Query('pageSize') pageSize:string
  ) {

    if (!courseId) {
       throw new HttpException("courseId must be defined", 500);
    }

    if (sortOrder != 'asc' && sortOrder != "desc") {
      throw new HttpException('sortOrder must be asc or desc', 500);
    }




  }



}

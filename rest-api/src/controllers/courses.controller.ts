import {Controller, Get} from '@nestjs/common';


@Controller("courses")
export class CoursesController {

  @Get()
  findAllCourses() {

    return [{
      test: "Hello World"
    }]

  }


}

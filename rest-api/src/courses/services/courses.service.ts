import {Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import {Course} from '../../../../shared/course';
import {InjectModel} from '@nestjs/mongoose';



@Injectable()
export class CoursesService {

  constructor(@InjectModel('Course') private courseModel: Model<Course>) {

  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find();
  }

}

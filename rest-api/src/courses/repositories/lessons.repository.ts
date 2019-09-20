import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Lesson} from '../../../../shared/lesson';


@Injectable()
export class LessonsRepository {


  constructor(@InjectModel('Lesson') private lessonModel: Model<Lesson>) {

  }


  async search(courseId: string, sortOrder: string, pageNumber: number, pageSize:number): Promise<Lesson[]> {
    return this.lessonModel.find({courseId}, null, {
      //skip: pageNumber * pageSize,
      //limit: pageSize,
      //sort: {
      //  seqNo: sortOrder
      //}
    });

  }


}

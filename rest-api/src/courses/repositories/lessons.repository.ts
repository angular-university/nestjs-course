import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Schema} from 'mongoose';
import {Lesson} from '../../../../shared/lesson';

var ObjectId = require('mongodb').ObjectID;

@Injectable()
export class LessonsRepository {


  constructor(@InjectModel('Lesson') private lessonModel: Model<Lesson>) {

  }


  async search(courseId: string, sortOrder:string, pageNumber: number, pageSize:number): Promise<Lesson[]> {

    console.log("searching for lessons ", courseId, sortOrder, pageNumber, pageSize);

    return this.lessonModel.find({course:courseId}, null, {
      skip: pageNumber * pageSize,
      limit: pageSize,
      sort: {
        seqNo: sortOrder
      }
    });

  }


}

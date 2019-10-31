import {Injectable} from '@nestjs/common';
import {Lesson} from '../../../../shared/lesson';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class LessonsRepository {

    constructor(@InjectModel("Lesson")
                private lessonsModel: Model<Lesson>) {

    }

    search(courseId:string,
          sortOrder:string,
           pageNumber: number,
           pageSize:number) {

        console.log("searching for lessons ", courseId, sortOrder, pageNumber, pageSize);

        return this.lessonsModel.find({
            course: courseId
        }, null,
            {
                skip: pageNumber * pageSize,
                limit: pageSize,
                sort: {
                    seqNo: sortOrder
                }
            });

    }

}

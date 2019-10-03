import {Injectable} from '@nestjs/common';
import {Course} from '../../../../shared/course';

import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class CoursesRepository {


    constructor(@InjectModel('Course')
                private courseModel: Model<Course>) {

    }

    async findAll(): Promise<Course[]> {
        return this.courseModel.find();
    }
}




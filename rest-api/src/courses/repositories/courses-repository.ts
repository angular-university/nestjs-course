import {Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import {Course} from '../../../../shared/course';
import {InjectModel} from '@nestjs/mongoose';



@Injectable()
export class CoursesRepository {

  constructor(@InjectModel('Course') private courseModel: Model<Course>) {

  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find();
  }

  async findCourseByUrl(courseUrl: string): Promise<Course> {
    return this.courseModel.findOne({url:courseUrl});
  }

  async updateCourse(courseId: string, changes: Partial<Course>): Promise<Course> {
    return this.courseModel.findOneAndUpdate({ _id: courseId }, changes, {new:true});
  }

  deleteCourse(courseId: string) {
    return this.courseModel.deleteOne({_id: courseId});
  }

  async addCourse(course: Partial<Course>) {

    // another way of creating a model, when we want to save it immediately
    //const result = await this.courseModel.create(course);

    // this allows to manipulate the model in memory, before saving it
    const newCourse = this.courseModel(course);

    await newCourse.save();

    return newCourse.toObject({versionKey:false});
  }

}

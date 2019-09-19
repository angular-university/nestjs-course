
import * as mongoose from 'mongoose';



export const CourseSchema = new mongoose.Schema({
  seqNo:Number,
  url:String,
  iconUrl: String,
  courseListIcon: String,
  description: String,
  longDescription: String,
  category: String,
  lessonsCount: Number,
  promo: Boolean
});





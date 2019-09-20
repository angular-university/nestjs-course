

import * as mongoose from 'mongoose';

export const LessonSchema = new mongoose.Schema({
  description: String,
  duration: String,
  seqNo: Number,
  courseId: String
});





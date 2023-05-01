import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
});

export const Task = model('tasks', TaskSchema);

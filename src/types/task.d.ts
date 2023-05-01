import { ObjectId } from 'mongoose';

export interface TaskI {
  title: string;
  description: string;
}

export interface DeleteTaskI {
  id: ObjectId;
}

export interface UpdateTaskI {
  id: ObjectId;
  title?: string;
  description?: string;
}

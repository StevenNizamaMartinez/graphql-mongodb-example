import { ObjectId } from 'mongoose';
import { Task } from '../models/task.models';
import { handleError } from '../helper/helper';
import { TaskI, UpdateTaskI } from '../types/task';

export const getTasks = async () => {
  try {
    return await Task.find();
  } catch (error: Error | unknown) {
    handleError(error, 'Error getting a tasks');
  }
};

export const createTask = async ({ title, description }: TaskI) => {
  try {
    const task = new Task({ title, description });
    const newTask = await task.save();
    return newTask;
  } catch (error: Error | unknown) {
    handleError(error, 'Error creating a task');
  }
};

export const deleteTask = async (id: ObjectId) => {
  try {
    return await Task.findByIdAndRemove(id);
  } catch (error: Error | unknown) {
    handleError(error, 'Error deleting a task');
  }
};

export const updateTask = async ({ id, title, description }: UpdateTaskI) => {
  try {
    return await Task.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
  } catch (error: Error | unknown) {
    handleError(error, 'Error updating a task');
  }
};

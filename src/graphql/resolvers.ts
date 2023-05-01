import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from '../controller/task.controller';
import { DeleteTaskI, TaskI, UpdateTaskI } from '../types/task';
export const resolvers = {
  Query: {
    hello: () => 'Servidor graphql funcionando',
    getTasks: getTasks,
  },
  Mutation: {
    createTask: (_: unknown, { title, description }: TaskI) =>
      createTask({ title, description }),
    deleteTask: (_: unknown, { id }: DeleteTaskI) => deleteTask(id),
    updateTask: (_: unknown, { id, title, description }: UpdateTaskI) =>
      updateTask({ id, title, description }),
  },
};

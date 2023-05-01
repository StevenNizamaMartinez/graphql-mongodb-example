import { connect } from 'mongoose';

export const connectDb = async () => {
  try {
    const response = await connect('mongodb://127.0.0.1:27017/tasks');
    console.log(`Database is host at ${response.connection.name}`);
  } catch (error) {
    console.error(error);
  }
};

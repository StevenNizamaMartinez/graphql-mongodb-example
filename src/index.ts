import { start } from './app';
import { connectDb } from './database/db';

connectDb();
start();

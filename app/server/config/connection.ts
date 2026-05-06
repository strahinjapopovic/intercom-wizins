import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/<databaseName>');
const dbConnect = async () => {
  try {
    const MONGO_URI = process.env.MONGODB_URI;
    if (!MONGO_URI) {
      throw new Error("Please define the MONGODB_URI environmental variable");
    } else {
      const con = await mongoose.connect(MONGO_URI);
      console.log(`\n✅ MongoDB Connected Successfully!\n\nDBNAME: <mongodbName>,\nHOST: <hostName>\n`);
    }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}
export default dbConnect;
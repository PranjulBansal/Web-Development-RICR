import mongoose, { Mongoose } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected at", conn.connection.host);
  } catch (error) {
    console.log("Mongoose Connection Error",error);
    process.exit(1)
  }
};

export default connectDB;
import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDb is connected at: ",conn.connection.host);
    } catch (error) {
        console.error("MongoDb connection error",error);
        process.exit(1);
    }
}
export default connectDB;

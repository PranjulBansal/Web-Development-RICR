import mongoose from 'mongoose';
const connectDB=async()=>{
    try {
        const result=await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected at", result.connection.host);
    } catch (error) {
        console.log("MongoDB connection Error");
        console.log(error);
        process.exist(1);
    }
}
export default connectDB;
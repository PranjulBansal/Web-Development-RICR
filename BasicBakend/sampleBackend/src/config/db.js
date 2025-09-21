import mongoose from 'mongoose';
const connectDB=async()=>{
     try {
        const result=await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb connected at ",result.connection.host)
        
     } catch (error) {
        console.log("Mongodb connection error");
        console.log(error)
        process.exist(1);//it will automatically stop execution of npm run dev without asking yes or no
     }
}
export default connectDB;
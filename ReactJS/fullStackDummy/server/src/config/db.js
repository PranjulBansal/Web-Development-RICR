import mongoose from 'mongoose';
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected:",conn.connectiom.host);


    }
    catch(error)
    {
        console.log("Error connecting Db:",error);
        process.exit(1);
    }
}
export default connectDB;
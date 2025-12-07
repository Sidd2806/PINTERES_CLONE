import mongoose from "mongoose"

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("MongoDb is connected succesfully")
    }
    catch(err){
        console.log("Mongodb Connection error",err)
    }
};
export default connectDB;
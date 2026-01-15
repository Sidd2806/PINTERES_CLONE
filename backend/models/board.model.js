import mongoose, { Schema }  from "mongoose"
const boardSchema= new Schema({
    title:{
        type:String,
        require:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
 },
 {
    timestamps:true
 }
)
export default mongoose.model("Board",boardSchema)
import mongoose, { Schema }  from "mongoose"
const commentSchema= new Schema({
    description:{
        type:String,
        require:true
    },
    pin:{
        type:Schema.Types.ObjectId,
        ref:"pin",
        required:true,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
 },
 {
    timestamps:true
 }
)
export default mongoose.model("Comment",commentSchema)
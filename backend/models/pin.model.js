import mongoose, { Schema }  from "mongoose"



const pinSchema= new Schema({
    media:{
        type:String,
        require:true
    },
    width:{
        type:Number,
        require:true
    },
    height:{
        type:String,
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    link:{
        type:String,
        require:true
    },
    board:{
        type:Schema.Types.ObjectId,
        ref:"Board"
    },
    tags:{
        type:[String],
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
export default mongoose.model("Pin",pinSchema)
import mongoose, { Schema }  from "mongoose"



const userSchema= new Schema({
    displayName:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    img:{
        type:String,
    },
    hashedPassword:{
        type:String,
        require:true
    },
 },
 {
    timestamps:true
 }
)
export default mongoose.model("User",userSchema)
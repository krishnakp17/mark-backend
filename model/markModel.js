const mongoose=require("mongoose")
const markSchema=new mongoose.Schema(
    {
       
        name:String,
        rollno:String,
        total_mark:String,
        grade:String
    }
)
module.exports=mongoose.model("mark",markSchema)

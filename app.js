const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const markRoute=require("./controllers/markRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://krishna:krishna17@cluster0.yiellsj.mongodb.net/markDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
app.use("/api/mark",markRoute)
app.listen(3000,()=>{
    console.log("server running")
})

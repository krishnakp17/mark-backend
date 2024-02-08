const express=require("express")
const markModel=require("../model/markModel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let mark=new markModel(data)
    let result=await mark.save()
    res.json(
        {status:"success"}
    )
})
router.get("/viewall",async(req,res)=>{
    let data=await markModel.find()
    res.json(data)
})
router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await markModel.find(input)
    res.json(data)
})


module.exports=router

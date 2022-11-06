const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const { urlencoded } = require("express")
const app=express()
app.use(express.json())
app.use(urlencoded())
app.use(cors())
mongoose.connect(("mongodb://localhost:27017/mytodo-prt"),{
    useNewUrlParser: true,
    useUnifiedTopology:true
},()=>console.log("DB is connected"))
//schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
//model
const User= mongoose.model("User",userSchema)
//routes
app.get("/get",(req,res)=>{
    res.send("hello world")
})
//login
app.post("/",(req,res)=>{
 const {email,password}=req.body
 User.findOne({email:email},(user)=>{
  if(user){
    if(password===user.password){
      res.send({message:"Login Successfully"})
    }else{
      res.send({message:"Invalid Password"})
    }
  }
 })
})
//register
app.post("/register",(req,res)=>{
   const {name,email,password}=req.body
   User.findOne({email:email},(user)=>{
    if(user){
      res.send({message:"User already registered"},user)
    }else{
      const user=new User({
        name:name,
        email:email,
        password:password
      })
      user.save(err=>{
        if(err){
            if(err){
                res.send(err)
            }else{
                res.send({message:"Regesterd Successfully"},user)
            }
        }
      })
    }
   })
   
})

app.listen(4000,()=>{
  console.log("Post at 4000")
})
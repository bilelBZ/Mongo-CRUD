const express = require('express')
const connectDB = require('./config/connectDB')

require('dotenv').config({path:'./config/.env'})
const Peoples = require('./config/models/useSchema')
const app =express()
app.use(express.json())
connectDB()

app.post('/user/post',async(req,res)=>{
    const {name,email,password}=req.body;
    
    try {
       const newUser=new Peoples({name,email,password})
       await newUser.save();
       res.send(newUser) 
    } catch (error) {
        console.error(error)
    }
})
app.get('/user/get',async(req,res)=>{
    try {
        const users = await Peoples.find()
        res.send(users)
    } catch (error) {
        console.error(error)
        
    }
})
app.get('/user/get/:id',async(req,res)=>{
    try {
        const users =await  Peoples.findById(req.params.id)
         
        res.send(users)
    } catch (error) {
        console.error(error)
        
    }
})
app.put('/user/put/:id',async(req,res)=>{
    try {
        const updatedUser = await Peoples.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(updatedUser)
    } catch (error) {
        console.error(error)
        
    }
})
app.delete('/user/delete:id',async(req,res)=>{
    try {
        const deletedUser = await Peoples.findByIdAndDelete(req.params.id);
        res.send(deletedUser )
    } catch (error) {
        console.error(error)
    }
})
const PORT = process.env.PORT ||5000
app.listen(PORT,(err)=>err?console.error(err):console.log(`server is running on port :${PORT}`))

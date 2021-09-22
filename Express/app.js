const express = require("express")

const app = express();
const port= 80;

app.get("/", (req,res)=>{
    res.send("Homepage in my first express app")
})
app.post("/about", (req,res)=>{
    res.send("About page of my first express app")
})
app.get("/services", (req,res)=>{
    res.status(200).send("Services page of my first express app")
})
app.get("/contact", (req,res)=>{
    res.send("Conatact page of my first express app")
})


app.listen(port,()=>{
    console.log(`application started successfully on port ${port}`)
})
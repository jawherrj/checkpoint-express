const express = require("express");
const { get } = require("https");
const app = express();
const path=require("path")
const port = 3000;

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`serveur is run in ${port}`)
);
const jawher = [
  { name: "jojo", stand: "no_stand", age: 28,id:1 },
  { name: "gorno", stand: "gold", age: 19,id:2 },
  { name: "joske", stand: "diamond", age: 16,id:3},
];
app.get("/jawher",(req,res)=>{
    res.send(jawher)
})
app.get("/",(req,res)=>{
    var option = {root:path.join(__dirname)}
    res.sendFile("/public/index.html",option)
})
// app.use(express.static(path.join(__dirname,"public")))


app.get("/contactus",(req,res)=>{
  var option = {root:path.join(__dirname)}
  res.sendFile("/public/contact_us.html",option)
})
app.get("/ourservices",(req,res)=>{
  var option = {root:path.join(__dirname)}
  res.sendFile("/public/our_services.html",option)
})

app.get("/closed",(req,res)=>{
  var option = {root:path.join(__dirname)}
  res.sendFile("/public/closed.html",option)
})


const date = new Date();
const jour = date.getDay()

if(jour  ==0 || jour==6 ){
  app.get("/",(req,res)=>{
   
    res.redirect("closed")
  })
}


const H=date.getHours(); 
if (H > 17 || H < 9 ){
  app.get("/",(req,res)=>{
   
    res.redirect("closed")
  })
}
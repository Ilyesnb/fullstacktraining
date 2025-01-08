const express = require("express")
const app = express()
const PORT = 5090
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
const blogs = [
    {id:1,title:"blog-1",body:"This is the body of blog number one."},
    {id:2,title:"blog-2",body:"This is the body of blog number two."},
    {id:3,title:"blog-3",body:"This is the body of blog number three."}
]
app.get("/",(req,res)=>{
    res.render("home",{blogs})
})
app.get("/create",(req,res)=>{
    res.render("create")
})
app.post("/create",(req,res)=>{
    const {title,body} = req.body
    const id = blogs.length +1
    const newPost = {id,title,body}
    blogs.push(newPost)
    res.redirect("/")
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT} `);
})
const express = require('express')
const app=express();
const path = require('path')
const userModel = require('./models/user')

app.set('view engine','ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/read', async (req,res)=>{
    let users = await userModel.find();
    res.render('read',{users})
})

app.get('/delete/:id', async (req, res) =>{
    const users = await userModel.findOneAndDelete({_id:req.params.id})
    res.redirect('/read')
})

app.post('/create', async (req, res) => {
    let {name , email, image}=req.body;
    const userCreated = await userModel.create({
        name:name,
        email:email,
        image:image,
    })
    res.send(userCreated)
})

app.listen(3000)
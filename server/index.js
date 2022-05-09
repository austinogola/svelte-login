const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const port=3005
const user_model=require('./user_model')
const { response } = require('express')


app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send('Hello Guys')
})

app.get('/items',(req,res)=>{
    res.status(200).send(user_model.items)
})

app.get('/users',(req,res)=>{
    user_model.getUsers()
        .then(response=>{
            res.status(200).send(response)
            console.log(response);
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Issue from './models/Issue'
import Tank from './models/Tank'

const app = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/issues', {useNewUrlParser: true})
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("Database connection successful");
    
})

router.route('/issues').get((req,res) => {
    Issue.find((err, issues) => {
        if(err)
            console.log(err)
        else
            res.json(issues)
    })
})

router.route('/issues/:id').get((req,res) => {
    Issue.findById(req.params.id,(err,issue)=>{
        if (err)
            console.log(err);
        else (issue)
            res.json(issue)
    })
})

router.route('/issue/delete/:id').get((req,res)=>{
    Issue.findByIdAndRemove({_id: req.params.id},(err,issue)=>{
        if (err)
            res.json(err)
        else 
            res.json('removed successfully')
    })
})

router.route('/create').post((req,res)=>{
    let issue = new Issue(req.body)
    issue.save()
    .then(issue=>(res.status(200).json("added successfully")))
    .catch(err=>{res.status(400).send("Failed to create new issue")})
})

router.route('/test').post((req,res)=>{
    let test = new Tank(req.body)
    test.save().then(res.json("added successfully"))
})

app.use('/',router);
app.listen(4000,()=>console.log("server running on 4000"));
const express = require('express')
const cors = require('cors')
const app = express()

const connectDB = require('./db/connection')
const bookRouter = require('./routes/book')

const data = [
    {
        id:1,
        name:'alson' 
    },
    {
        id:2,
        name:'saliipa' 
    },

]

app.use(cors())
app.use(express.json())
app.use('/api/v1/books',bookRouter)
app.get('/test',(req,res)=>{
    res.json({data})
})

const port = 5000

const start = async ()=>{
    try {
        await connectDB('mongodb+srv://salipa:margaret@cluster0.5k5uk.mongodb.net/lms_db?retryWrites=true&w=majority')
        app.listen(port,()=>{
            console.log(`http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
// mvc : model view controller
// view is from react
// model -> data definition ,schema
// controller -> 1.methods(main functionality) 2.route(redirection functions) 3.middleware(check before sending response)
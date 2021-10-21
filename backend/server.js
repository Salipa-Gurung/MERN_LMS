require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const connectDB = require('./db/connection')
const bookRouter = require('./routes/book')
const supplierRouter = require('./routes/supplier')
const userRouter = require('./routes/user')

app.use(cors())
app.use(express.json())
app.use('/api/v1/books',bookRouter)
app.use('/api/v1/suppliers', supplierRouter)
app.use('/api/v1/users', userRouter)


const port = 5000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
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
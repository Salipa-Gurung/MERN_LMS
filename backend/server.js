const express = require('express')
const cors = require('cors')
const app = express()

const data = [
    {
        id:1,
        name:'alson' 
    },
    {
        id:2,
        name:'salipa' 
    },

]

app.use(cors())
app.use(express.json())
app.get('/test',(req,res)=>{
    res.json({data})
})

const port = 5000
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
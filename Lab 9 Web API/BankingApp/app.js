import express from 'express'

//port number
const port = 3000

const app = express()

//two types [dynamic , static]
app.use(express.static('public'))
//web services [routes]
app.get('/api/sayhi', (req, res)=>{
    res.send('Welcome to the server side')
})

app.listen(port, ()=>{
    console.log(`Server started @http://localhost:${port}`)
})
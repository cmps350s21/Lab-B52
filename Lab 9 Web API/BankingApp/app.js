import express from 'express'
import fs from 'fs-extra'

//port number
const port = 3000
const app = express()

//two types [dynamic , static]
app.use(express.static('public'))

//web services [routes]
//Reading
app.get('/api/accounts', async (req, res)=>{
    //query string
    console.log(req)
    const type = req.query.type
    const accounts = await fs.readJson('./data/accounts.json')
    let filtered = accounts.filter(acc=>acc.acctType == type)
    res.json(filtered)
})

//creating , adding new instance/resource
app.post('/api/accounts', (req, res)=>{
    res.send('We create a new account')
})

//updating an existing resource
app.put('/api/accounts', (req, res)=>{
    res.send('We update the account')
})

//deleting , removing resource from the server
app.delete('/api/accounts', (req, res)=>{
    res.send('We will delete the account')
})

//CRUD operations on

app.listen(port, ()=>{
    console.log(`Server started @http://localhost:${port}`)
})
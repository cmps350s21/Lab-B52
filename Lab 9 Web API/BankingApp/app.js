import express from 'express'
import fs from 'fs-extra'

//port number
const port = 3000
const app = express()

//two types [dynamic , static]
app.use(express.static('public'))

//a middleware
app.use(express.json())

//web services [routes]
//Reading
app.get('/api/accounts', async (req, res) => {
    //query string
    const type = req.query.type
    const accounts = await fs.readJson('./data/accounts.json')
    let filtered = accounts.filter(acc => acc.acctType == type)
    res.json(filtered)
})

app.get('/api/accounts/:acctNo', async (req, res) => {
    const acctNo = req.params.acctNo
    const accounts = await fs.readJson('./data/accounts.json')
    const account = accounts.find(acc => acc.accountNo == acctNo)
    // res.json(account)
    res.send('/api/accounts/:acctNo')
})

//creating , adding new instance/resource
app.post('/api/accounts', async (req, res) => {
    const account = req.body
    const accounts = await fs.readJson('./data/accounts.json')

    accounts.push(account)
    await fs.writeJson('./data/accounts.json', accounts)
    res.send('We create the new account for you')
})

//updating an existing resource
app.put('/api/accounts', async (req, res) => {
    const account = req.body
    console.log(account)
    const accounts = await fs.readJson('./data/accounts.json')

    const index = accounts.findIndex(acc => acc.accountNo == account.accountNo)
    if (index >= 0) {
        accounts[index] = account
        await fs.writeJson('./data/accounts.json', accounts)
        res.json(accounts[index])
    }else{
        res.send('This account does not exit')
    }
})

//deleting , removing resource from the server
app.delete('/api/accounts', (req, res) => {
    res.send('We will delete the account')
})

//CRUD operations on

app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})
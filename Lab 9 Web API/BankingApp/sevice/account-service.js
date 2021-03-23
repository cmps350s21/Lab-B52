import fs from "fs-extra";
import {fileURLToPath} from 'url'
const url = new URL('../data/accounts.json' , import.meta.url)
const filePath = fileURLToPath(url)

class AccountService {

    async getAccounts(req, res) {
        //query string
        const type = req.query.type
        const accounts = await fs.readJson(filePath)
        let filtered = accounts.filter(acc => acc.acctType == type)
        res.json(filtered)
    }

    async addAccount(req, res) {
        const account = req.body
        const accounts = await fs.readJson(filePath)

        accounts.push(account)
        await fs.writeJson(filePath, accounts)
        res.send('We create the new account for you')
    }

    async updateAccount(req, res) {
        const account = req.body
        console.log(account)
        const accounts = await fs.readJson(filePath)

        const index = accounts.findIndex(acc => acc.accountNo == account.accountNo)
        if (index >= 0) {
            accounts[index] = account
            await fs.writeJson(filePath, accounts)
            res.json(accounts[index])
        } else {
            res.send('This account does not exit')
        }
    }

    async getAccount(req, res) {
        const acctNo = req.params.acctNo
        const accounts = await fs.readJson(filePath)
        const account = accounts.find(acc => acc.accountNo == acctNo)
        // res.json(account)
        res.send('/api/accounts/:acctNo')
    }

    async deleteAccount(req, res) {
        const accountNo = req.params.accNo
        const accounts = await fs.readJson(filePath)

        const filtered = accounts.filter(acc => acc.accountNo != accountNo)
        await fs.writeJson(filePath, filtered)
        res.send(`Account No : ${accountNo} has been successfully deleted`)

    }
    async addTransaction(req, res) {
        const accountNo = req.params.accNo
        res.send('To be completed next week')
    }
}

export default AccountService
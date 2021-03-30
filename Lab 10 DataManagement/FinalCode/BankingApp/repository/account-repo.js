import fs from "fs-extra";
import {fileURLToPath} from 'url'
const url = new URL('../data/accounts.json' , import.meta.url)
const filePath = fileURLToPath(url)

import Account from '../model/account.js'
import Transaction from '../model/transaction.js'

class AccountRepo {
    async getAccounts(type){
        if(type && type != 'All')
            return Account.find({acctType : type})
        else
            return Account.find()
    }
    async addAccount(account){
        return Account.create(account)
    }
    async updateAccount(updatedAccount){
        const accounts = await fs.readJson(filePath)

        const index = accounts.findIndex(acc => acc.accountNo == account.accountNo)
        if (index >= 0) {
            accounts[index] = updatedAccount
            await fs.writeJson(filePath, accounts)
            return accounts[index]
        } else {
            return {error : 'account does not exist'}
        }
    }
    async getAccount(accNo) {
        const accounts = await fs.readJson(filePath)
        const account = accounts.find(acc => acc.accountNo == accNo)
        return account
    }
    async deleteAccount(accountNo) {
        const accounts = await fs.readJson(filePath)
        const filtered = accounts.filter(acc => acc.accountNo != accountNo)
        await fs.writeJson(filePath, filtered)
        return {message : 'Account deleted'}
    }
    async addTransaction(transaction){
        //will be added to the json file
    }
}

export default new AccountRepo()
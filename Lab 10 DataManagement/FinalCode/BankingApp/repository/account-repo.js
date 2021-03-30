import {fileURLToPath} from 'url'
import Account from '../model/account.js'
import Transaction from '../model/transaction.js'

const url = new URL('../data/accounts.json', import.meta.url)
const filePath = fileURLToPath(url)

class AccountRepo {
    async getAccounts(type) {
        if (type && type != 'All')
            return Account.find({acctType: type})
        else
            return Account.find()
    }

    async addAccount(account) {
        return Account.create(account)
    }

    async updateAccount(updatedAccount) {
        return Account.findByIdAndUpdate(updatedAccount._id, updatedAccount)
    }

    async getAccount(accNo) {
        return Account.findOne({_id: accNo})
    }

    async deleteAccount(accNo) {
        return Account.findByIdAndDelete(accNo)
    }

    async addTransaction(transaction) {
        const account = await this.getAccount(transaction.accNo)
        if (transaction.transType == 'Deposit')
            account.balance += transaction.amount
        else
            account.balance -= transaction.amount

        const newTransaction = await Transaction.create(transaction)
        await account.save()

        return newTransaction
    }

    async getTransaction(accNo) {
        return Transaction.find({accNo}).populate('accNo')
    }
}

export default new AccountRepo()
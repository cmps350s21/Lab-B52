//web services [routes]
//Reading
import express from 'express'
import AccountService from "./sevice/account-service.js";

const accountService = new AccountService()

const router = express.Router()

router.route('/accounts')
    .get(accountService.getAccounts)
    .post(accountService.addAccount)
    .put(accountService.updateAccount)

router.route('/accounts/:acctNo')
    .get(accountService.getAccount)
    .delete(accountService.deleteAccount)

router.route('/accounts/:accNo/trans')
    .post(accountService.addTransaction)

export default router
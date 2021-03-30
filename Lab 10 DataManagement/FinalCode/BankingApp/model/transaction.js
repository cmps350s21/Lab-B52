import mongoose from "mongoose";
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    accNo : {
        type : Schema.Types.ObjectId,
        ref : 'Account',
        required : [true, 'accNo is a required field']
    },
    transType :{
        type : String,
        enum : ['Deposit' , 'Withdraw'],
        required : [true , 'Transaction type is required field']
    },
    amount : {
        type : Number,
        min : [0, 'You can not have a negative amount'],
        required : [true, 'Amount is a required field']
    }
})

export default mongoose.model('Transaction', transactionSchema)
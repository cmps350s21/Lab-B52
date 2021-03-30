import mongoose from "mongoose";
const Schema = mongoose.Schema

const accountSchema = new Schema({
    acctType : {
        type : String,
        enum : ['Current' , 'Saving'],
        required : [true, 'Account is a required field']
    },
    balance : {
        type : Number,
        min : [0, 'You can not have a negative balance'],
        required : [true, 'Balance is a required field']
    }
})

//create the model from this schema and export
export default mongoose.model('Account', accountSchema)
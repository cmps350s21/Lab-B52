import mongoose from "mongoose";

const Schema = mongoose.Schema

const options = {
    toJSON: {
        virtuals: true
    }
}
const accountSchema = new Schema({
    acctType: {
        type: String,
        enum: ['Current', 'Saving'],
        required: [true, 'Account Type is a required field']
    },
    balance: {
        type: Number,
        min: [0, 'You can not have a negative balance'],
        required: [true, 'Balance is a required field']
    }
}, options)
//methods to our accountSchema
accountSchema.virtual('accountNo').get(function () {
    return this._id
})
accountSchema.virtual('interestRate').get(function () {
    return this.balance * 0.05
})

//create the model from this schema and export
export default mongoose.model('Account', accountSchema)
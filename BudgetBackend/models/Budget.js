//importing mongoose module
const mongoose = require('mongoose')
//import schema
const Schema = mongoose.Schema;

//budgetid for unique id of each  budget
//expense = name for expenditure(rent, groceries, etc.)
//amount = amount spent
//transaction = credit or debit
//transaction Date = date of transaction
let budgetSchema = new Schema(
    {
        budgetId: {
            type: String,
            unique: true
        },
        expense: {
            type:String,
            default:''
        },
        amount: {
            type:Number,
            default: 0
        },
        transaction: {
            type: String,
            default:''
        },
        transactionDate: {
            type:Date,
            default:Date.now
        }
    }
)

module.exports= mongoose.model('Budget', budgetSchema);
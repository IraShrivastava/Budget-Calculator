const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib');
const time = require('./../libs/timeLib');
const logger = require ('./../libs/loggerLib');
const check =require('./../libs/checkLib')
//import the model here
const BudgetModel = mongoose.model('Budget')

let getAllBudget = ( req,res ) => {
    BudgetModel.find()
    .select('-__v -_id')
    .lean()
    .exec((err,result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Failed To Find Budget Details',500,null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Budget Found','Budget Controller: getAllBudget')
            let apiResponse = response.generate(true, 'No Budget Found',404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Budget Details Found',200,result)
            res.send(apiResponse)
        }
    })
}
let viewByBudgetId = (req,res) => {
    BudgetModel.findOne({ 'budgetId' : req.params.budgetId}, (err, result) => {
        if (err) {
            console.log('Error Occured')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('Budget Not Found')
            let apiResponse = response.generate(true, 'Budget Not Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info("Budget found successfully","BudgetController:ViewBudgetById",5)
            //console.log('Budget Found Successfully')
            let apiResponse = response.generate(false, 'Budget Found Successfully', 200, result)
            res.send(apiResponse)

        }
    })
}
let viewByExpense = ( req,res ) => {
    BudgetModel.find({'expense': req.params.expense }, (err,result) => {
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('Budget Not Found')
            let apiResponse = response.generate(true, 'Budget Not Found', 404, null)
            res.send(apiResponse)
        } else {
            console.log('Budget Found Successfully')
            let apiResponse = response.generate(false, 'Budget Found Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}
let viewByTransaction = (req,res) => {
    BudgetModel.find({ 'transaction' : req.params.transaction }, (err,result) => {
        if (err) {
            console.log('Error Occured')
            logger.error(`Error Occured: ${err}`, 'Database',10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            console.log('Budget Not Found')
            let apiResponse = response.generate(true, 'Budget Not Found', 404, null)
            res.send(apiResponse)
        } else {
            console.log('Budget Found Successfully')
            let apiResponse = response.generate(false, 'Budget Found Successfully', 200, result)
            res.send(apiResponse)

        }
    })
}
let deleteBudget = (req,res) => {
    console.log("inside delete budget")
    console.log("BUDGET ID")
    console.log(req.params.budgetId)
    BudgetModel.remove({ 'budgetId': req.params.budgetId }, (err,result) => {
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            console.log('Budget Not Found')
            let apiResponse = response.generate(true, 'Budget Not Found', 404, null)
            res.send(apiResponse)
        } else {
            console.log('Budget Deletion Success')
            let apiResponse = response.generate(false, 'Budget Found Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}
let editBudget = (req,res) => {
    let options = req.body;
    console.log(options);
    BudgetModel.update({ 'budgetId' : req.params.budgetId }, options, { multi: true}).exec((err,result)=> {
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Budget Not Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Budget Found Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}
let addBudget = (req,res) => {
    var today = Date.now()
    let budgetId = shortid.generate()

    let newBudget = new BudgetModel({
        budgetId: budgetId,
        expense: req.body.expense,
        amount: req.body.amount,
        transaction: req.body.transaction,
        transactionDate: today
    })

    newBudget.save((err,result) => {
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Budget Added Successfully', 200, result)
            res.send(apiResponse)
        }
    })
}
module.exports ={
    getAllBudget : getAllBudget,
    viewByBudgetId : viewByBudgetId,
    viewByExpense : viewByExpense,
    viewByTransaction : viewByTransaction,
    deleteBudget : deleteBudget,
    editBudget : editBudget,
    addBudget : addBudget
}


/*

*/
const express = require('express')
const router = express.Router();
const budgetController = require("./../controllers/budgetController")
const appConfig = require("./../config/appConfig")


module.exports.setRouter = function(app){

    let baseUrl = appConfig.apiVersion+'/budget';
    
    app.get(baseUrl+'/all',budgetController.getAllBudget);
    
    /**
	 * @api {get} /api/v1/budget/all Get all budgets
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * 
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "All Budget Details Found",
		"status": 200,
		"data": [
					{
                        expense: "String",
                        amount: number,
                        transaction: "String",
                        budgetId: "String",
                        transactionDate: "date"
                    },
                    {
                        expense: "String",
                        amount: number,
                        transaction: "String",
                        budgetId: "String",
                        transactionDate: "date"
                    }
				]
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Failed To Find Budget Details",
		"status": 500,
		"data": null
	   }
	 */

    app.get(baseUrl+'/view/:budgetId',budgetController.viewByBudgetId);
    
    /**
	 * @api {get} /api/v1/budget/view/:budgetId Get a single budget
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} budgetId The budgetId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Budget Found Successfully",
		"status": 200,
		"data": [
					{
                        expense: "String",
                        amount: number,
                        transaction": "String",
                        _id: "String",
                        budgetId: "String",
                        transactionDate: "Date",
                        __v: number
                    }
				]
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Error Occured.",
		"status": 500,
		"data": null
	   }
	 */

    app.get(baseUrl+'/view/by/expense/:expense',budgetController.viewByExpense);
    
    /**
	 * @api {get} /api/v1/budget/view/by/expense/:expense Get budget by expense
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} expense expense of the Budget should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Budget Found Successfully",
		"status": 200,
		"data": [
					{
                        expense: "String",
                        amount: number,
                        transaction: "String",
                        _id: "String",
                        budgetId: "String",
                        transactionDate: "date",
                        __v: number
                    }
				]
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Error Occured.",
		"status": 500,
		"data": null
	   }
	 */
    
    app.get(baseUrl+'/view/by/transaction/:transaction',budgetController.viewByTransaction);
    /**
	 * @api {get} /api/v1/budget/view/by/transaction/:transaction Get budget by transaction
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} transaction transaction type of the Budget should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Budget Found Successfully",
		"status": 200,
		"data": [
					{
                        expense: "String",
                        amount: number,
                        transaction: "String",
                        _id: "String",
                        budgetId: "String",
                        transactionDate: "date",
                        __v: number
                    }
				]
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Error Occured.",
		"status": 500,
		"data": null
	   }
	 */
    app.post(baseUrl+'/:budgetId/delete',budgetController.deleteBudget);
    /**
	 * @api {post} /api/v1/budget/:budgetId/delete Delete budget by budgetId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} budgetId budgetId of the budget passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Budget Deleted Successfully",
		"status": 200,
		"data": []
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Error Occured.",
		"status": 500,
		"data": null
	   }
	 */

    app.put(baseUrl+'/:budgetId/edit',budgetController.editBudget);
    /**
	 * @api {put} /api/v1/budget/:budgetId/edit Edit budget by budgetId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} budgetId budgetId of the budget passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Budget Found Successfully",
		"status": 200,
		"data": [
					{
                        expense: "String",
                        amount: number,
                        transaction: "String",
                        _id: "String",
                        budgetId: "String",
                        transactionDate: "date",
                        __v: number
                    }
				]
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Error Occured.",
		"status": 500,
		"data": null
	   }
	 */   

    app.post(baseUrl+'/addBudget',budgetController.addBudget);
	/**
	 * @api {post} /api/v1/budget/addBudget Create budget
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * 
	 * @apiParam {String} expense expense of the budget passed as a body parameter
	 * @apiParam {String} amount amount of the budget passed as a body parameter
	 * @apiParam {String} transaction transaction of the budget passed as a body parameter
	 * 
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Budget Created successfully",
		"status": 200,
		"data": [
					{
						expense: "String",
                        amount: number,
                        transaction: "String",
                        _id: "String",
                        budgetId: "String",
                        transactionDate: "date",
                        __v: number
					}
				]
			}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
		"error": true,
		"message": "Error Occured.,
		"status": 500,
		"data": null
	   }
	 */

}
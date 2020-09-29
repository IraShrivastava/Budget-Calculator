define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/budget/addBudget",
    "title": "Create budget",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expense",
            "description": "<p>expense of the budget passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>amount of the budget passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction",
            "description": "<p>transaction of the budget passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Budget Created successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\texpense: \"String\",\n                        amount: number,\n                        transaction: \"String\",\n                        _id: \"String\",\n                        budgetId: \"String\",\n                        transactionDate: \"date\",\n                        __v: number\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.,\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/budget.js",
    "groupTitle": "create",
    "name": "PostApiV1BudgetAddbudget"
  },
  {
    "type": "post",
    "url": "/api/v1/budget/:budgetId/delete",
    "title": "Delete budget by budgetId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "budgetId",
            "description": "<p>budgetId of the budget passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Budget Deleted Successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": []\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/budget.js",
    "groupTitle": "delete",
    "name": "PostApiV1BudgetBudgetidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/budget/:budgetId/edit",
    "title": "Edit budget by budgetId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "budgetId",
            "description": "<p>budgetId of the budget passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Budget Found Successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n                        expense: \"String\",\n                        amount: number,\n                        transaction: \"String\",\n                        _id: \"String\",\n                        budgetId: \"String\",\n                        transactionDate: \"date\",\n                        __v: number\n                    }\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/budget.js",
    "groupTitle": "edit",
    "name": "PutApiV1BudgetBudgetidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/budget/all",
    "title": "Get all budgets",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"All Budget Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n                        expense: \"String\",\n                        amount: number,\n                        transaction: \"String\",\n                        budgetId: \"String\",\n                        transactionDate: \"date\"\n                    },\n                    {\n                        expense: \"String\",\n                        amount: number,\n                        transaction: \"String\",\n                        budgetId: \"String\",\n                        transactionDate: \"date\"\n                    }\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Failed To Find Budget Details\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/budget.js",
    "groupTitle": "read",
    "name": "GetApiV1BudgetAll"
  },
  {
    "type": "get",
    "url": "/api/v1/budget/view/:budgetId",
    "title": "Get a single budget",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "budgetId",
            "description": "<p>The budgetId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Budget Found Successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n                        expense: \"String\",\n                        amount: number,\n                        transaction\": \"String\",\n                        _id: \"String\",\n                        budgetId: \"String\",\n                        transactionDate: \"Date\",\n                        __v: number\n                    }\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/budget.js",
    "groupTitle": "read",
    "name": "GetApiV1BudgetViewBudgetid"
  },
  {
    "type": "get",
    "url": "/api/v1/budget/view/by/expense/:expense",
    "title": "Get budget by expense",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expense",
            "description": "<p>expense of the Budget should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Budget Found Successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n                        expense: \"String\",\n                        amount: number,\n                        transaction: \"String\",\n                        _id: \"String\",\n                        budgetId: \"String\",\n                        transactionDate: \"date\",\n                        __v: number\n                    }\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/budget.js",
    "groupTitle": "read",
    "name": "GetApiV1BudgetViewByExpenseExpense"
  },
  {
    "type": "get",
    "url": "/api/v1/budget/view/by/transaction/:transaction",
    "title": "Get budget by transaction",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction",
            "description": "<p>transaction type of the Budget should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Budget Found Successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n                        expense: \"String\",\n                        amount: number,\n                        transaction: \"String\",\n                        _id: \"String\",\n                        budgetId: \"String\",\n                        transactionDate: \"date\",\n                        __v: number\n                    }\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/budget.js",
    "groupTitle": "read",
    "name": "GetApiV1BudgetViewByTransactionTransaction"
  }
] });

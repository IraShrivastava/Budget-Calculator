import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BudgetHttpService } from '../budget-http.service';
import { ActivatedRoute, Router } from '@angular/router'
import { EventEmitter } from '@angular/core';
import { EditItemModelComponent } from './../edit-item-model/edit-item-model.component'
@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {

  public budgetTransaction: string;
  public possibleTransaction = ["Credit", "Debit"];
  public budgetAmount: number;
  public budgetExpense: string;
  public budgetId: string;
  public budgetArray = [];
  public emitData: any;
  public updateBudgetItem: any;

  isNewItem: boolean
  @Input() item: any
  @Input() updateBudget: any
  @Output() formSubmit: EventEmitter<Object> = new EventEmitter<Object>()


  constructor(public budgetHttpService: BudgetHttpService, private _route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    //if item has a value
    if (this.item) {
      //this means that an exisitng item object was passed into this component therefore this is not a new item
      this.isNewItem = false;
      //show the transaction type, amount, expense of existing item
      this.budgetTransaction = this.item.transaction;
      this.budgetAmount = this.item.amount
      this.budgetExpense = this.item.expense
    }
    else {
      //if item does not have a value, this is a new item
      this.isNewItem = true;
    }
  }

  public addBudget(form: NgForm): any {

    let budgetData = {
      expense: this.budgetExpense,
      amount: this.budgetAmount,
      transaction: this.budgetTransaction
    }

    this.budgetArray.push(budgetData);

    //if it is a new budget
    if (this.isNewItem) {
      this.budgetHttpService.addBudget(budgetData).subscribe(

        data => {
          this.budgetId = data.data.budgetId;
          this.formSubmit.emit(this.budgetId)
          form.reset();
        },
        error => {
          console.log("Some error occured");
          console.log(error.errorMessage);
        }
      )
    }
    //if it is not a new item
    if (!this.isNewItem) {
      this.budgetHttpService.editBudget(this.item.budgetId, budgetData).subscribe(
        data => {
          this.formSubmit.emit(this.item.budgetId)
          form.reset();
        },
        error => {
          console.log("Some error occured");
          console.log(error.errorMessage);
        }
      )
    }

  }

}
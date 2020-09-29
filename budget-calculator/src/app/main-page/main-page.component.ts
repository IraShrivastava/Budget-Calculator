import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BudgetService } from './../budget.service';
import { BudgetHttpService } from './../budget-http.service'
import { AddItemFormComponent } from './../add-item-form/add-item-form.component'
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public totalBudget: number = 0;
  public newItem;

  budgetItemArray: any = []

  constructor(public budgetHttpService: BudgetHttpService) {
  }

  ngOnInit() {
  }

  //method to add budget
  addBudgetItem(budgetId: any) {
    this.budgetHttpService.getBudgetById(budgetId).subscribe(
      data => {
        this.newItem = data["data"];
        //update total budget based on transaction type
        if(this.newItem.transaction === 'Credit')
        {
          this.totalBudget +=this.newItem.amount
        }
        if(this.newItem.transaction === 'Debit')
        {
          this.totalBudget -=this.newItem.amount
        }
        this.budgetItemArray.push(this.newItem)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    
  }


  deleteItem(item: any) {
    let index = this.budgetItemArray.indexOf(item);
    this.budgetItemArray.splice(index, 1);
    //update total budget after budget deletion based on deletion
    if(item.transaction === 'Credit')
    {
      this.totalBudget -=item.amount
    }
    if(item.transaction === 'Debit')
    {
      this.totalBudget +=item.amount
    }
  }

  updateitem(updateEvent: UpdateEvent){
    this.budgetItemArray[this.budgetItemArray.indexOf(updateEvent.old)] = updateEvent.new;

    //update total budget after editing budget
    if(updateEvent.old.transaction === 'Debit')
    {
      if(updateEvent.new.transaction === 'Credit')
      {
        this.totalBudget += updateEvent.old.amount
        this.totalBudget += updateEvent.new.amount
      }
      if(updateEvent.new.transaction === 'Debit')
      {
        this.totalBudget += updateEvent.old.amount
        this.totalBudget -= updateEvent.new.amount
      }
    }
    if(updateEvent.old.transaction === 'Credit')
    {
      if(updateEvent.new.transaction === 'Credit')
      {
        this.totalBudget -=updateEvent.old.amount
        this.totalBudget +=updateEvent.new.amount
      }
      if(updateEvent.new.transaction === 'Debit')
      {
        this.totalBudget -=updateEvent.old.amount
        this.totalBudget -=updateEvent.new.amount
      }
    }

  }
  ngOnDestroy() {

  }

}

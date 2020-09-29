import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetHttpService } from './../budget-http.service'
@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.css']
})
export class EditItemModelComponent implements OnInit {
  

  //@Input() item:any

  public updateBudget: any;
  constructor(private budgetHttpService: BudgetHttpService, public dialogRef: MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item:any) { }

  ngOnInit(): void {
  }

  public editBudget(budgetId: any): any {
    this.budgetHttpService.getBudgetById(budgetId).subscribe(
      data => {
       
        this.updateBudget = data["data"]
        this.dialogRef.close(this.updateBudget)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    
  }

}

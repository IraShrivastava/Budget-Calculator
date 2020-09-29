import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';
import { AddItemFormComponent } from './../add-item-form/add-item-form.component' 
import { BudgetHttpService} from './../budget-http.service'

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItemArray: any = [];
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
 
  constructor(private budgetHttpService : BudgetHttpService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteBudget(item: any):any {
    this.delete.emit(item);
  }

  onCardClick(item: any) {
    //show the edit budget pop-up
    const dialogref= this.dialog.open(EditItemModelComponent, {
      width: '580px',
      data: item
    })
    
    dialogref.afterClosed().subscribe(result => {
      if(result) {
        //replace the item with the updated/aubmitted item from the form
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }

}

export interface UpdateEvent {
  old : any;
  new : any;   
 }
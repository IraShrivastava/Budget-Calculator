import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BudgetHttpService } from './../../budget-http.service'



@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() items: any;
  @Output() deleteBudgetClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private budgetHttpService: BudgetHttpService) { }

  ngOnInit() { }

  public deleteBudget(): any {
    this.deleteBudgetClick.emit();
    this.budgetHttpService.deleteBudgetBackend(this.items.budgetId).subscribe(
      data => { },
      error => {
        console.log("some error occured");
        console.log(error.errorMesaage);
      }
    )

  }

  onCardClick() {
    this.cardClick.emit()
  }

}
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';

import { BudgetService } from './budget.service';
import { BudgetHttpService } from './budget-http.service';
import { HttpClientModule } from '@angular/common/http';
import { EditItemModelComponent } from './edit-item-model/edit-item-model.component'

import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent}
    ]),
    HttpClientModule
  ],
  providers: [BudgetService,BudgetHttpService],
  entryComponents: [EditItemModelComponent],  
  bootstrap: [AppComponent]
})
export class AppModule { }

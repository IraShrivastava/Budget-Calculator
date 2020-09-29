import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { observable, Observable } from 'rxjs'; 
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


@Injectable()
export class BudgetHttpService {

  public balance:number;
  public baseUrl = 'http://localhost:3000/api/v1/budget';

  constructor(private _http:HttpClient) { 
  }


  private handleError(err: HttpErrorResponse){
    console.log("handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to return all the budget
  public getAllBudget() : any {
    let myResponse = this._http.get(this.baseUrl+'/all')
    console.log(myResponse)
    return myResponse;
  }

  //method to return all the credit budget
  public getCreditBudgetInformation(): any {
    let creditVar= "Credit";
    let myResponse = this._http.get(this.baseUrl+'/view/by/transaction'+'/'+creditVar);
    return myResponse;
  }

  //method to return all the debit budget
  public getDebitBudgetInformation(): any {
    let debitVar= "Debit";
    let myResponse = this._http.get(this.baseUrl+'/view/by/transaction'+'/'+debitVar);
    return myResponse;
  }

  //method to return budget by budgetId
  public getBudgetById(budgetId): any {
    let myResponse = this._http.get(this.baseUrl+'/view'+ '/' + budgetId);
    return myResponse;
  }
  
  //method to add budget
  public addBudget(budgetData) : any {
    let myResponse = this._http.post(this.baseUrl+'/addBudget',budgetData);
    return myResponse;
  }

  //method to delete budget
  public deleteBudgetBackend(budgetId):any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl+'/'+budgetId+'/delete',data)
    return myResponse
  }

  //method to edit budget
  public editBudget(budgetId, budgetData):any {
    let myResponse = this._http.put(this.baseUrl+'/'+budgetId+'/edit',budgetData)
    return myResponse;
  }

}
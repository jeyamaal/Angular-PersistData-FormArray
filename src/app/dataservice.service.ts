import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataserviceService {

  private result:boolean=false;

private messsageSource = new BehaviorSubject<string>("Default Message");
currentMessage = this.messsageSource.asObservable();

private homeValid = new BehaviorSubject<boolean>(this.result);
homeValid1=this.homeValid.asObservable();


  constructor() { }

  changeMessage(message: string) {
    this.messsageSource.next(message)
  }

  homeformValid(result:boolean){

      this.result=result; 
      this.homeValid.next(this.result);
      console.log("Result Value in dataService"+" "+this.result)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from './dataservice.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 // data='';
  
  tickMark='';
  boolValue:boolean;
  boolShowGTMDetails: any;
  subscription: Subscription;
  resutls:boolean=false;
 
  constructor(private router:Router, private data:DataserviceService){

    //this.data1.homeformValid.subscribe()

    //this.data.homeValid1.subscribe(boolValue => this.boolValue=boolValue);
    //this.data.currentMessage.subscribe(message => this.message = message)

  //   this.subscription = this.data.homeValid1.subscribe(
  //     (data:boolean) => { this.boolShowGTMDetails = data, 
  //     error => console.log(error),
  //     () => console.log("winner winner chicken dinner")
  //   }
  // ); 

 //console.log("Subscription"+this.subscription);

  if (sessionStorage.getItem("autosave")=="dass"){

      //  this.tickMark="aas";

      
       this.resutls=true;  
       console.log("Jelee");
  }


      console.log("Value in App componenet"+" "+this.boolShowGTMDetails )  
    
      console.log("Value in App componenet"+" "+this.boolValue)  
    //console.log(this.data1.homeformValid.toString());

 

   // this.data.ho.subscribe(message => this.message = message)

  }


   
  ngOnInit() {

    this.data.homeValid1.subscribe(boolValue => this.boolValue=boolValue);
    console.log(this.boolValue);

  }
    
  title = 'app';
}

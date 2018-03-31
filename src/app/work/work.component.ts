import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SchoolComponent } from '../school/school.component';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  message:string;
  constructor(private data:DataserviceService) {
  
   console.log("Hello");

   }
   
   saveAndSubmit=function(){
    // Homecomponent inputs    
    // School Component inputs
    console.log("It's Work Component"); 

   }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}

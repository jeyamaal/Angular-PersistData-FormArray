import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  public schoolForm:FormGroup;

  // @Input()
  // homeRef:HomeComponent;

  @Output() myevent = new EventEmitter();


  constructor(private schoolFB: FormBuilder, private router:Router) { 

    this.schoolForm=this.schoolFB.group({

       'schoolName':['']

    });

    this.schoolFunction();
}

  //Navigate to Work Page
   btnNextWorkClick=function(){
    this.router.navigateByUrl('/work');
    console.log(this.schoolForm);
}

  onSchoolFormSubmit(){
    console.log(this.schoolForm);
  }

  schoolFunction(){
     console.log("School Function is working");
    /**
      * Call the Home Component function -homeFunction()
    */

     //this.homeRef.homeFunction();
     //this.myevent.emit(null);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeForm:FormGroup;

  results:boolean=false;

//session2 = sessionStorage.getItem('autosave');

 //getSession=this.session2;

  constructor(private schoolFB: FormBuilder, private router:Router,private data:DataserviceService) { 

    this.homeForm=this.schoolFB.group({

       'homeName':['',Validators.required]

    });
  
//     if(this.homeForm.controls['homeName'].value==''){

//       if(this.session2 != null){

//              console.log("Session2 is not null");
//              this.homeForm=this.schoolFB.group({

             

//               'homeName':[this.getSession.valueOf(),Validators.required]
       
//            });

//       }

//       console.log('Null in formcontrolName');
// }

let formValues = sessionStorage.getItem('autosave');
    if (formValues) {
      this.applyFormValues(this.homeForm, JSON.parse(formValues));
    }




    this.onChanges(); 
  }

    //Navigate to Next Page
    btnNextHomeClick=function(){
    
      this.router.navigateByUrl('/school');
      this.onHomeFormSubmit();
    }
  
    onHomeFormSubmit(){
  
      console.log(this.homeForm);
    }
  
     
    homeFunction(){

      console.log("Home Function is Working");
    }

    functionHome(){

      alert("Hello Its Home");
    }
  
    ngOnInit() { }

  onChanges(): void { 
    this.homeForm.valueChanges.subscribe(val => {
    if (this.homeForm.valid) {
      sessionStorage.setItem("autosave",JSON.stringify(this.homeForm.value));
      this.results=true;
      this.data.homeformValid(this.results);
      //alert("Home Form is valid");
      //sessionStorage.setItem('homeFormValid', 'valid1');
      console.log("Home Value Passed"+"   "+this.results);
    } 
    
 
    
    else {
      
      this.results=false;
      alert("Home Form is invalid");
     // sessionStorage.setItem('homeFormValid', 'valid2');
      sessionStorage.clear();
    }
    });
  }

  private applyFormValues (group, formValues) {
    
    Object.keys(formValues).forEach(key => {
      let formControl = group.controls[key];
      if (formControl instanceof FormGroup) {
        this.applyFormValues(formControl, formValues[key]);
      } else {
        formControl.setValue(formValues[key]);
      }
    });
  }

}

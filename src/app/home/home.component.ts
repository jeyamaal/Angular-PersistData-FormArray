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


  constructor(private schoolFB: FormBuilder, private router:Router,private data:DataserviceService) { 

    this.homeForm=this.schoolFB.group({

       'homeName':['',Validators.required]

    });
  


// If form values are stored in  Session object Retirve those values 
 let formValues = sessionStorage.getItem('autosave');
    if (formValues) {
      this.applyFormValues(this.homeForm, JSON.parse(formValues));
    }

    // Validate the form and Save the form values in Sesion Storeage
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
        sessionStorage.setItem("autosave", JSON.stringify(this.homeForm.value));
        this.results = true;
        this.data.homeformValid(this.results);
        //alert("Home Form is valid");
        //sessionStorage.setItem('homeFormValid', 'valid1');
        console.log("Home Value Passed" + "   " + this.results);
      }



      else {

        this.results = false;
        alert("Home Form is invalid");
        // sessionStorage.setItem('homeFormValid', 'valid2');
        sessionStorage.clear();
      }
    });
  }

  // Retaining the Form Values in Form

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

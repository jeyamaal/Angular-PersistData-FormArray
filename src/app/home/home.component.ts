import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule,FormControl } from '@angular/forms';
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

       'homeName':['',Validators.required],
        advResults:this.schoolFB.array([])

    });
    
      // Initialte the advResults Form Array
      this.addAdvResults();

      // Validate the form and Save the form values in Sesion Storeage
      this.onChanges(); 

      // If form values are stored in  Session object Retirve those  
      let formValues = sessionStorage.getItem('homeDetail');
      if (formValues) {
      // console.log("Seesion Form Values"+" "+formValues);
        this.applyFormValues(this.homeForm, JSON.parse(formValues));
      // console.log("Seesion Form Values"+" "+JSON.parse(formValues));
      }
    }

    //Navigate to Next Page
    btnNextHomeClick=function(){
    
      this.router.navigateByUrl('/school');
      this.onHomeFormSubmit();
    }
  
    onHomeFormSubmit(){
      console.log(this.homeForm);
    }
  
   ngOnInit() {  }


    // Advanced Level Component
    initAdvResults() {
      return this.schoolFB.group({
        advSubjectName: [],
        advResult: [''],
        advDate:['']
         });
  }
      
      addAdvResults() {
        const control = <FormArray>this.homeForm.controls['advResults'];
        const addrCtrl = this. initAdvResults();
        control.push(addrCtrl);
    }

    removeAdvResults(i: number) {
        const control = <FormArray>this.homeForm.controls['advResults'];
        control.removeAt(i);
    }



  onChanges(): void { 
    this.homeForm.valueChanges.subscribe(val => {
      if (this.homeForm.valid) {
        // Store the home value details in Session
        sessionStorage.setItem("homeDetail", JSON.stringify(this.homeForm.value));
        var al_array= <FormArray>this.homeForm.controls['advResults'];
        //console.log("No of Arrays"+" "+this.al_array.length);
        // Store the array count in Session
        sessionStorage.setItem("alarraycount",al_array.length.toString());
        //console.log("ALArrayFormLength"+this.al_array.length.toString());
        this.results = true;
        this.data.homeformValid(this.results);
        //console.log("Home Value Passed" + "   " + this.results);
      }

      else{
        this.results = false;
       // alert("Home Form is invalid");
        sessionStorage.clear();
      }
    });
  }

 
  // Retaining the Form Values in Form
   private applyFormValues (group, formValues) {
     var alarrycount = sessionStorage.getItem('alarraycount');
     console.log("alaaeycount"+" "+alarrycount);
     
     // Empty the Form Array
     const alresults = this.homeForm.controls['advResults'] as FormArray;
      while (alresults.length) {
        alresults.removeAt(0);
      }
     
      // Initiate the Form Array
      // Other wise getting Error "Cannot find form control at index 1 at FormArray
      // https://stackoverflow.com/questions/49214357/angular2-cannot-find-form-control-at-index-1-at-formarray?rq=1

      for(var i=0;i<parseInt(alarrycount);i++)
      {
        this.addAdvResults();
      }

    
 
  Object.keys(formValues).forEach(key => {
      let formControl = group.controls[key];
          
      if (formControl instanceof FormGroup) {
        this.applyFormValues(formControl, formValues[key]);
      } 
      else{
           formControl.patchValue(formValues[key]);
          }
    });
  }

}

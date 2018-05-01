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
  }

    //Navigate to Next Page
    btnNextHomeClick=function(){
    
      this.router.navigateByUrl('/school');
      this.onHomeFormSubmit();
    }
  
    onHomeFormSubmit(){
      console.log(this.homeForm);
    }
  
    
  
    ngOnInit() { 
      
        // If form values are stored in  Session object Retirve those  
        let formValues = sessionStorage.getItem('homeDetail');
        if (formValues) {
          this.applyFormValues(this.homeForm, JSON.parse(formValues));
        }

    
    }


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
        sessionStorage.setItem("homeDetail", JSON.stringify(this.homeForm.value));
        this.results = true;
        this.data.homeformValid(this.results);
        console.log("Home Value Passed" + "   " + this.results);
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
    
    Object.keys(formValues).forEach(key => {
      let formControl = group.controls[key];
    
      if (formControl instanceof FormGroup) {
        this.applyFormValues(formControl, formValues[key]);
      } 
      // if(formControl instanceof FormArray){
      //   this.applyFormValues(formControl, formValues[key]);  
      // }
      else {
        formControl.setValue(formValues[key]);
      }
    });
  }

}

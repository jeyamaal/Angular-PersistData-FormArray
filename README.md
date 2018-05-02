# Angular App - Persist Data in Form Array Component

## Bug:
### Data is not persist in Form Array Component  

##  Solved
### Initiate the Form Array 

```
   const alresults = this.homeForm.controls['advResults'] as FormArray;
      while (alresults.length) {
        alresults.removeAt(0);
      }
      for(var i=0;i<parseInt(alarrycount);i++)
      {
        this.addAdvResults();
      }
```
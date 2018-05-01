import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'exam',
  templateUrl: './exam.component.html'
})
export class ExamComponent  {
  @Input('group')
  public advancedLevelForm: FormGroup;


}

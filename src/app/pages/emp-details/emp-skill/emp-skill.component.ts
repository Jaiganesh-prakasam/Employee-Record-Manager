import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmpDetailsService } from '../emp-details.service';
import { FormGroup, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from 'src/app/generic/control-messages/control-messages.component';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-emp-skill',
    templateUrl: './emp-skill.component.html',
    styleUrls: ['./emp-skill.component.scss'],
    imports: [
      ControlMessagesComponent,
      ReactiveFormsModule
    ],
    standalone: true
})
// Skill Info
// ------------
// Skill Sets
//   - allow user to  add multiple  skill  info
//   - skill field must be an auto complete search
//     - if skill not exist in list we have to add that skill into list
// type Array - example  [ {"skill":"Angular", rate:"2.5"]
//     - rate assume out of 10 (u can use start ration also)
//     - Validation  -  valid URL/Id
// Total Year of Experience:
//   Calculate from  work experiences
export class EmpSkillComponent {
  @Input()form: FormGroup;
  @Input()skillFormArray: FormArray;
  @Output()addSkill = new EventEmitter();
  @Output()deleteSkill = new EventEmitter();
  @Output()getSkill = new EventEmitter();
  @Output()storeNewSkill = new EventEmitter();
  constructor(public empDetailsService: EmpDetailsService) {

  }

}

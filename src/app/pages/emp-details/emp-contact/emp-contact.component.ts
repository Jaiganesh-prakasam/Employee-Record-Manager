import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { EmpDetailsService } from '../emp-details.service';
import { ControlMessagesComponent } from 'src/app/generic/control-messages/control-messages.component';
@Component({
    selector: 'app-emp-contact',
    templateUrl: './emp-contact.component.html',
    styleUrls: ['./emp-contact.component.scss'],
    imports: [
      ControlMessagesComponent,
      ReactiveFormsModule
    ],
    standalone: true
})
// Contact Info
// ------------
// Email:
//   type string;
//   Validation
//     Required, must be a valid domain
// phone:
//   type string;
//   Validation
//     Required, must be a 10 digit (format : xxx-xxx-xxxx)
// Social_Info:
//   - allow user to  add multiple  social info
//   - minimum one URL Required
//   type - example  [ {"url":"facebook/jsnuggets", type:"facebook"]
//   Validation  -  valid URL/Id , unique
export class EmpContactComponent {
  @Input() form: FormGroup;
  @Input() socialInfoFormArray: FormArray;
  @Output() addSocialInfo = new EventEmitter();
  @Output() deleteSocialInfo = new EventEmitter();
  constructor(public empDetailsService: EmpDetailsService) {
   }
}

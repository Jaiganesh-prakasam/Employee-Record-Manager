import { Component, Input } from '@angular/core';
import { EmpDetailsService } from '../emp-details.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from 'src/app/generic/control-messages/control-messages.component';
@Component({
    selector: 'app-emp-general',
    templateUrl: './emp-general.component.html',
    styleUrls: ['./emp-general.component.scss'],
    imports: [
      ControlMessagesComponent,
      ReactiveFormsModule,
    ],
    standalone: true
})
// General Info
// ------------
// FirstName:
//   type string;
//   Validation
//     Required, Min -3  Max-15 Char, Alphabets only
// LastName:
//   type string;
//   Validation
//     Required, Min -3  Max-15 Char, Alphabets only
// Full name:
//   type string;
//   -  non editable
//   -  append value from fname and lastname
// dob:
//   type string
//   Validation
//     Required, must be a valid date( >18, <80);
// age:
//   - find age by  dob;
export class EmpGeneralComponent {
  @Input() form: FormGroup;
  constructor(
    public empDetailsService: EmpDetailsService
  ) { }

  ageCalculation(date: string): number {
    if (date) {
      const dob = new Date(date);
      const diffMs = Date.now() - dob.getTime();
      const  ageDt = new Date(diffMs);
      return Math.abs(ageDt.getUTCFullYear() - 1970);
    }
  }

}

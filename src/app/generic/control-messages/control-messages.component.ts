import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { ValidationService } from '../../validation.service';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent implements OnDestroy {
  errors = new Set<string>();
  errorObject = new Object();
  private sub: Subscription;
  @Input() set control(con: FormControl) {
    this.sub = con.statusChanges.subscribe((value) => {
      if (con.errors) {
        for (const [key, value1] of Object.entries(con.errors)) {
          this.errorObject[key] = value1;
        }
        const validationErrors = Object.keys(con.errors);
        validationErrors.forEach(element => {
          this.errors.add(element);
        });

        this.errors.forEach(element => {
          const foundElement = validationErrors.find(x => x === element);
          if (!foundElement) {
            // existing error in this.errors is not found anymore in the validation errors collection
            // means the error was removed from the control
            // thus I have to remove the error from the this.errors collection
            this.errors.delete(element);
          }
        });
      }
      else {
        this.errors.clear(); // when the control has no errors then clear the internal errors set too
      }

    });
  }
    constructor(public validationService: ValidationService) { }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

  }

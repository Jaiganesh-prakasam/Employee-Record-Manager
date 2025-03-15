import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'i-wizard-steps',
  templateUrl: './i-wizard-steps.component.html',
  styleUrls: ['./i-wizard-steps.component.scss']
})
export class IWizardStepsComponent {
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() stepName: string;
  @Input() validity: Array<any>;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  constructor() { }

  previousPage() {
    this.previous.emit();
  }
  nextPage() {
    this.next.emit();
  }

  validityChecker() {
    // to return true as default when no validation needed
    if (!this.validity) {
      return false;
    } else {
      const checkValidity = this.validity
        .filter((formGroupOrControlOrArray) => formGroupOrControlOrArray.valid);
      if (checkValidity.length !== this.validity.length) {
        return true;
      } else {
        return false;
      }
    }
  }

}

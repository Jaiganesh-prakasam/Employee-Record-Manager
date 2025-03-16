import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { IWizardStepsComponent } from './i-wizard-steps/i-wizard-steps.component';
import { CommonModule } from '@angular/common';
import { WizardStepDirective } from './i-wizard-step.directive';
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'i-wizard',
    templateUrl: './i-wizard.component.html',
    styleUrls: ['./i-wizard.component.scss'],
    imports: [IWizardStepsComponent, CommonModule],
    standalone: true
})
export class IWizardComponent implements AfterContentInit {
  @Input() tabData: any[];
  @ContentChildren(WizardStepDirective) stepTemplates!: QueryList<WizardStepDirective>;
  currentStep = 0;

  ngAfterContentInit(): void {
    if (this.tabData.length !== this.stepTemplates.length) {
      throw new Error('The number of steps must match the number of step templates.');
    }
    this.tabData.forEach((step, index) => {
      step.template = this.stepTemplates.toArray()[index].template;
    });
  }

  // Check if the current step's form is valid
  isStepValid(toStepId: number): boolean {
    const step = this.tabData[toStepId];
    // if no validation required
    if (!step.formValidation) {
      return true;
    }
    // Check if any form in the step is invalid
    const hasInvalidForm = step.formValidation.some((form) => !form.valid);

    // Return true if all forms are valid, false otherwise
    return !hasInvalidForm;
  }

  stepValidityChecker(toStepId: number): void {
    for (let i = this.currentStep; i <= toStepId -1; i++) {
      if(!this.isStepValid(i)) {
        console.error(`Step ${i} is invalid. Cannot proceed to step ${toStepId}.`);
        return;
      }
    }
    // If all steps are valid, update the current step
    this.currentStep = toStepId;
    console.log(`Moved to step ${toStepId}.`);
  }

  nextWizard(): void {
    this.currentStep++;
  }
  previousWizard(): void {
    this.currentStep--;
  }
}

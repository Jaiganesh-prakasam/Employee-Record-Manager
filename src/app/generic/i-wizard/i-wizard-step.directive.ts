import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appWizardStep]',
  standalone: true
})
export class WizardStepDirective {
  constructor(public template: TemplateRef<any>) {}
}

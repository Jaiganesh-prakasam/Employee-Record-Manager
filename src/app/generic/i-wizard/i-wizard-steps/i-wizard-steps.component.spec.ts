import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IWizardStepsComponent } from './i-wizard-steps.component';

describe('IWizardStepsComponent', () => {
  let component: IWizardStepsComponent;
  let fixture: ComponentFixture<IWizardStepsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IWizardStepsComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWizardStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

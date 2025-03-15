import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IWizardComponent } from './i-wizard.component';

describe('IWizardComponent', () => {
  let component: IWizardComponent;
  let fixture: ComponentFixture<IWizardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IWizardComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

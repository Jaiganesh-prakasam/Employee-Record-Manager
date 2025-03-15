import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmpDetailsComponent } from './emp-details.component';

describe('EmpDetailsComponent', () => {
  let component: EmpDetailsComponent;
  let fixture: ComponentFixture<EmpDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [EmpDetailsComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

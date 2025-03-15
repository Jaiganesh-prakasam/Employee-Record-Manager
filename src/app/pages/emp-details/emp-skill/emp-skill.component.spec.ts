import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmpSkillComponent } from './emp-skill.component';

describe('EmpSkillComponent', () => {
  let component: EmpSkillComponent;
  let fixture: ComponentFixture<EmpSkillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [EmpSkillComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

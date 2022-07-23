import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginationContainerComponent } from './pagination-container.component';

describe('PaginationContainerComponent', () => {
  let component: PaginationContainerComponent;
  let fixture: ComponentFixture<PaginationContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

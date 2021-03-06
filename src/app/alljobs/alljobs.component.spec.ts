import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobsComponent } from './alljobs.component';

describe('ModelComponent', () => {
  let component: AllJobsComponent;
  let fixture: ComponentFixture<AllJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteTeacherComponent } from './craete-teacher.component';

describe('CraeteTeacherComponent', () => {
  let component: CraeteTeacherComponent;
  let fixture: ComponentFixture<CraeteTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraeteTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraeteTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

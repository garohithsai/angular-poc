import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPageComponentComponent } from './personal-page-component.component';

describe('PersonalPageComponentComponent', () => {
  let component: PersonalPageComponentComponent;
  let fixture: ComponentFixture<PersonalPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

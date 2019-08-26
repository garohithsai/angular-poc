import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLinkageComponent } from './forms-linkage.component';

describe('FormsLinkageComponent', () => {
  let component: FormsLinkageComponent;
  let fixture: ComponentFixture<FormsLinkageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsLinkageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLinkageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

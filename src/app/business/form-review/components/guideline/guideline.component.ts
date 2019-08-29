import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.scss']
})
export class GuidelineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  guidelineForm: FormGroup;
  navLink = 'dashboard';

  ngOnInit() {
    this.guidelineForm = this.formBuilder.group({
      formSummary : new FormGroup({}),
      fillInForm: new FormGroup({}),
      stateApprovedForm: new FormGroup({}),
      formLinkage: new FormGroup({})
    });
  }
}

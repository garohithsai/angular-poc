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

  form = {
    formId: 'OIR-B1-1804',
    formName: 'Notice of Mandatory Pre-Insurance Inspection Requirement',
    multiLine: true,
    lineOfBusiness: 'Automobile',
    otherLineOfBusiness: 'General Liability',
    coveragePart: 'Collision',
    editionDate: '05/26/2019',
    otherEditions: '04/20/2018'
  };
  ngOnInit() {
    this.guidelineForm = this.formBuilder.group({
      formSummary : new FormGroup({}),
      fillInForm: new FormGroup({}),
      stateApprovedForm: new FormGroup({}),
      formLinkage: new FormGroup({})
    });
  }
}

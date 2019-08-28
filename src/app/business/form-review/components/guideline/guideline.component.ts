import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.scss']
})
export class GuidelineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  guidelineForm: FormGroup;

  form = {
    formId: 'OIR-126',
    formName: 'Voluntary Private Passenger Non Fleet Automobile Insurance Policy',
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
  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }
}

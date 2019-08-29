import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-guideline-banner',
  templateUrl: './form-guideline-banner.component.html',
  styleUrls: ['./form-guideline-banner.component.scss']
})
export class FormGuidelineBannerComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() navigationLink: string;

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
    
  }

  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }
  navigateToReview() {
    this.router.navigate(['formSubmit']);
  }
  navigate(navLink) {
    if (navLink === 'dashboard') {
      this.navigateToDashboard();
    } else if (this.navigationLink === 'modify') {
      this.router.navigate(['guideline/:formId']);
    }
  }
}

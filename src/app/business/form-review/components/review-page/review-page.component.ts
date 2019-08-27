import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../../../common/services/router.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {

  constructor(private routerService: RouterService) { }
  public role: string;
  public displayAdmin = false;

  lobs = [
    {
      key:  'WC',
      value:  'Workers Compensation'
    },
    {
      key:  'AL',
      value:  'Automobile'
    },
    {
      key:  'GL',
      value:  'General Liability'
    }
  ];

  ngOnInit() {
    this.role = sessionStorage.getItem('userRole');
    if (this.role === 'admin') {
      this.displayAdmin = true;
    }
  }

  previousPage() {
    this.routerService.goToPreviousPage();
  }

}

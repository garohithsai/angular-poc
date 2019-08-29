import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../../../common/services/router.service';
import { Constants } from 'src/app/common/constants/constants';
import { GuideLinesDashboardModel } from 'src/app/common/interface/form-linkage-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private routerService: RouterService, private router: Router) { }
  public role: string;
  public displayAdmin = false;
  Element_Data: GuideLinesDashboardModel[] = [
    {
        formNumber: 'OIR-126', formName: 'Voluntary Private Passenger Non Fleet Automobile Insurance Policy',
        coveragePart: 'Comprehensive', lastEdited: '08/26/2019',
        updatedBy: 'John Doe', status: 'In-Progress'
    },
    {
      formNumber: 'OIR-B1-126', formName: 'Notice of Mandatory Pre-Insurance Inspection Requirement',
      coveragePart: 'Comprehensive', lastEdited: '08/26/2019',
      updatedBy: 'John Doe', status: 'In-Progress'
    },
    {
      formNumber: 'OIR-126', formName: 'Voluntary Private Passenger Non Fleet Automobile Insurance Policy',
      coveragePart: 'Comprehensive', lastEdited: '06/16/2019',
      updatedBy: 'David Smith', status: 'Pending'
    },
    {
      formNumber: 'OIR-126', formName: 'Florida Motor Vehicle Pre-Insurance Inspection Form',
      coveragePart: 'Personal injury protection', lastEdited: '05/26/2019',
      updatedBy: 'David Smith', status: 'Pending'
    },

];

  colMap =  Constants.GUIDELINES_COL_NAMES;
  columnsList =  Object.keys(Constants.GUIDELINES_COL_NAMES);
  isSortRequired = true;

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
  getRowData(event) {
    this.router.navigate(['guideline', event.formNumber]);
  }

}

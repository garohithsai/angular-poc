import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../../../common/services/common.service';
import { RouterService } from '../../../../common/services/router.service';

import { LoaderService } from 'src/app/common/services/loader.service';
import { FormBuilderService } from 'src/app/common/services/form-builder/form-builder.service';
import { PersonalPageFormGroups } from './personal-page-component.form';
import { UserRoleService } from 'src/app/common/services/user-role.service';

@Component({
  selector: 'app-personal-page-component',
  templateUrl: './personal-page-component.component.html',
  styleUrls: ['./personal-page-component.component.scss']
})
export class PersonalPageComponent implements OnInit {

  title = 'form-selection-tool';
  personalForm: FormGroup;
  isLoading = this.loaderService.isHttpServiceLoading;

  constructor(private loaderService: LoaderService,
    private http: HttpClient, private routerService: RouterService,
    private formBuilderService: FormBuilderService, private commonService: CommonService,
    private userRoleService: UserRoleService) {}
    roles = [
      {value: 'admin', viewValue: 'Admin'},
      {value: 'user', viewValue: 'User'},
    ];
  ngOnInit() {
    // Use form builder service to build form by providing a specific JSON.
    this.personalForm = this.formBuilderService.buildForm(PersonalPageFormGroups.sampleForm);
    console.log(this.personalForm);
  }

  checkRoleData(role) {
    console.log(this.personalForm.controls.role.value);
    this.commonService.loadRoleData(this.personalForm.controls.role.value)
      .subscribe(data => {
        console.log(data);
        this.userRoleService.setRole(data);
        this.routerService.goToNextPage();
      });
  }

}

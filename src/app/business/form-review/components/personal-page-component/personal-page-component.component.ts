import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../../../common/services/common.service';
import { RouterService } from '../../../../common/services/router.service';

import { LoaderService } from 'src/app/common/services/loader.service';
import { FormBuilderService } from 'src/app/common/services/form-builder/form-builder.service';
import { PersonalPageFormGroups } from './personal-page-component.form';

@Component({
  selector: 'app-personal-page-component',
  templateUrl: './personal-page-component.component.html',
  styleUrls: ['./personal-page-component.component.scss']
})
export class PersonalPageComponent implements OnInit {

  title = 'form-selection-tool';
  personalForm: FormGroup;
  isLoading = this.loaderService.isHttpServiceLoading;

  constructor(private loaderService: LoaderService, private http: HttpClient, private routerService: RouterService,
    private formBuilderService: FormBuilderService) {}
  ngOnInit() {
    /* this.personalForm = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required])
    }); */
    // Use form builder service to build form by providing a specific JSON.
    this.personalForm = this.formBuilderService.buildForm(PersonalPageFormGroups.sampleForm);
    console.log(this.personalForm);
  }

  callApi() {
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => {
        console.log(data);
        this.routerService.goToNextPage();
      });
  }

}

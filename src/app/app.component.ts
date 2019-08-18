import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from './services/loader.service';
import { CommonService } from './services/common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-poc';
  personalForm: FormGroup;
  isLoading = this.loaderService.isHttpServiceLoading;

  constructor(private loaderService: LoaderService, private commonService: CommonService) {}
  ngOnInit() {
    this.personalForm = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required])
    });
  }

  callApi() {
    this.commonService.retrieveForm({})
      .subscribe(data => {
        console.log(data);
      });
  }
}

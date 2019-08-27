import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from './common/services/loader.service';
import { CommonService } from './common/services/common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'form-selection-tool';
  personalForm: FormGroup;
  isLoading = this.loaderService.isHttpServiceLoading;

  constructor(private loaderService: LoaderService, private commonService: CommonService) { }
  ngOnInit() {
    this.callApi();
  }

  callApi() {
    this.commonService.retrieveForm('124758')
      .subscribe(data => {
        console.log(data);
      });
  }
}

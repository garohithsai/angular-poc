import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { commonService } from '../services/commonService';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-poc';
  personalForm: FormGroup;
  isLoading = this.commonService.isHttpServiceLoading;

  constructor(private commonService: commonService, private http: HttpClient) {}
  ngOnInit() {
    this.personalForm = new FormGroup({
      fName: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required])
    });
  }

  callApi() {
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => {
        console.log(data);
      })
  }
  
  
}

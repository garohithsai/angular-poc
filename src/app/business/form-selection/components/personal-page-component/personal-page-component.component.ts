import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { LoaderService } from 'src/app/common/services/loader.service';

@Component({
  selector: 'app-personal-page-component',
  templateUrl: './personal-page-component.component.html',
  styleUrls: ['./personal-page-component.component.scss']
})
export class PersonalPageComponent implements OnInit {

  title = 'angular-poc';
  personalForm: FormGroup;
  isLoading = this.loaderService.isHttpServiceLoading;

  constructor(private loaderService: LoaderService, private http: HttpClient, private router: Router) {}
  ngOnInit() {
    this.personalForm = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required])
    });
  }

  callApi() {
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['review']);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-poc';
  personalForm: FormGroup;

  ngOnInit() {
    this.personalForm = new FormGroup({
      fName: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required])
    });
  }
  
  
}

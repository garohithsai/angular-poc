import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormReviewComponent } from './form-review/form-review.component';
import { MaterialModule } from '../../material.module';
import { SharedModule } from 'src/app/shared-module';



@NgModule({
  declarations: [
    FormReviewComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    SharedModule
  ],
  providers : [
  ],
  exports: [
  ],
  bootstrap: [FormReviewComponent]
})
export class FormReviewModule { }

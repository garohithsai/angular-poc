import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuidelineComponent } from './guideline.component';
import { SharedModule } from 'src/app/shared-module';
import { GuidelineRoutingModule } from './guideline-routing.module';
import { FormsLinkageComponent } from '../forms-linkage/forms-linkage.component';
import { SearchFormsComponent } from '../search-forms/search-forms.component';
import { FormSummaryComponent } from './form-summary/form-summary.component';

@NgModule({
  imports: [
    CommonModule,
    GuidelineRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    GuidelineComponent,
    FormsLinkageComponent,
    SearchFormsComponent,
    FormSummaryComponent
  ],
  providers: []
})
export class GuidelineModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormReviewComponent } from './form-review/form-review.component';
import { MaterialModule } from '../../material.module';
import { FormsLinkageComponent } from './components/forms-linkage/forms-linkage.component';
import { TableComponentComponent } from '../../common/components/table-component/table-component.component';
import { SearchFormsComponent } from './components/search-forms/search-forms.component'



@NgModule({
  declarations: [
    FormReviewComponent,
    FormsLinkageComponent,
    TableComponentComponent,
    SearchFormsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers : [
  ],
  exports: [
  ],
  bootstrap: [FormReviewComponent]
})
export class FormReviewModule { }

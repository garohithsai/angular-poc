import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilderService } from 'src/app/common/services/form-builder/form-builder.service';
import { FormGroup, Validators } from '@angular/forms';
import { FORM_SUMMARY_FORM_CONROLS } from './form-summary.form';
/*

*/
@Component({
  selector: 'app-form-summary',
  templateUrl: './form-summary.component.html',
  styleUrls: ['./form-summary.component.scss']
})
export class FormSummaryComponent implements OnInit, OnChanges {

  constructor(private formBuilderService: FormBuilderService) { }

  @Input() formSummary: FormGroup;

  ngOnInit() {
    this.formSummary = this.formBuilderService.buildForm(FORM_SUMMARY_FORM_CONROLS);
  }

  submitForm() {
    console.log(this.formSummary);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onClassCodeSelection() {
    if (this.formSummary.get('businessCategorization').value === 'classCodeConditional') {
      this.formSummary.get('classCode').setValidators([Validators.required]);
    } else {
      this.formSummary.get('classCode').setValidators([]);
    }
  }
}

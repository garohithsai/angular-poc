import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilderService } from 'src/app/common/services/form-builder/form-builder.service';
import { FormGroup, Validators } from '@angular/forms';
import { FORM_SUMMARY_FORM_CONROLS } from './form-summary.form';
import { GuideLinesDashboardModel } from 'src/app/common/interface/form-linkage-model';
import { Constants } from 'src/app/common/constants/constants';
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
  ELEMENT_DATA: any[] = [
    {issuingPaper: 1, valid: 'AL, CA, FL, NY', notValid: 'CA, FL'},
    {issuingPaper: 1, valid: 'AL, CA, FL, NY, TX, OK, KS, GA, OR, WA', notValid: 'OK, KS, GA'},
    {issuingPaper: 1, valid: 'AL, CA, FL', notValid: 'AL, CA'},
  ];

  displayedColumns: string[] = ['issuingPaper', 'valid', 'notValid'];
  dataSource = this.ELEMENT_DATA;

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

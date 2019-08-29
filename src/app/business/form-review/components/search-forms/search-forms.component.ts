import { Component, OnInit } from '@angular/core';
import {FormLinkageModel} from '../../../../common/interface/form-linkage-model';
import { Constants } from '../../../../common/constants/constants';
import { CommonService } from '../../../../common/services/common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from '../../../../common/services/rest.service';
import { FormBuilderService } from '../../../../common/services/form-builder/form-builder.service';
import { SEARCH_FORM_CONTROLS } from './search-forms.form';

@Component({
  selector: 'app-search-forms',
  templateUrl: './search-forms.component.html',
  styleUrls: ['./search-forms.component.scss']
})
export class SearchFormsComponent implements OnInit {

  Element_Data: FormLinkageModel[] = [
    {
        number: 1, name: 'Hydrogen', editionDate: '12/12/2001', fillinStatus: 'H',
        fillingType: 'string', formCategory: 'category', guideline: 'view', complexLinkage: 'test'
    },
    {
        number: 2, name: 'Helium', editionDate: '12/12/2001', fillinStatus: 'He',
        fillingType: 'string', formCategory: 'category', guideline: 'view', complexLinkage: 'test'
    },
    {
        number: 3, name: 'Lithium', editionDate: '12/12/2001', fillinStatus: 'Li',
        fillingType: 'string', formCategory: 'category', guideline: 'view', complexLinkage: 'test'
    },
    {
        number: 4, name: 'Beryllium', editionDate: '12/12/2001', fillinStatus: 'Be',
        fillingType: 'string', formCategory: 'category', guideline: 'view', complexLinkage: 'test'
    }

];

  columnsList =  Object.keys(Constants.LINKAGE_COL_NAMES);
  deLinkName = 'Link';
  colMap = Constants.LINKAGE_COL_NAMES;
  tabButton = true;
  isSortRequired = false;

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  lineOfBusinessData: any;
  stateData: any;
  formSummary: FormGroup;
  categoryPartData: Object;

  constructor(private commonService: CommonService, private restService: RestService, private formBuilderService: FormBuilderService) { }

  ngOnInit() {
    this.formSummary = this.formBuilderService.buildForm(SEARCH_FORM_CONTROLS);
    this.setData();
  }

  formsLinkageSelectedData(data) {
    this.commonService.setLinkedForms(data);
  }

  setData() {
    this.restService.get('/api/v1/metadata/cache', '?dataSetTypes=Line of Business,State').subscribe((data) => {
      this.lineOfBusinessData = data['Line of Business'];
      this.stateData = data['State'];
    });
  }

  setCategoryPart() {
    const reqObj = {
      'dataSetType': 'Coverage Part',
      'dependencyDataSetValue': this.formSummary.get('lineOfBusiness').value
    };
    this.restService.post('/api/v1/metadata/cache', '/filter', reqObj).subscribe((data) => {
      this.categoryPartData = data['Coverage Part'];
    });
  }

  onLinkClick($event) {
    console.log(this.commonService.getLinkedForms().length);
  }

}

import { Component, OnInit } from '@angular/core';
import {FormLinkageModel} from '../../../../common/interface/form-linkage-model';
import { Constants } from '../../../../common/constants/constants';
import { CommonService } from '../../../../common/services/common.service';
import { FormControl } from '@angular/forms';

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

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // for (let i = 0; i < this.Element_Data.length ; i++) {
    //   const x = [];
    //   for (const key in this.Element_Data[i]) {
    //     if (key === 'fillinStatus' || key === 'fillingType' || key === 'formCategory') {
    //      x.push(key + ':' + this.Element_Data[i][key]);
    //     }
    // }
    // this.Element_Data[i].detailedColumn = x;
    // }
    // console.log(JSON.stringify(this.Element_Data));
  }

  formsLinkageSelectedData(data) {
    this.commonService.setLinkedForms(data);
  }

  onLinkClick($event) {
    console.log(this.commonService.getLinkedForms().length);
  }

}

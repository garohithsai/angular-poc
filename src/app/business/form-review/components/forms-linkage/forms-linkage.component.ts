import { Component, OnInit, ViewChild } from '@angular/core';
import { Constants } from '../../../../common/constants/constants';
import { FormLinkageModel } from '../../../../common/interface/form-linkage-model';
import { CommonService } from '../../../../common/services/common.service';
import { TableComponentComponent } from 'src/app/common/components/table-component/table-component.component';

@Component({
  selector: 'app-forms-linkage',
  templateUrl: './forms-linkage.component.html',
  styleUrls: ['./forms-linkage.component.scss']
})
export class FormsLinkageComponent implements OnInit {
  @ViewChild(TableComponentComponent) private tableComponent: TableComponentComponent;

  constructor(private commonService: CommonService) {
  }

   Element_Data: FormLinkageModel[];

  columnsList =  Object.keys(Constants.LINKAGE_COL_NAMES);
  deLinkName = 'De Link';
  colMap = Constants.LINKAGE_COL_NAMES;
  tabButton = true;
  isSortRequired = false;
  ngOnInit() {
  }

  formsLinkageSelectedData(data) {
    this.commonService.setDeletedLinkedForms(data);
  }


  onLinkClick(tab) {
    console.log(tab);
    this.Element_Data = this.commonService.getLinkedForms();
    this.tableComponent.setData(this.Element_Data, tab);
    console.log(this.Element_Data);
  }

}

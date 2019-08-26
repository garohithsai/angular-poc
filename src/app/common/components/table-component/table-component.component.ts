import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FormLinkageModel } from '../../interface/form-linkage-model';
import { Constants } from '../../constants/constants';
import { CommonService } from '../../services/common.service';



@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit, AfterViewInit {

  @Input() columnsList: string[];
  @ViewChild('myButton') myButton: ElementRef<HTMLElement>;
  @Input() ElementData: FormLinkageModel[];
  @Input() buttonName: string;
  @Output() selectedData = new EventEmitter<FormLinkageModel[]>();
  @ViewChildren('mat-checkbox') private mycheckBox;
  displayedColumns: string[];
  dataSource: MatTableDataSource<FormLinkageModel>;
  selection: SelectionModel<FormLinkageModel>;
  currentTab: string;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<FormLinkageModel>(this.ElementData);
    this.selection = new SelectionModel<FormLinkageModel>(true, []);
    this.displayedColumns = this.columnsList;
    this.commonService.setSearchFormData(this.ElementData);
  }

  ngAfterViewInit() {
    console.log('AfterViewInit' + this);
  }

  setData(data, tabData) {
    this.currentTab = tabData.tab.textLabel;
    if (tabData.tab.textLabel !== 'SEARCH FORMS') {
      this.commonService.setFormSearchSelectionData(this.selection);
      if (data) {
        data.forEach(element => {
          delete element.excluded;
        });
        this.dataSource = new MatTableDataSource<FormLinkageModel>(data);
        this.selection.clear();
      }
    } else {
      if (data) {
        const deletedLinkedForm = this.commonService.getDeletedLinkedForms();
        this.dataSource = new MatTableDataSource<FormLinkageModel>(this.commonService.getSearchFormData());
        this.selection = this.commonService.getFormSearchSelectionData();
        if (deletedLinkedForm) {
          deletedLinkedForm.forEach(item => {
            const index: number = this.dataSource.data.findIndex(d => d === item);
            //  this.selection.deselect(this.dataSource.data[index]);
            //  this.checkboxLabel();
            // this.selection.clear();
            // const mycheckox = this.mycheckBox.toArray();
            // //mycheckox[1].checked = false;
            this.sendSelectedData(index);
          });
        }
        // this.selection = new SelectionModel<FormLinkageModel>(false, data);
        data.forEach(element => {
          element.excluded = true;
        });

      }
    }
  }



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRowsMinusExcluded = this.dataSource.data
      .filter(row => !row.excluded)
      .length;

    return numSelected === numRowsMinusExcluded;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => {
        if (!row.excluded) {
          this.selection.select(row);
        }
      });

  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: FormLinkageModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.number + 1}`;
  }

  sendSelectedData(index?: number) {

    if (this.currentTab === 'LINKED FORMS') {
      this.removeSelectedRows();
    } else {
      this.selection.deselect(this.dataSource.data[index]);
      if (index) {
        this.selection.deselect(this.dataSource.data[1]);
      }

      const selectedFileds: FormLinkageModel[] = [];
      for (const item of this.selection.selected) {
        console.log(item);
        item.excluded = true;
        selectedFileds.push(item);
      }
      this.selectedData.emit(selectedFileds);
    }
  }

  removeSelectedRows() {
    const selectedFileds: FormLinkageModel[] = [];
    this.selection.selected.forEach(item => {
      const index: number = this.dataSource.data.findIndex(d => d === item);
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<FormLinkageModel>(this.dataSource.data);
      selectedFileds.push(item);
    });
    this.selectedData.emit(selectedFileds);
    this.selection = new SelectionModel<FormLinkageModel>(true, []);
  }

  getColumnHeaderName(column: string) {
    return Constants.LINKAGE_COL_NAMES[column];
  }


}

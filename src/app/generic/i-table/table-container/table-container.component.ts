import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITableSharedFunctionService } from '../i-table-shared-function.service';
@Component({
    selector: 'app-table-container',
    templateUrl: './table-container.component.html',
    styleUrls: ['./table-container.component.scss'],
    standalone: true
})
export class TableContainerComponent {
  @Input() tableData: any;
  @Input() settings: any;
  @Output() sortFieldName = new EventEmitter();
  constructor(public iTableSharedFunctionService: ITableSharedFunctionService) {
  }

}

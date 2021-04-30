import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TablePaginationComponent, NgbdSortableHeader } from './table-pagination/table-pagination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxLoadingModule} from 'ngx-loading';



@NgModule({
  declarations: [
    TableComponent,
    TablePaginationComponent,
    NgbdSortableHeader,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxLoadingModule,
  ],
  exports: [
    TableComponent,
    TablePaginationComponent,
    NgbdSortableHeader,

  ],
  providers: [
  ]
})
export class ComponentsModule { }

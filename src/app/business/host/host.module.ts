import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from '../../shared/pagination/pagination.module';

import {HostRoutingModule} from './host-routing.module';
import {HostComponent} from './host.component';
import {HostListComponent} from './host-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HostRoutingModule,
    PaginationModule
  ],
  declarations: [
    HostComponent,
    HostListComponent
  ],
  exports: [],
  providers: []
})
export class HostModule {
}

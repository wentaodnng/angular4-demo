import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Select2Module} from "ng2-select2";
import {ChartBusinessService} from "../../business-service/chart/chart-business.service";
import {UserSharedModule} from '../../business-shared/user/user-shared.module';
import {CustomScrollbarModule} from "../../shared/custom-scrollbar/custom-scrollbar.module";
import {PaginationModule} from "../../shared/pagination/pagination.module";

import {ChartConfigComponent} from './chart-config.component';
import {ChartRoutingModule} from "./chart-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    PaginationModule,
    Select2Module,
    UserSharedModule,
    ChartRoutingModule,
    CustomScrollbarModule
  ],
  declarations: [
    ChartConfigComponent
  ],
  exports: [],
  providers: [ChartBusinessService]
})
export class ChartModule {
}

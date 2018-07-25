import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ChartsModule} from 'ng2-charts';
import {Select2Module} from "ng2-select2";
import {UserSharedModule} from '../../business-shared/user/user-shared.module';
import {PaginationModule} from "../../shared/pagination/pagination.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardChartlistComponent} from "./dashboard.chartlist.component";
import {DashboardChartviewComponent} from './dashboard.chartview.component';

import {DashboardComponent} from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    PaginationModule,
    Select2Module,
    UserSharedModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    DashboardChartlistComponent,
    DashboardChartviewComponent
  ],
  exports: [],
  providers: []
})
export class DashboardModule {
}

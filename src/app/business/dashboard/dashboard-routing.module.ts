import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardChartlistComponent} from './dashboard.chartlist.component';
import {DashboardChartviewComponent} from './dashboard.chartview.component';

import {DashboardComponent} from './dashboard.component';

/**
 * 主页路由
 */
const dashbordRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'chartlist', component: DashboardChartlistComponent},
  {path: 'chartview', component: DashboardChartviewComponent}
]


@NgModule({
  imports: [
    RouterModule.forChild(dashbordRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}

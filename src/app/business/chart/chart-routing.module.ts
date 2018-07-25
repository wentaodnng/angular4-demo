import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChartConfigComponent} from './chart-config.component';

/**
 * 主页路由
 */
const chartRoutes: Routes = [
  {path: '', component: ChartConfigComponent},
]


@NgModule({
  imports: [
    RouterModule.forChild(chartRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChartRoutingModule {
}

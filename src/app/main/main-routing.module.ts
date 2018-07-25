import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';

/**
 * 主体路由
 */
const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'dashboard', loadChildren: 'app/business/dashboard/dashboard.module#DashboardModule'},
      {path: 'home', loadChildren: 'app/business/home/home.module#HomeModule'},
      {path: 'demo', loadChildren: 'app/business/demo/demo.module#DemoModule'},
      {path: 'user', loadChildren: 'app/business/user/user.module#UserModule'},
      {path: 'role', loadChildren: 'app/business/role/role.module#RoleModule'},
      {path: 'host', loadChildren: 'app/business/host/host.module#HostModule'},
      {path: 'chart', loadChildren: 'app/business/chart/chart.module#ChartModule'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}

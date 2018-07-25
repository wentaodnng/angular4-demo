import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HostComponent} from './host.component';
import {HostListComponent} from './host-list.component';

const hostRoutes: Routes = [
  {
    path: '', component: HostComponent,
    children: [
      {
        path: 'hostList',
        component: HostListComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(hostRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HostRoutingModule {
}

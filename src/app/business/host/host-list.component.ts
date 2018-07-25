import {Component, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AppService} from '../../app.service';

import {HttpPaginationComponent} from '../../shared/pagination/http-pagination.component';
import {ToastConfig, ToastType} from "../../shared/toast/toast-model";
import {ToastService} from "../../shared/toast/toast.service";
import {HostEditComponent} from "./host-edit.component";

@Component({
  selector: 'c-host-list',
  templateUrl: './host-list.component.html'
})
export class HostListComponent {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url: string = "";

  param: any = {
    name: 'admin',
    age: 16
  }

  dataList: Array<any> = [
    {
      hostName: 'host1',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host2',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host3',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host4',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host5',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: '2017-8-1'
    },
    {
      hostName: 'host1',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host2',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host3',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host4',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host5',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: '2017-8-1'
    },
    {
      hostName: 'host1',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host2',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host3',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host4',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: ''
    },
    {
      hostName: 'host5',
      hostIp: '192.168.0.1',
      status: '可用',
      createDate: '2017-8-1',
      updateDate: '2017-8-1'
    }

  ]


  /**
   * 修改服务器
   */
  hostInfoEdit(data) {
    const modalRef = this.ngbModalService.open(HostEditComponent, {size: 'lg', keyboard: false});
    modalRef.componentInstance.hostData = data;
    modalRef.result.then((result) => {
      this.toastService.toast(new ToastConfig(ToastType.SUCCESS, '', '修改成功！', 3000));

    }, (reason) => {

    });
  }

  pageList: Array<number> = [15, 25, 35]

  constructor(private appService: AppService, private ngbModalService: NgbModal, private toastService: ToastService) {
    this.appService.titleEventEmitter.emit("服务器列表");
  }

  onDataChanged($event) {
    console.info($event);
  }
}

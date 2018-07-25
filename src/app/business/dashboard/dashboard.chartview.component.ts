import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from "../../app.service";

import {ModalService} from '../../shared/modal/modal.service';
import {ToastConfig, ToastType} from "../../shared/toast/toast-model";
import {ToastService} from "../../shared/toast/toast.service";


@Component({
  selector: 'c-dashboard-chartview',
  templateUrl: './dashboard.chartview.component.html',
  styleUrls: ['./dashboard.chartview.component.scss']
})
export class DashboardChartviewComponent implements OnInit {

  /**
   * 初始化
   */
  ngOnInit() {
    this.randomize();
  }

  constructor(private modalService: ModalService, private ngbModalService: NgbModal, private appService: AppService, private param: ActivatedRoute,
              private toastService: ToastService) {
    this.appService.titleEventEmitter.emit("我的图表");
    this.toastService.toast(new ToastConfig(ToastType.INFO, '', '传入查询参数：  ' + this.param.queryParams["value"].queryId, 3000));

  }

  // lineChart

  public initLength: number = 60;
  public lineChartData: Array<any> = [
    {data: new Array(this.initLength), label: 'CPU'}
  ];
  public lineChartLabels: Array<any> = new Array(this.initLength);
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.lineChartLabels = new Array(this.initLength);
    let _lineChartData: Array<any> = new Array(this.initLength);
    for (let i = 0; i < this.initLength; i++) {
      _lineChartData[i] = Math.floor((Math.random() * 100) + 1);
      this.lineChartLabels[i] = i;
    }
    this.lineChartData[0].data = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}

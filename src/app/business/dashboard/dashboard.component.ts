import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ModalService} from '../../shared/modal/modal.service';
import {PasswordEditComponent} from "../../business-shared/user/password-edit.component";


@Component({
  selector: 'c-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userTipClose: boolean = false;
  isTodoCollapsed: boolean = false;
  isNoticeCollapsed: boolean = false;
  isNeedReadCollapsed: boolean = false;
  isCommonFuncCollapsed: boolean = false;


  /**
   * 初始化
   */
  ngOnInit() {
    this.randomize();
  }

  constructor(private modalService: ModalService, private ngbModalService: NgbModal) {
  }


  /**
   * 修改密码
   */
  passwordEdit() {
    this.ngbModalService.open(PasswordEditComponent, {size: 'lg'}).result.then((result) => {

    }, (reason) => {

    });
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

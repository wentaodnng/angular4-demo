import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Select2OptionData} from "ng2-select2";
import {AppService} from '../../app.service';
import {HttpPaginationComponent} from '../../shared/pagination/http-pagination.component';


@Component({
  selector: 'c-dashboard-chartlist',
  templateUrl: './dashboard.chartlist.component.html',
  styleUrls: ['./dashboard.chartview.component.scss']
})
export class DashboardChartlistComponent implements OnInit {
  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  /**
   * 初始化
   */
  ngOnInit() {
  }

  url: any = "";

  param: any = {
    name: 'admin',
    age: 16
  }

  dataList: Array<any> = [
    {
      projectName: 'project1',
      hostIp: '192.168.0.1',
      chartName: '图表1',
      createDate: '2017-8-1',
      chartType: '曲线图'
    },
    {
      projectName: 'project2',
      hostIp: '192.168.0.1',
      chartName: '图表2',
      createDate: '2017-8-1',
      chartType: '柱状图'
    },
    {
      projectName: 'project3',
      hostIp: '192.168.0.1',
      chartName: '图表3',
      createDate: '2017-8-1',
      chartType: '饼状图'
    }
  ]


  pageList: Array<number> = [15, 25, 35];

  constructor(private appService: AppService, private ngbModalService: NgbModal, private router: Router) {
    this.appService.titleEventEmitter.emit("我的监控");
  }

  onDataChanged($event) {
    console.info($event);
  }

  options2: Select2Options = {
    placeholder: '请选择...',
    width: '100%',
    theme: "bootstrap",
    language: {
      "noResults": function () {
        return "搜索不到数据..";
      }
    }
  };

  public exampleData: Array<Select2OptionData> = [
    {
      id: 'basic1',
      text: '项目组1'
    },
    {
      id: 'basic2',
      disabled: true,
      text: '项目组2'
    },
    {
      id: 'basic3',
      text: '项目组3'
    },
    {
      id: 'basic4',
      text: '项目组4'
    }
  ];

  public showChart(data) {
    this.router.navigate(['/app/dashboard/chartview'], {queryParams: {queryId: 110}});
  }

  public addChart() {
    this.router.navigate(['app/chart']);
  }

}

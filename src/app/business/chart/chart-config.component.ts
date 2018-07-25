import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Select2OptionData} from "ng2-select2";
import {AppService} from "../../app.service";
import {ChartBusinessService} from "../../business-service/chart/chart-business.service";

import {ModalService} from '../../shared/modal/modal.service';
import {ToastConfig, ToastType} from "../../shared/toast/toast-model";
import {ToastService} from "../../shared/toast/toast.service";
import {ChartConfigModel, TableColumn} from "./chart-model";


@Component({
  selector: 'c-chart-config',
  templateUrl: './chart-config.component.html',
  styleUrls: ['./chart-config.component.scss']
})
export class ChartConfigComponent implements OnInit {


  /**
   * 初始化
   */
  ngOnInit() {
    // this.websqlOpenDB();
  }

  public step: number = 1;
  public chartConfigModel: ChartConfigModel;

  constructor(private modalService: ModalService, private ngbModalService: NgbModal, private appService: AppService,
              private toastService: ToastService, private chartBusinessService: ChartBusinessService) {
    this.appService.titleEventEmitter.emit("添加监控");
    this.chartConfigModel = new ChartConfigModel();
    this.chartConfigModel.groupId = '1';
    this.chartConfigModel.hostId = '1';
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

  multOptions: Select2Options = {
    placeholder: '请选择...',
    multiple: true,
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
      id: '1',
      text: '项目组1'
    },
    {
      id: '2',
      disabled: true,
      text: '项目组2'
    },
    {
      id: '3',
      text: '项目组3'
    },
    {
      id: '4',
      text: '项目组4'
    }
  ];

  public hostData: Array<Select2OptionData> = [
    {
      id: '1',
      text: 'host1'
    },
    {
      id: '2',
      disabled: true,
      text: 'host2'
    },
    {
      id: '3',
      text: 'host3'
    },
    {
      id: '4',
      text: 'host4'
    }
  ];

  public nextStep() {
    if (this.step === 2) {
      this.tableData = new Array<Select2OptionData>(this.chartConfigModel.tableColumnVOS.length);
      for (let i = 0; i < this.chartConfigModel.tableColumnVOS.length; i++) {
        this.tableData.push({id: i.toString(), text: this.chartConfigModel.tableColumnVOS[i].colAliase});
      }
    }

    if (this.step === 3) {
      this.toastService.toast(new ToastConfig(ToastType.SUCCESS, '图表', ' 配置成功', 3000));
      this.chartBusinessService.sendConfig(this.chartConfigModel);
      return;
    }
    this.step++;
    console.log(JSON.stringify(this.chartConfigModel));
  }

  public lastStep() {
    this.step--;
  }

  public sshData: string[] = new Array();
  dataString: string = "";

  public tryGetData() {
    this.dataString = "Cpu:20:Mem:10\rCpu:30:Mem:10\rCpu:10:Mem:25";
    this.sshData = this.dataString.split("\r");

    let separator: string = ":";
    let firstRow = this.sshData[0];
    let defineCol: Array<string> = firstRow.split(separator);
    for (let i = 0; i < defineCol.length; i++) {
      const tabColumn: TableColumn = new TableColumn();
      tabColumn.colName = defineCol[i];
      tabColumn.referenceName += i.toString();
      this.chartConfigModel.tableColumnVOS.push(tabColumn);
    }
    console.log(JSON.stringify(this.chartConfigModel.tableColumnVOS));
  }

  public divoptions: any = {
    axis: 'x',
    theme: 'minimal-dark',
    autoDraggerLength: true
  }

  public colTypeData: Array<Select2OptionData> = [
    {
      id: '1',
      text: 'int'
    },
    {
      id: '2',
      text: 'varchar'
    },
    {
      id: '3',
      text: 'date'
    }
  ];

  public updateTypeSelected($event, data) {
    data.colType = $event.value;
  }

  public updateGroupOrHost($event, type) {
    if (type === 0) {
      this.chartConfigModel.groupId = $event.value;
    } else if (type === 1) {
      this.chartConfigModel.hostId = $event.value;
    }
  }

  public websqlOpenDB() {
    /*数据库有就打开 没有就创建*/
    /*let dataBase = openDatabase('websql', '1.0', 'websql test', 2 * 1024 * 1024, function () {
    });
    if (dataBase) {
      alert("数据库创建/打开成功!");
      dataBase.transaction(function (tx) {
        /!* tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
         tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
         tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.runoob.com")');*!/
        // tx.executeSql('drop table LOGS');
      });
    } else {
      alert("数据库创建/打开失败！");
    }
    return dataBase;*/
  }

  public functionData: Array<Select2OptionData> = [
    {
      id: '1',
      text: 'count'
    },
    {
      id: '2',
      text: 'sum'
    },
    {
      id: '3',
      text: 'avg'
    }
  ];

  public tableData: Array<Select2OptionData>;

}

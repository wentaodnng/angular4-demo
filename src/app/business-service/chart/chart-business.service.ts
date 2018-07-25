import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import {Router} from '@angular/router';
import {ChartConfigModel} from "../../business/chart/chart-model";
import {HttpService} from "../../shared/http/http.service";
import {ToastConfig, ToastType} from "../../shared/toast/toast-model";
import {ToastService} from "../../shared/toast/toast.service";

@Injectable()
export class ChartBusinessService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private httpService: HttpService, private toastService: ToastService, private router: Router, private http: Http) {
  }

  sendConfig(chartConfigModel: ChartConfigModel) {
    let that = this;
    debugger;
    this.httpService.post('test/testStartSpark', JSON.stringify(chartConfigModel), function (successful, data, res) {
      if (successful) {
        that.router.navigate(['/app/dashboard/chartlist']);
      }
    }, function (successful, msg, err) {
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      that.toastService.toast(toastCfg);
    });
  }

}

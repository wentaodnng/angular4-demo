import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {HttpService} from '../shared/http/http.service';
import {ToastConfig, ToastType} from '../shared/toast/toast-model';

import {ToastService} from '../shared/toast/toast.service';


@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private toastService: ToastService, private httpService: HttpService, private formBuilder: FormBuilder) {
    let userNameFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    let passwordFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));

    this.loginForm = this.formBuilder.group({
      userName: userNameFc,
      password: passwordFc
    });
  }

  /**
   * 初始化
   */
  ngOnInit() {

  }


  /**
   * 登录
   */
  login() {
    console.info(this.loginForm);
    if (this.loginForm.valid) {
      /*let that = this;
      let userVO: Object = {};
      userVO["username"] = this.loginForm.value.userName;
      userVO["password"] = this.loginForm.value.password;
      this.httpService.postFormData("user/login", userVO, function (successful, data, res) {
        console.info(successful);
        console.info(data);
        console.info(res);
        if (successful) {
          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', that.loginForm.value.userName + '，登录成功!', 3000);
          that.toastService.toast(toastCfg);
          that.router.navigate(['/app/home']);
        }
      }, function (successful, msg, err) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
        that.toastService.toast(toastCfg);
      });*/


      /*this.httpService.postFormData("http://127.0.0.1:8082/user/login", {
        'userName': this.loginForm.value.userName,
        'passWord': this.loginForm.value.passWord
      }, function (successful, data, res) {
        console.info(successful);
        console.info(data);
        console.info(res);
        if (successful) {
          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', this.loginForm.value.userName + '，登录成功!', 3000);
          that.toastService.toast(toastCfg);
          that.router.navigate(['/app/home']);
        }
      }, function (successful, msg, err) {
         const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
         that.toastService.toast(toastCfg);
      });*/


      const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '百变小咖，登录成功!', 2000);
      this.toastService.toast(toastCfg);
      this.router.navigate(['/app/home']);

    }
  }


}

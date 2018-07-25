import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ToastService} from '../../shared/toast/toast.service';
import {CustomValidators} from '../../shared/custom-validator/custom-validator'

/**
 * 修改密码组件
 */
@Component({
  selector: 'c-user-edit',
  templateUrl: './user-edit.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UserEditComponent {


  constructor(public activeModal: NgbActiveModal, private toastService: ToastService, private formBuilder: FormBuilder, private ngbModalService: NgbModal) {
    let oldPasswordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    let passwordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    let certainPasswordFc = new FormControl('', CustomValidators.equalTo(passwordFc));
  }

  /**
   * 上传
   */
  ok(): void {
    this.close();
  }

  /**
   * 关闭
   */
  close(): void {
    this.activeModal.dismiss({status: 'closed'});
  }


}

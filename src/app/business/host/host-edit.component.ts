import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CustomValidators} from '../../shared/custom-validator/custom-validator'

import {ToastService} from '../../shared/toast/toast.service';

/**
 * 修改Host组件
 */
@Component({
  selector: 'c-host-edit',
  templateUrl: './host-edit.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HostEditComponent implements OnInit {
  @Input() hostData;

  ngOnInit(): void {
    console.log(JSON.stringify(this.hostData));
  }


  constructor(public activeModal: NgbActiveModal, private toastService: ToastService, private formBuilder: FormBuilder, private ngbModalService: NgbModal) {
    let oldPasswordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    let passwordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    let certainPasswordFc = new FormControl('', CustomValidators.equalTo(passwordFc));
  }

  /**
   * 上传
   */
  ok(): void {
    // this.close();
    this.activeModal.close(this.hostData);
  }

  /**
   * 关闭
   */
  close(): void {
    this.activeModal.dismiss({status: 'closed'});
  }


}

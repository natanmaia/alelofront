import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MyToastrService {

  constructor(private toastr: ToastrService) { }

  //TOASTR
  showSuccess(msg) {
    this.toastr.success(msg, 'Sucesso!', {
      timeOut: 3000,
      progressBar: true
    });
  }

  showError(msg) {
    this.toastr.error(msg, 'Oops!', {
      timeOut: 3000,
      progressBar: true
    });
  }

  showWarning(msg) {
    this.toastr.warning(msg, 'Alerta!', {
      timeOut: 3000,
      progressBar: true
    });
  }

  showInfo(msg) {
    this.toastr.info(msg, "", {
      timeOut: 3000,
      progressBar: true
    });
  }

}

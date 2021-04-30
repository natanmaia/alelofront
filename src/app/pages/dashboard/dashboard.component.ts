import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { MyToastrService } from 'src/app/services/my-toastr.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  subscript: Subscription
  formAdd: FormGroup

  constructor(
    private base: BaseService,
    private toastr: MyToastrService
    ) { }

  ngOnInit() {
  
  }

}

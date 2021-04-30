import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { MyToastrService } from 'src/app/services/my-toastr.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  subscript: Subscription
  formAdd: FormGroup

  constructor(
    private base: BaseService,
    private toastr: MyToastrService
    ) { }

  ngOnInit() {
  
  }

}

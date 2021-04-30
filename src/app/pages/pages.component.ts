import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyToastrService } from '../services/my-toastr.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  subscript: Subscription
  formAdd: FormGroup

  constructor(
    private base: BaseService,
    private toastr: MyToastrService
    ) { }

  ngOnInit() {
    this.subscript = this.base.getAll('vehicles').subscribe((response: any) => {
      
      console.log(response)
    }, error => {
      if (error.status == 500) {
        this.toastr.showError("Error no servidor, por favor, verifique disponibilidade!");
      }
    })
  }

}

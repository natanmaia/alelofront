import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { MyToastrService } from 'src/app/services/my-toastr.service';

@Component({
  selector: 'app-vehicles-index',
  templateUrl: './vehicles-index.component.html',
  styleUrls: ['./vehicles-index.component.scss']
})
export class VehiclesIndexComponent implements OnInit {

  constructor
  (
    private base: BaseService,
    private modalService: NgbModal,
    private toastr: MyToastrService
  ) {
}

modalRef: NgbModalRef;

public loading = false;

vehicles: any = null;

props = {
  head: [
    { head1: 'Placa', head2: 'plate' },
    { head1: 'Modelo', head2: 'model' },
    { head1: 'Fabricação', head2: 'manufacturer' },
    { head1: 'Status', head2: 'status' },
    { head1: 'Ações', head2: '' },
  ],
  body: []
};


sub = new Subscription();

ngOnInit() {
  this.getVehicles();
}

getVehicles() {
  this.loading = true;
  this.sub = this.base.getAll('vehicles').subscribe((response: any) => {
    if (response) {
      this.props.body = response.content;
      this.loading = false;
    }
  }, error => {
    if (error.status == 500) {
      this.loading = false;
      this.toastr.showError('Error no servidor, por favor, verifique disponibilidade!');
    }
  });
}

viewEditvehicles(id, content) {
  this.loading = true;
  this.sub = this.getVehicle(id).subscribe(
    (response: any) => {
      this.vehicles = response;
      this.openModal(content);
      this.loading = false;
    }
  );
}

getVehicle(id) {
  return this.base.getById('vehicles', id);
}

create(content) {
  this.vehicles = null;
  this.openModal(content);
}

delete(c) {
  this.loading = true;
  this.base.delete('vehicles', this.vehicles.id).subscribe(
    (reponse: any) => {
        this.toastr.showSuccess('Apagado com sucesso!');
        this.ngOnInit()
      this.loading = false;
      c('Close')
    }
  );
}

openModal(content) {
  this.modalService.open(content, { size: 'lg' });
}

openModalDelete(id, content) {
  this.modalRef = this.modalService.open(content, { size: 'sm' });
  this.vehicles = id;
}

ngOnDestroy() {
  this.sub.unsubscribe();
}


}

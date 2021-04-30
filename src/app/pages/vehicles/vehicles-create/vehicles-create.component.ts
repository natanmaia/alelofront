import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { MyToastrService } from 'src/app/services/my-toastr.service';

@Component({
  selector: 'app-vehicles-create',
  templateUrl: './vehicles-create.component.html',
  styleUrls: ['./vehicles-create.component.scss']
})
export class VehiclesCreateComponent implements OnInit {

  @Output() d = new EventEmitter()
  @Output() atualizaLista = new EventEmitter()
  @Input() vehicles: any = null;

  loading = false;
  subscript: Subscription
  style = {
    model: '',
    plate: '',
    manufacturer: '',
    color: '',
  };

  usuario: any = null;

  formAddEdit: FormGroup;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private apiService: BaseService, private toastr: MyToastrService) { }

  ngOnInit() {
    this.formAddEdit = this.formBuilder.group({
      id:'',
      model: '',
      plate: '',
      manufacturer: '',
      color: '',
      status: true,
    })

    if (this.vehicles) {

      this.loadDataForm();
    }
  }

  openModal(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  create(content) {
    this.usuario = null;
    this.openModal(content);
  }

  loadDataForm() {
    this.formAddEdit.controls['id'].setValue(this.vehicles.id);
    this.formAddEdit.controls['model'].setValue(this.vehicles.model);
    this.formAddEdit.controls['plate'].setValue(this.vehicles.plate);
    this.formAddEdit.controls['manufacturer'].setValue(this.vehicles.manufacturer);
    this.formAddEdit.controls['color'].setValue(this.vehicles.color);
    this.formAddEdit.controls['status'].setValue(this.vehicles.status);
  }

  save() {
    this.loading = true;
    this.validaResposta(this.apiService.save('vehicles', this.formAddEdit.value));
  }

  update() {
    this.loading = true;
    this.validaResposta(this.apiService.update('vehicles', this.vehicles.id, this.formAddEdit.value));
  }

  validaResposta(obs: Observable<any>) {
    this.subscript = obs.subscribe((response: any) => {
      if (response) {
        // console.log(response.meta.status_code);
        this.atualizaLista.emit();
        this.d.emit();
        this.loading = false;
        this.toastr.showSuccess((this.vehicles) ? 'Atualizado com sucesso!' : 'Criado com com sucesso!');
        // this.formAdd.reset();

      } else {
        this.loading = false;
        // console.log("ERROR CODE: " + response.meta.status_code);
        this.toastr.showError('Ocorreu um problema ao ' + ((this.vehicles) ? 'Atualizar' : 'Cadastrar'));

      }

    }, error => {
      if (error.status == 500) {
        this.loading = false;
        this.toastr.showError("Error no servidor, por favor, verifique disponibilidade!");
      }
    });
  }

}

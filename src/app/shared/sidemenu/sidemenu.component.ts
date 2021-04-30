import {Component, OnInit} from '@angular/core';
import {MyToastrService} from 'src/app/services/my-toastr.service';
import {FormBuilder} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BaseService} from 'src/app/services/base.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  public samplePagesCollapsed = true;

  public isMenuCollapsed = true;

  collapsed = true;

  subscript: Subscription;

  constructor(
    private base: BaseService,
    private router: Router,
  ) {
  }

  ngOnInit() {

  }
  
  abrirPage(rota){
    
    this.router.navigate(['./pages/'+rota]);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [
    FooterComponent,
    SidemenuComponent,
    HeaderComponent
  ],
  exports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FooterComponent,
    SidemenuComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule,
    NgxLoadingModule
  ]
})
export class SharedModule { }

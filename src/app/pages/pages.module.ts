import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule,
    PagesRoutingModule,
    DashboardModule,
    VehiclesModule,
    ComponentsModule,
    ToastrModule
  ],
  exports: [
  ],
  providers: [
  ],
})
export class PagesModule { }

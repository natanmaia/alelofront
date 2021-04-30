import { NgModule } from '@angular/core';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { RouterModule } from '@angular/router';
import { VehiclesIndexComponent } from './vehicles-index/vehicles-index.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxLoadingModule } from 'ngx-loading';
import { VehiclesCreateComponent } from './vehicles-create/vehicles-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VehiclesComponent,
    VehiclesIndexComponent,
    VehiclesCreateComponent
  ],
  imports: [
    VehiclesRoutingModule,
    RouterModule,
    ComponentsModule,
    NgxLoadingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [
  ],
})
export class VehiclesModule { }

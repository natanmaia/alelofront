import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'vehicles', component: VehiclesComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

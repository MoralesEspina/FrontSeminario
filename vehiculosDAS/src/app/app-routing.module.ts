import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarReportComponent } from './features/car-report/car-report.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'vehicles',
    component: CarReportComponent ,
  },


];
export const AppRoutingModule = RouterModule.forRoot(routes);

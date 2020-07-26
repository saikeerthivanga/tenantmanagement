import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterNewTenentComponent } from './register-new-tenent/register-new-tenent.component';
import { DetailregisterComponent } from './detailregister/detailregister.component';
import { CreatePropertyComponent } from '../owner/create-property/create-property.component';
import { OwnerComponent } from './owner.component';
import { AuthGuard } from '../auth.guard';
import { MonitortenentsregisteredComponent } from './monitortenentsregistered/monitortenentsregistered.component';


const routes: Routes = [
  {path: "admin", children: [
    {path: "", redirectTo:"owner", pathMatch: 'full'},
    {path: "owner", component: OwnerComponent, canActivate : [AuthGuard]},
    {path: "registeranewtenent", component: RegisterNewTenentComponent, canActivate : [AuthGuard]},
    {path: "detailregister/:id", component: DetailregisterComponent, canActivate : [AuthGuard]},
    {path : "createproperty", component: CreatePropertyComponent, canActivate : [AuthGuard]},
    {path : "monitortenents", component: MonitortenentsregisteredComponent, canActivate : [AuthGuard]},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }

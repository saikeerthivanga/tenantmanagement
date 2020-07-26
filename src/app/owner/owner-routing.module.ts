import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterNewTenentComponent } from './register-new-tenent/register-new-tenent.component';
import { DetailregisterComponent } from './detailregister/detailregister.component';
import { CreatePropertyComponent } from '../owner/create-property/create-property.component';


const routes: Routes = [
  {path: "admin", children: [
    {path: "registeranewtenent", component: RegisterNewTenentComponent},
    {path: "detailregister/:id", component: DetailregisterComponent},
    {path : "createproperty", component: CreatePropertyComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }

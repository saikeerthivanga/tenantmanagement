import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterNewTenentComponent } from './register-new-tenent/register-new-tenent.component';
import { DetailregisterComponent } from './detailregister/detailregister.component';


const routes: Routes = [
  {path: "admin", children: [
    {path: "registeranewtenent", component: RegisterNewTenentComponent},
    {path: "detailregister/:id", component: DetailregisterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }

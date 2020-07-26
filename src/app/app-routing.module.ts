import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./owner/dashboard/dashboard.component";
import { SignupComponent } from "./signup/signup.component";
import { RegisterNewTenentComponent } from './owner/register-new-tenent/register-new-tenent.component';
import { WelcomeComponent } from './welcome/welcome.component';
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {path: "home", component: WelcomeComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

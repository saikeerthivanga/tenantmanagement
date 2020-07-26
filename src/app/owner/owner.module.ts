import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatCardModule, MatInputModule, MatButtonModule, MatToolbarModule, MatProgressSpinnerModule} from '@angular/material'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { RegisterNewTenentComponent } from './register-new-tenent/register-new-tenent.component';
import { DetailregisterComponent } from './detailregister/detailregister.component' 
import {FormsModule} from '@angular/forms';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { OwnerComponent } from './owner.component';
import { ProfileComponent } from './profile/profile.component';
import { MonitortenentsregisteredComponent } from './monitortenentsregistered/monitortenentsregistered.component';



@NgModule({
  declarations: [RegisterNewTenentComponent,DashboardComponent, DetailregisterComponent, CreatePropertyComponent, OwnerComponent, ProfileComponent, MonitortenentsregisteredComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatCardModule, MatInputModule, MatProgressSpinnerModule, MatButtonModule,MatToolbarModule,
     AngularFireAuthModule,
     AngularFirestoreModule,
     AngularFireStorageModule,
     FormsModule
  ]
})

export class OwnerModule { }

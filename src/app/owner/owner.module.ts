import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';

import { MatCardModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RegisterNewTenentComponent } from './register-new-tenent/register-new-tenent.component';
import { DetailregisterComponent } from './detailregister/detailregister.component' 
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [RegisterNewTenentComponent, DetailregisterComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatCardModule, MatInputModule, MatProgressSpinnerModule, MatButtonModule,
     AngularFireAuthModule,
     AngularFirestoreModule,
     FormsModule

export class OwnerModule { }

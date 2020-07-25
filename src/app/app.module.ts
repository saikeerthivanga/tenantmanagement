import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'
import { environment} from '../environments/environment.prod';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {OwnerModule} from './owner/owner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    OwnerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

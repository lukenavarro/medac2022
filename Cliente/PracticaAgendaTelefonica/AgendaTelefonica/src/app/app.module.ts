import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgenciaTelefonicaComponent } from './agencia-telefonica/agencia-telefonica.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenciaTelefonicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AgenciaTelefonicaComponent]
})
export class AppModule { }

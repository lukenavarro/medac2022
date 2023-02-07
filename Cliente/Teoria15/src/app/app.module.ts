import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListinComponent } from './telefonos/listin/listin.component';
import { SorteoComponent } from './sorteo/sorteo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListinComponent,
    SorteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

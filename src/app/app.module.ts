import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtikelFormComponent } from './forms/artikel-form/artikel-form.component';
import { ArtikelListComponent } from './lists/artikel-list/artikel-list.component';
import { ReceptListComponent } from './lists/recept-list/recept-list.component';
import { ReceptFormComponent } from './forms/recept-form/recept-form.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LijstjeFormComponent } from './forms/lijstje-form/lijstje-form.component';
import { LijstjeListComponent } from './lists/lijstje-list/lijstje-list.component';
import { HomeComponent } from './forms/home/home.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ArtikelFormComponent,
    ArtikelListComponent,
    ReceptListComponent,
    ReceptFormComponent,
    LijstjeFormComponent,
    LijstjeListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

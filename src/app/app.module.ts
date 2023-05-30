import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtikelFormComponent } from './forms/artikel-form/artikel-form.component';
import { ArtikelListComponent } from './lists/artikel-list/artikel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtikelFormComponent,
    ArtikelListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtikelFormComponent } from './forms/artikel-form/artikel-form.component';
import { ReceptFormComponent } from  './forms/recept-form/recept-form.component';
import { LijstjeFormComponent } from  './forms/lijstje-form/lijstje-form.component';
import { HomeComponent } from './forms/home/home.component';


const routes: Routes = [
  { path: 'recepten', component:ReceptFormComponent  },
  { path: 'boodschappenlijst', component:LijstjeFormComponent  },
  { path: 'artikelen', component:ArtikelFormComponent  },
  { path: '',component: HomeComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

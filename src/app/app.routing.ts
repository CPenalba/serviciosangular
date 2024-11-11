import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PadreLibreriaComponent } from './components/padre-libreria/padre-libreria.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libreria', component: PadreLibreriaComponent },
  { path: 'personas', component: PersonasapiComponent },
  { path: 'perstandalone', component: PersonasstandaloneComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);

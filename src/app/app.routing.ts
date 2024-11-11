import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PadreLibreriaComponent } from './components/padre-libreria/padre-libreria.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple/plantillafuncionsimple.component';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libreria', component: PadreLibreriaComponent },
  { path: 'personas', component: PersonasapiComponent },
  { path: 'perstandalone', component: PersonasstandaloneComponent },
  { path: 'coches', component: CochesComponent },
  { path: 'plantilla', component: PlantillafuncionsimpleComponent },
  { path: 'plantillamultiple', component: PlantillafuncionmultipleComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);

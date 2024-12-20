import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRoutingProvider, routing } from './app.routing';

import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PadreLibreriaComponent } from './components/padre-libreria/padre-libreria.component';
import { HijoComicComponent } from './components/hijo-comic/hijo-comic.component';
import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple/plantillafuncionsimple.component';
import { ServicePlantilla } from './services/service.plantilla';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PadreLibreriaComponent,
    HijoComicComponent,
    PersonasapiComponent,
    CochesComponent,
    PlantillafuncionsimpleComponent,
    PlantillafuncionmultipleComponent,
  ],
  imports: [BrowserModule, routing, FormsModule, PersonasstandaloneComponent],
  providers: [
    appRoutingProvider,
    ServiceComics,
    ServicePersonas,
    provideHttpClient(),
    ServiceCoches,
    ServicePlantilla,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

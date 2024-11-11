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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PadreLibreriaComponent,
    HijoComicComponent,
    PersonasapiComponent,
  ],
  imports: [BrowserModule, routing, FormsModule, PersonasstandaloneComponent],
  providers: [
    appRoutingProvider,
    ServiceComics,
    ServicePersonas,
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

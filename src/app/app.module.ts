import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingProvider, routing } from './app.routing';

import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PadreLibreriaComponent } from './components/padre-libreria/padre-libreria.component';
import { HijoComicComponent } from './components/hijo-comic/hijo-comic.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PadreLibreriaComponent,
    HijoComicComponent,
  ],
  imports: [BrowserModule, routing],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

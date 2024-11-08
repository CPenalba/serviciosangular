import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-padre-libreria',
  templateUrl: './padre-libreria.component.html',
  styleUrl: './padre-libreria.component.css',
  //debemos inyectar un servicio para poder recuperarlo posteriormente en el constructor
  providers: [ServiceComics],
})
export class PadreLibreriaComponent implements OnInit {
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajaimagen') cajaImagen!: ElementRef;
  @ViewChild('cajadescripcion') cajaDescripcion!: ElementRef;

  public comics!: Array<Comic>;
  public comicFavorito!: Comic;

  constructor(private _service: ServiceComics) {}

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  seleccionarFavorito(event: Comic): void {
    this.comicFavorito = event;
  }

  nuevoComic(): void {
    let nombre = this.cajaNombre.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let descripcion = this.cajaDescripcion.nativeElement.value;
    let comicNew = new Comic(nombre, imagen, descripcion);
    this.comics.push(comicNew);
  }
}

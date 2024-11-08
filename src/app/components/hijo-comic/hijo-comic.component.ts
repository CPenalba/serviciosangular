import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-hijo-comic',
  templateUrl: './hijo-comic.component.html',
  styleUrl: './hijo-comic.component.css',
})
export class HijoComicComponent {
  @Input() comic!: Comic;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();

  marcarFavorito() {
    this.seleccionarFavorito.emit(this.comic);
  }
}

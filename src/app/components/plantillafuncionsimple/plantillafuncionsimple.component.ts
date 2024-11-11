import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantilla';

@Component({
  selector: 'app-plantillafuncionsimple',
  templateUrl: './plantillafuncionsimple.component.html',
  styleUrl: './plantillafuncionsimple.component.css',
})
export class PlantillafuncionsimpleComponent implements OnInit {
  @ViewChild('selectfuncion') selectFuncion!: ElementRef;
  public empleados: Array<Plantilla>;
  public funciones!: Array<string>;

  constructor(private _service: ServicePlantilla) {
    this.empleados = new Array<Plantilla>();
  }

  mostrarPlantilla(): void {
    let funcion = this.selectFuncion.nativeElement.value;
    this._service.getPlantillaFuncion(funcion).subscribe((response) => {
      this.empleados = response;
    });
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe((response) => {
      this.funciones = response;
    });
  }
}

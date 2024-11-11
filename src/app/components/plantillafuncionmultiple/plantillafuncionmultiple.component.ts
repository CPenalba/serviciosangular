import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantilla';

@Component({
  selector: 'app-plantillafuncionmultiple',
  templateUrl: './plantillafuncionmultiple.component.html',
  styleUrl: './plantillafuncionmultiple.component.css',
})
export class PlantillafuncionmultipleComponent implements OnInit {
  @ViewChild('selectfunciones') selectFunciones!: ElementRef;
  public empleados: Array<Plantilla>;
  public funciones!: Array<string>;
  public funcionesSeleccionadas: Array<string>;

  constructor(private _service: ServicePlantilla) {
    this.empleados = new Array<Plantilla>();
    this.funcionesSeleccionadas = new Array<string>();
  }

  mostrarPlantilla(): void {
    let aux = new Array<string>();
    for (var option of this.selectFunciones.nativeElement.options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }
    this.funcionesSeleccionadas = aux;
    this._service
      .getPlantillaFunciones(this.funcionesSeleccionadas)
      .subscribe((response) => {
        console.log(response);
        this.empleados = response;
      });
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe((response) => {
      this.funciones = response;
    });
  }
}

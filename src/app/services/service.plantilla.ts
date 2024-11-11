import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ServicePlantilla {
  constructor(private _http: HttpClient) {}
  getFunciones(): Observable<any> {
    let request = 'api/Plantilla/Funciones';
    let url = environment.urlApiPlantilla + request;
    return this._http.get(url);
  }

  getPlantillaFuncion(funcion: string): Observable<any> {
    let request = 'api/Plantilla/PlantillaFuncion/' + funcion;
    let url = environment.urlApiPlantilla + request;
    return this._http.get(url);
  }
}

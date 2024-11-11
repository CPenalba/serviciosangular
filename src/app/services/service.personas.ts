import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ServicePersonas {
  //para las peticiones api viene un objeto llamado HttpClient que nos permitira realizar las peticiones
  constructor(private _http: HttpClient) {}
  getPersonas(): Observable<any> {
    let urlApiPersonas =
      'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';
    //tenemos dos formas de realizar la funcionalidad de devolucion de datos
    //1)Igual que en vue, creando una promesa por encima de este metodo
    //2)Devolver directamente la peticion para que sea el component quien se subscriba
    return this._http.get(urlApiPersonas);
  }

  getPersonasPromesa(): Promise<any> {
    let urlApiPersonas =
      'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';
    let promise = new Promise((resolve) => {
      this._http.get(urlApiPersonas).subscribe((response) => {
        resolve(response);
      });
    });
    return promise;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Global } from '../global';
import { environment } from '../../environments/environment';

@Injectable()
export class ServicePersonas {
  //para las peticiones api viene un objeto llamado HttpClient que nos permitira realizar las peticiones
  constructor(private _http: HttpClient) {}
  getPersonas(): Observable<any> {
    let request = 'api/personas';
    let url = environment.urlApiPersonas + request;
    //tenemos dos formas de realizar la funcionalidad de devolucion de datos
    //1)Igual que en vue, creando una promesa por encima de este metodo
    //2)Devolver directamente la peticion para que sea el component quien se subscriba
    return this._http.get(url);
  }

  getPersonasPromesa(): Promise<any> {
    let request = 'api/personas';
    let url = environment.urlApiPersonas + request;
    let promise = new Promise((resolve) => {
      this._http.get(url).subscribe((response) => {
        resolve(response);
      });
    });
    return promise;
  }
}

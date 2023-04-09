import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { cliente } from '../Interfaces/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceservice {

constructor(private http:HttpClient) { }

baseUrl ="https://www.epico.gob.ec/vehiculo/public/api/cliente";

agregarcliente(Cliente:cliente){
  let body = this.getParamscliente(Cliente);
  return this.http.post<any>(this.baseUrl+'cliente/', body);
}
getParamscliente(Cliente:cliente){
  let body = new HttpParams();
  body = Cliente.id ? body.set('id',Cliente.id) : body;
  body = Cliente.nombre ? body.set('nombre', Cliente.nombre) : body;
  body = Cliente.apellido ? body.set('apellido',Cliente.apellido) : body;
  body = Cliente.mail ? body.set('mail',Cliente.mail) : body;
  body = Cliente.telefono ? body.set('telefono',Cliente.telefono) : body;

  return body;
}
actualizarCliente(Cliente:cliente, codigo:string){
  let body = this.getParamscliente(Cliente);
  return this.http.put<any>(this.baseUrl+'cliente/' + codigo, body);
}
}

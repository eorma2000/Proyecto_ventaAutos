import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { cliente } from 'src/app/Interfaces/cliente.service';
import { ClienteServiceservice } from 'src/app/Servicios/cliente.service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-Clientes',
  templateUrl: './Clientes.component.html',
  styleUrls: ['./Clientes.component.css']
})
export class ClientesComponent implements OnInit {

  isEditable:boolean=false;
  cliente:any;  
  constructor(  private formBuilder: FormBuilder,
    private ClienteServiceservice:ClienteServiceservice) { }
  formularioCliente: FormGroup;
  ngOnInit() {
    this.formularioCliente = this.formBuilder.group({
      "id": [null],
      "nombre":[null],
      "apellido": [null],
      "mail": [null],
      "telefono": [null]
      
    });
  }
  grabarcli(){
    let Cliente:cliente = {...this.formularioCliente.value};
    this.ClienteServiceservice.actualizarCliente(Cliente, this.cliente.id).subscribe((respuesta)=>{
      if(respuesta.codigo == 1){
        this.isEditable = false;
        this.cliente.id = this.formularioCliente.controls['id'].value;
        this.cliente.nombre = this.formularioCliente.controls['nombre'].value;
        this.cliente.apellido = this.formularioCliente.controls['apellido'].value;
        this.cliente.mail = this.formularioCliente.controls['mail'].value;
        this.cliente.telefono = this.formularioCliente.controls['telefono'].value;
        
        alert(respuesta.mensaje);
      }
    },
    (errorHttp:HttpErrorResponse) => {
      console.log(errorHttp.error);
      let mensaje = errorHttp.error.mensaje;
      mensaje += errorHttp.error.error?.id ? (' - ' + errorHttp.error.error?.id) : "";
      mensaje += errorHttp.error.error?.nombre ? (' - ' + errorHttp.error.error?.nombre) : "";
      mensaje += errorHttp.error.error?.apellido ? (' - ' + errorHttp.error.error?.apellido) : "";
      mensaje += errorHttp.error.error?.mail ? (' - ' + errorHttp.error.error?.mail) : "";
      mensaje += errorHttp.error.error?.telefono ? (' - ' + errorHttp.error.error?.telefono) : "";
      alert(mensaje);
    });
  }
  guardarCliente(){
    let cliente:cliente = {...this.formularioCliente.value};
    console.log(cliente);
    this.ClienteServiceservice.agregarcliente(cliente).subscribe((respuesta)=>{
      alert(respuesta.mensaje);
      console.log(respuesta);
      /*if(respuesta.codigo == 1){
        this.consultavehiculos();
      }*/
    },
    (errorHttp:HttpErrorResponse) => {
      console.log(errorHttp.error);
      let mensaje = errorHttp.error.mensaje;
      mensaje += errorHttp.error.error?.id ? (' - ' + errorHttp.error.error?.id) : "";
      mensaje += errorHttp.error.error?.nombre ? (' - ' + errorHttp.error.error?.nombre) : "";
      mensaje += errorHttp.error.error?.apellido ? (' - ' + errorHttp.error.error?.apellido) : "";
      mensaje += errorHttp.error.error?.mail ? (' - ' + errorHttp.error.error?.mail) : "";
      mensaje += errorHttp.error.error?.telefono ? (' - ' + errorHttp.error.error?.telefono) : "";
      alert(mensaje);
    });
  }
  
}

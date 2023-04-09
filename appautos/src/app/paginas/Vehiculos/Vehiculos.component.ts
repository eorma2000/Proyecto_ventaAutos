import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/Interfaces/Vehiculo';
import { VehiculoService } from 'src/app/Servicios/vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-Vehiculos',
  templateUrl: './Vehiculos.component.html',
  styleUrls: ['./Vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  constructor(private vehiculoservice:VehiculoService,
    private formBuilder: FormBuilder) { }

  filtrarPor:string ="";

  listavehiculo:any[] =[];
  mostrarImagen:boolean = false;

  formularioVehiculo: FormGroup;

  rows:number = 5;
  pages:number;
  page:number = 1;

  ngOnInit() {
    //this.listavehiculo = this.vehiculoservice.getvehiculos();
    this.consultavehiculos();
    this.formularioVehiculo = this.formBuilder.group({
      "marca": [null],
      "modelo":[null],
      "codigo": [null],
      "anio": [null],
      "calificacion": [null],
      "foto": [null]
    });
  }
  
 consultavehiculos(){
  this.vehiculoservice.getvehiculos(this.filtrarPor, this.rows, this.page).subscribe((respuesta)=>{
    if(respuesta.codigo == 1){
      this.listavehiculo = respuesta.data;
      this.rows = respuesta.rows;
      this.pages = respuesta.pages;
    }
  })
 }

  mostraAlerta(calificacion:any){
    alert("La calificacion es: " + calificacion);
  }

  elminarVehiculo(vehiculo:any){
    this.vehiculoservice.eliminarVehiculo(vehiculo.id).subscribe((respuesta)=>{
      if(respuesta.codigo ==1){
        alert(respuesta.mensaje);
        this.consultavehiculos();
      }
    });
  }
 
  getListaVehiculos(){
    return this.listavehiculo;
    /*this.listavehiculo = this.vehiculoservice.getVehiculoFiltro(this.filtrarPor);
    return this.listavehiculo;*/
  }
  guardarVehiculo(){
    let vehiculo:Vehiculo = {...this.formularioVehiculo.value};
    console.log(vehiculo);
    this.vehiculoservice.agregarVehiculo(vehiculo).subscribe((respuesta)=>{
      alert(respuesta.mensaje);
      console.log(respuesta);
      if(respuesta.codigo == 1){
        this.consultavehiculos();
      }
    },
    (errorHttp:HttpErrorResponse) => {
      console.log(errorHttp.error);
      let mensaje = errorHttp.error.mensaje;
      mensaje += errorHttp.error.error?.codigo ? (' - ' + errorHttp.error.error?.codigo) : "";
      mensaje += errorHttp.error.error?.marca ? (' - ' + errorHttp.error.error?.marca) : "";
      mensaje += errorHttp.error.error?.modelo ? (' - ' + errorHttp.error.error?.modelo) : "";
      mensaje += errorHttp.error.error?.anio ? (' - ' + errorHttp.error.error?.anio) : "";
      alert(mensaje);
    });
  }
  seleccionarPagina(page:number){
    this.page = page;
    this.consultavehiculos();
  }

  cambioRows(){
    this.page = 1;
    this.consultavehiculos();
  }
}

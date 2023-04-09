import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { VehiculosComponent } from './paginas/Vehiculos/Vehiculos.component';
import { CalificacionComponent } from './componentes/calificacion/calificacion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PaginacionTablaComponent } from './componentes/PaginacionTabla/PaginacionTabla.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';
import { UserInterceptor } from './interceptores/userInterceptores';

@NgModule({
  declarations: [			
    AppComponent,
    CalificacionComponent,
    VehiculosComponent,
    PaginacionTablaComponent,
    VehiculoDetalleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:UserInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

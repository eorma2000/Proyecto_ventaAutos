import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './paginas/Clientes/Clientes.component';
import { HomeComponent } from './paginas/home/home.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';
import { VehiculosComponent } from './paginas/Vehiculos/Vehiculos.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'vehiculos',
    component:VehiculosComponent
  },
  {
    path: 'Clientes',
    component:ClientesComponent
  },
  {
    path: 'vehiculos/:codigo',
    component:VehiculoDetalleComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

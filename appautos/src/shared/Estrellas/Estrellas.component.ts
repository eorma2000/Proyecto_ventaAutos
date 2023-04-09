import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-Estrellas',
  templateUrl: './Estrellas.component.html',
  styleUrls: ['./Estrellas.component.css']
})
export class EstrellasComponent implements OnChanges {
   faStar = faStar;
   estrellasCalificacion:any[]=[];

   onClick(stars:number):void{
    this.starsClick.emit("Calificacion:" + stars);
   }

   @Input() calificacion:number=0;
   @Output() starsClick= new EventEmitter<string>(); 

  constructor() { }

  ngOnChanges(changes:SimpleChanges):void {
    this.estrellasCalificacion=[];
    for(var i=1;i<=this.calificacion;i++){
      this.estrellasCalificacion.push(1);
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html'
})
export class TarjetaHeroeComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() indice:number;

  constructor() { 

  }

  ngOnInit() {
  }

}

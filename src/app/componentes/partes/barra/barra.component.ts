import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html'
})
export class BarraComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(filtro:string){
    this._router.navigate(['/filtro',filtro]);
  }

}

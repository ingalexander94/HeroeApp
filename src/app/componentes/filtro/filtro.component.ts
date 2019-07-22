import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from "../../servicios/heroes.service";

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html'
})
export class FiltroComponent implements OnInit {

  constructor(private _activateRoute:ActivatedRoute,private _heroeService:HeroesService) { }

  heroes:Heroe[] = [];
  filtro:string;

  ngOnInit() {
    this._activateRoute.params.subscribe(parametros =>{
      this.filtro = parametros['busqueda'];
      this.heroes=this._heroeService.buscarHeroe(this.filtro);
    })
  }

}

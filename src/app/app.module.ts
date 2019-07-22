import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


//rutas
import { APP_ROUTING } from './app.routes';


//servicios
import { HeroesService } from './servicios/heroes.service';


// componentes
import { AppComponent } from './app.component';
import { BarraComponent } from './componentes/partes/barra/barra.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { FiltroComponent } from './componentes/filtro/filtro.component';
import { TarjetaHeroeComponent } from './componentes/tarjeta-heroe/tarjeta-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    AcercaComponent,
    HeroesComponent,
    HeroeComponent,
    FiltroComponent,
    TarjetaHeroeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

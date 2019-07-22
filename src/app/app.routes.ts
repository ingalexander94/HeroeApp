import {RouterModule,Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { FiltroComponent } from './componentes/filtro/filtro.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'filtro/:busqueda', component: FiltroComponent },
    { path: '**', pathMatch:'full',redirectTo:'inicio'},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

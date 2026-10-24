import { Routes } from '@angular/router';
import { Catalogo } from './pages/catalogo/catalogo';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';

export const routes: Routes = [
    {path:'', component: Catalogo},
    {path:'catalogo', component: Catalogo},
    {path: 'login', component: Login},
    {path:'registro', component: Registro}
];

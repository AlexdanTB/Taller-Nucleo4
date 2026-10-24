import { Routes } from '@angular/router';
import { Catalogo } from './pages/catalogo/catalogo';
import { Login } from './components/login/login';

export const routes: Routes = [
    {path:'catalogo', component: Catalogo},
    {path: 'login', component: Login}
];

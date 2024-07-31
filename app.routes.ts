import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '', loadComponent:()=>import('./pages/home/home.component').then((m) => m.HomeComponent)},
    {path: 'contact',loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent)},
    {path: 'login',loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent)},
    {path: 'products/:id',loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductdetailsComponent)}
];

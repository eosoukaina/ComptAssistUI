import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)
    },
    // Add future routes for your invoice platform
    // {
    //   path: 'dashboard',
    //   loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
    //   canActivate: [AuthGuard]
    // },
    // {
    //   path: 'invoices',
    //   loadChildren: () => import('./pages/invoices/invoices.module').then(m => m.InvoicesModule),
    //   canActivate: [AuthGuard]
    // },
    {
        path: '**',
        redirectTo: ''
    }
];
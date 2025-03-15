import { Routes } from '@angular/router';

export const PageRoutes: Routes = [
  {
    path: '',
    redirectTo: 'emp-list',
    pathMatch: 'full'
  },
  {
    path: 'emp-list',
    loadComponent: () =>
    import('./emp-list/emp-list.component').then(
      (m: any) => m.EmpListComponent
    )
  },
  {
    path: 'emp-details',
    loadComponent:  () =>
    import('./emp-details/emp-details.component').then(
      (m: any) => m.EmpDetailsComponent
    )
  },
];

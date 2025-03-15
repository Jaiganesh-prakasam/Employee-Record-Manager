import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', redirectTo: 'routing/emp-list', pathMatch: 'full' },
  { path: 'routing',
    loadChildren: async () => (await import('./pages/pages-routing').then(m => m.PageRoutes))
  },
  { path: '**', redirectTo: 'routing/emp-list', pathMatch: 'full' }
];

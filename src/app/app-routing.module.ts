import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationService } from './validation.service';
const routes: Routes = [
  { path: '', redirectTo: 'routing/emp-list', pathMatch: 'full' },
  { path: 'routing', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: '**', redirectTo: 'routing/emp-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  providers: [ValidationService]
})
export class AppRoutingModule { }

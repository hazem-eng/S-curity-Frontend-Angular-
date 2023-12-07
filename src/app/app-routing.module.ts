import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'front', loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule) },
{ path: 'dashboard', loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule) },{
  path:'**',
  pathMatch: 'full', redirectTo: '/front/home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

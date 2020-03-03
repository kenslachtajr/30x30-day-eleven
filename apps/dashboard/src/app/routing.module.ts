import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/items', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

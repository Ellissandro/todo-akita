import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './core/layout/root/root.component';
import { ROOT_ROUTES } from './core/router/root.-layout.routes';

const routes: Routes = [
  {
    path: 'root',
    component: RootComponent,
    children: ROOT_ROUTES
  },
  {
    path: "**",
    redirectTo: 'root/todos',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { Routes } from '@angular/router';

export const ROOT_ROUTES: Routes = [
  {
    path: 'todos',
    loadChildren: () => import('../../pages/todos/todos.module').then(m => m.TodosModule)
  },
];

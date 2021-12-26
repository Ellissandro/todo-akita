import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { FiltersComponent } from './filter/filters/filters.component';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: TodosPageComponent}])
  ],
  exports: [TodosComponent],
  declarations: [TodosComponent, TodosPageComponent, TodoComponent, FiltersComponent]
})
export class TodosModule {} 

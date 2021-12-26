import { Injectable } from '@angular/core';
import { TodosState, TodosStore } from './todos.store';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { VISIBILITY_FILTER } from '../filter/filter.model';
import { Todo } from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState> {
  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  selectVisibleTodos$ = combineLatest(
    this.selectVisibilityFilter$,
    this.selectAll(),
    this.getVisibleTodos
  );

  constructor(protected store: TodosStore) {
    super(store);
  }

  private getVisibleTodos(filter: any, todos: any): Todo[] {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_COMPLETED:
        return todos.filter((t: any) => t.completed);
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return todos.filter((t: any) => !t.completed);
      default:
        return todos;
    }
  }
}

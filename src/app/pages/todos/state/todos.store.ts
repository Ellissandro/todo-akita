import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Todo } from './todos.model';
import { VISIBILITY_FILTER } from '../filter/filter.model';

export interface TodosState extends EntityState<Todo, string> {
  ui: {
    filter: VISIBILITY_FILTER
  };
}

const initialState = {
  ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super(initialState);
  }
}

import { Injectable } from '@angular/core';
import {ITodo, Todo} from './todo';
import {TodoStorageService} from './todo-storage.service';


type TodoFilter = (todo: Todo) => boolean;

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private lastId: number;
  // tslint:disable-next-line:variable-name
  private _todos: Todo[];

  constructor(private todoStorageService: TodoStorageService) {
    this._todos = this.todoStorageService.get();
    const todoCount = this._todos.length;
    this.lastId = todoCount ? this._todos[todoCount - 1].id : 0;
  }

  get todos(): Todo[] {
    return this._todos;
  }

  set todos(todos: Todo[]) {
    this._todos = todos;
    this.todoStorageService.put(todos);
  }

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos = this.todos.concat(todo);
  }

  deleteByFilter(filter: TodoFilter) {
    this.todos = this.todos.filter(todo => !filter(todo));
  }

  deleteById(id: number) {
    this.deleteByFilter(todo => todo.id === id);
  }

  updateByFilter(filter: TodoFilter, values: Partial<ITodo> = {}) {
    this.todos = this.todos.map(todo => filter(todo) ? Object.assign(todo, values) : todo);
  }

  updateById(id: number, values: Partial<ITodo> = {}) {
    this.updateByFilter(todo => todo.id === id, values);
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}

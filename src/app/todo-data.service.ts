import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {TodoStorageService} from './todo-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private lastId: number;
  private todos: Todo[];

  constructor(private todoStorageService: TodoStorageService) {
    this.todos = this.todoStorageService.get();
    this.lastId = this.todos.length ? this.todos[this.todos.length - 1].id : 0;
  }

  updateStorage() {
    this.todoStorageService.put(this.todos);
  }

  addTodo(todo: Todo): TodoDataService {
    todo.title = todo.title.trim();
    if (!todo.title) {
      return this;
    }
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    this.updateStorage();
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.updateStorage();
    return this;
  }

  updateTodoById(id: number, values = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    this.updateStorage();
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  toggleTodoComplete(todo: Todo): Todo {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    this.updateStorage();
    return updatedTodo;
  }
}

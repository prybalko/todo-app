import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId = 0;

  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    todo.title = todo.title.trim();
    if (!todo.title) {
      return this;
    }
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
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
    return updatedTodo;
  }
}

import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  private STORAGE_ID = 'todo-angular';

  constructor() { }

  get(): Todo[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
  }

  put(todos: Todo[]) {
    localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
  }
}

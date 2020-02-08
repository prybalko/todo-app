import {Component, EventEmitter, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  addTodo() {
    this.newTodo.title = this.newTodo.title.trim();
    if (!this.newTodo.title) {
      return;
    }
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}

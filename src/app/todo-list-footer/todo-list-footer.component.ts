import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnChanges {

  activeTodos: Todo[];
  completedTodos: Todo[];
  allCompleted: boolean;

  @Input()
  todos: Todo[];

  @Output()
  removeCompleted: EventEmitter<null> = new EventEmitter();

  @Output()
  markAllTodos: EventEmitter<boolean> = new EventEmitter();

  ngOnChanges() {
    this.activeTodos = this.todos.filter(todo => !todo.complete);
    this.completedTodos = this.todos.filter(todo => todo.complete);
    this.allCompleted = !this.activeTodos.length;
  }

  constructor() { }

  clearCompletedTodos() {
    this.removeCompleted.emit();
  }

  markAll(allCompleted: boolean) {
    this.markAllTodos.emit(!allCompleted);
  }

}

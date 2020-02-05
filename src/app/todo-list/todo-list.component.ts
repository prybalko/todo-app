import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Todo} from '../todo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges{

  filteredTodos: Todo[];

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  ngOnChanges() {
    const path = this.router.routerState.snapshot.url;
    if (path === '/active') {
      this.filteredTodos = this.todos.filter(todo => !todo.complete);
    } else if (path === '/completed') {
      this.filteredTodos = this.todos.filter(todo => todo.complete);
    } else {
      this.filteredTodos = this.todos;
    }
  }

  constructor(private router: Router) {
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}

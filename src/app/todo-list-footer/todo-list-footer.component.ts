import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnChanges {

  completedTodos: Todo[];

  @Input()
  todos: Todo[];

  ngOnChanges(changes: SimpleChanges) {
    this.completedTodos = this.todos.filter(todo => !todo.complete);
  }

  constructor() { }

}

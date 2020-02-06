import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  editing = false;

  todoForm: FormControl;

  @Input()
  todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  update: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.todoForm = new FormControl(this.todo.title);
  }

  toggleTodoComplete() {
    this.toggleComplete.emit(this.todo);
  }

  removeTodo() {
    this.remove.emit(this.todo);
  }

  editTodo() {
    console.log('edit Todo');
    this.editing = true;
  }

  doneEditing() {
    console.log('doneEditing', this.todoForm.value);
    const updatedTodo = Object.assign(this.todo, {title: this.todoForm.value});
    this.update.emit(updatedTodo);
    this.editing = false;
  }

  revertEdits() {
    this.todoForm.reset(this.todo.title);
    this.editing = false;
  }
}

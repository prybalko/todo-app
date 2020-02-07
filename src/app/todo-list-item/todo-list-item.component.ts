import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
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

  @ViewChild('formTemplate__input', {static: false}) inputElement: ElementRef;

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
    this.editing = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 0);
  }

  doneEditing() {
    const updatedTodo = Object.assign(this.todo, {title: this.todoForm.value});
    this.update.emit(updatedTodo);
    this.editing = false;
  }

  revertEdits() {
    this.todoForm.reset(this.todo.title);
    this.editing = false;
  }
}

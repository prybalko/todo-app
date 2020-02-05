import {Component} from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}

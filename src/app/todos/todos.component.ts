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

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteById(todo.id);
  }

  onRemoveCompleted() {
    this.todoDataService.deleteByFilter(todo => todo.complete);
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.updateById(todo.id, {complete: !todo.complete});
  }

  OnTodoUpdate(todo: Todo) {
    this.todoDataService.updateById(todo.id, {title: todo.title});
  }

  onMarkAllTodos(isCompleted: boolean) {
    this.todoDataService.updateByFilter(
      t => true,
      {complete: isCompleted}
    );
  }

  get todos(): Todo[] {
    return this.todoDataService.getAllTodos();
  }
}

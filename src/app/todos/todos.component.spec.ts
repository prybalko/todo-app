import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {TodoListHeaderComponent} from '../todo-list-header/todo-list-header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoListFooterComponent} from '../todo-list-footer/todo-list-footer.component';
import {TodoListItemComponent} from '../todo-list-item/todo-list-item.component';
import {TodoDataService} from '../todo-data.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService],
      imports: [ ReactiveFormsModule, FormsModule, RouterTestingModule ],
      declarations: [
        TodosComponent,
        TodoListComponent,
        TodoListHeaderComponent,
        TodoListFooterComponent,
        TodoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

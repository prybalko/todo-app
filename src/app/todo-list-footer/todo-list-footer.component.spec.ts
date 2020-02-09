import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFooterComponent } from './todo-list-footer.component';
import {TodoDataService} from '../todo-data.service';
import {TodoStorageService} from '../todo-storage.service';

describe('TodoListFooterComponent', () => {
  let component: TodoListFooterComponent;
  let fixture: ComponentFixture<TodoListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService, TodoStorageService],
      declarations: [ TodoListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListFooterComponent);
    component = fixture.componentInstance;
    component.todos = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

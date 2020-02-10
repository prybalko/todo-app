import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFooterComponent } from './todo-list-footer.component';
import {TodoDataService} from '../todo-data.service';
import {TodoStorageService} from '../todo-storage.service';
import {By} from '@angular/platform-browser';
import {Todo} from '../todo';

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
    component.todos = [new Todo({title: 'Hello 1', complete: false})];
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test mark all as complete checkbox', () => {
    spyOn(component.markAllTodos, 'emit');

    const input = fixture.debugElement.query((By.css('.toggle-all')));
    input.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.markAllTodos.emit).toHaveBeenCalledWith(true);
  });

  it('test clrear completed', () => {
    spyOn(component.removeCompleted, 'emit');

    const button = fixture.debugElement.query((By.css('.clear-completed')));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.removeCompleted.emit).toHaveBeenCalled();
  });


});

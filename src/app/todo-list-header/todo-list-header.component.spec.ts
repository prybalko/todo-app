import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListHeaderComponent } from './todo-list-header.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TodoListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addTodo on Enter', () => {
    spyOn(component.add, 'emit');

    component.newTodo.title = 'some title';
    const input = fixture.debugElement.query(By.css('.new-todo'));
    input.triggerEventHandler('keyup.enter', null);
    fixture.detectChanges();

    expect(component.add.emit).toHaveBeenCalled();
  });

  it('should not emit if input is empty', () => {
    spyOn(component.add, 'emit');

    component.newTodo.title = '  ';
    const input = fixture.debugElement.query(By.css('.new-todo'));
    input.triggerEventHandler('keyup.enter', null);
    fixture.detectChanges();

    expect(component.add.emit).not.toHaveBeenCalled();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListItemComponent} from './todo-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Todo} from '../todo';
import {By} from '@angular/platform-browser';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule ],
      declarations: [ TodoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    component.todo = new Todo({title: 'Hello 1', complete: false});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit remove event on button click', () => {
    spyOn(component.remove, 'emit');

    const button = fixture.debugElement.query(By.css('.destroy'));
    button.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.remove.emit).toHaveBeenCalledWith(component.todo);
  });

  it('should emit toggleComplete event on checkbox click', () => {
    spyOn(component.toggleComplete, 'emit');

    const button = fixture.debugElement.query(By.css('.toggle'));
    button.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.toggleComplete.emit).toHaveBeenCalledWith(component.todo);
  });

  it('should enter editing mode on double click', () => {
    const label = fixture.debugElement.query(By.css('.list-item label'));
    label.triggerEventHandler('dblclick', {});
    fixture.detectChanges();

    expect(component.editing).toEqual(true);
    const inputField = fixture.debugElement.query(By.css('input[type="text"]'));
    expect(inputField.nativeElement.value).toEqual(component.todo.title);
  });

  it('should trigger remove event if after editing todo is empty', () => {
    spyOn(component.remove, 'emit');
    component.editing = true;
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    component.todoForm.setValue('    ');
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    expect(component.remove.emit).toHaveBeenCalledWith(component.todo);
  });

  it('should trigger update event after editing', () => {
    spyOn(component.update, 'emit');
    component.editing = true;
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    component.todoForm.setValue('any-value');
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    expect(component.update.emit).toHaveBeenCalledWith(component.todo);
  });
});

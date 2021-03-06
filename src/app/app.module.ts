import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoListHeaderComponent} from './todo-list-header/todo-list-header.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {TodoListFooterComponent} from './todo-list-footer/todo-list-footer.component';
import {TodoDataService} from './todo-data.service';
import {AppRoutingModule} from './app-routing.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

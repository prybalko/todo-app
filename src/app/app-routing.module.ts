import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos/todos.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'completed', component: TodosComponent},
  {path: 'active', component: TodosComponent},
  {path: 'all', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

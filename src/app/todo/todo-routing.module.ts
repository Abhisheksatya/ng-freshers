import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoNewComponent } from './todo-new/todo-new.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  { path: 'todo', component: TodosComponent },
  { path: 'todo/new', component: TodoNewComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule {

}

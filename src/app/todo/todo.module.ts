import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './containers/todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoNewComponent } from './todo-new/todo-new.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    TodoComponent,
    TodosComponent,
    TodoDetailComponent,
    TodoNewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ],
  providers: [
    TodoService
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule {

}

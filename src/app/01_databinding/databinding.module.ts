import { NgModule } from '@angular/core';
import { DataBindingComponent } from './containers/databinding/databinding.component';
import { BasicsComponent } from './components/01_basics/basics.component';
import { InputComponent } from './components/02_input/input.component';
import { OutputComponent } from './components/03_output/output.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    BasicsComponent,
    InputComponent,
    OutputComponent,
    TodoItemComponent,
    TodoComponent
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DatabindingModule { }

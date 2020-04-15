import { NgModule } from '@angular/core';
import { PipesComponent } from './containers/pipes.component';
import { CommonModule } from '@angular/common';
import { TodoStatusPipe } from './shared/todo-status.pipe';
import { TodoSeverityPipe } from './shared/todo-severity.pipe';

@NgModule({
  declarations: [
    PipesComponent,
    TodoStatusPipe,
    TodoSeverityPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent
  ]
})
export class PipesModule {

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabindingModule } from './01_databinding/databinding.module';
import { BuiltInDirectivesModule } from './02_built-in-directives/built-in-directives.module';
import { PipesModule } from './03_pipes/pipes.module';
import { DirectivesModule } from './04_directives/directives.module';
import { TodoModule } from './todo/todo.module';
import { AssignmentModule } from './05_assignment/assignment.module';

const FEATURE_MODULES_TAUGHT = [
  // DatabindingModule,
  // BuiltInDirectivesModule
  // PipesModule
  // DirectivesModule,
  // TodoModule
  AssignmentModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ...FEATURE_MODULES_TAUGHT
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

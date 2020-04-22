import { Component, Input } from '@angular/core';
import { Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  @Input()
  todos: Todo[]

  selectedTodo: Todo

  onClick(todo: Todo){
    this.selectedTodo = todo
  }
}

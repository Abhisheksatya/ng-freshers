import { Component } from '@angular/core';
import { TodoItem } from '../models/todo-item.interface';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.css']
})
export class BuiltInDirectivesComponent {

  todoItems: TodoItem[] = [
    { id: 1, text: 'teach TypeScript', completed: false },
    { id: 2, text: 'teach Angular', completed: true },
    { id: 3, text: 'teach Node', completed: false },
    { id: 4, text: 'teach JavaScript', completed: true },
    { id: 5, text: 'teach CSS', completed: false }
  ];
  todos: TodoItem[] = undefined;
  selectedTodo: TodoItem;

  onTodoSelected(todo: TodoItem) {
    this.selectedTodo = todo;
  }

  onTodoClosed() {
    this.selectedTodo = undefined;
  }
}

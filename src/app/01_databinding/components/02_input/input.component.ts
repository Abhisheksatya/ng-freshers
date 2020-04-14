import { Component, Input } from '@angular/core';
import { TodoItem } from '../../models/todo-item.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input()
  todoItem: TodoItem;

  @Input()
  anotherTodoItem: TodoItem;

  @Input()
  finalTodoItem: TodoItem;
}

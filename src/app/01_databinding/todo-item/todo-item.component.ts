import { Component, Input } from '@angular/core';
import { TodoItem } from '../models/todo-item.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input()
  data: TodoItem;
}


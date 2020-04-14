import { Component } from '@angular/core';
import { TodoItem } from '../../models/todo-item.interface';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DataBindingComponent {
  todoItem: TodoItem = {
    id: 1,
    text: 'Teach TypeScript',
    completed: false
  };
  anotherTodoItem: TodoItem = {
    id: 2,
    text: 'Teach Angular',
    completed: false
  };
  finalTodoItem: TodoItem = null;

  onDescriptionChanged(description: string) {
    this.todoItem.description = description;
  }
}

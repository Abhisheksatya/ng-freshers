import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../models/todo-item.interface';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  @Input()
  todos: TodoItem[];

  @Input()
  selectedTodo: TodoItem;

  @Output()
  todoSelected = new EventEmitter<TodoItem>();

  hideTable = false;

  onSelectTodo(todo: TodoItem) {
    this.todoSelected.emit(todo);
  }

  onCardHeaderClick() {
    console.log('clicked');
    this.hideTable = !this.hideTable;
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../models/todo-item.interface';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {

  @Input()
  todo: TodoItem;

  @Output()
  todoClosed = new EventEmitter<void>();

  closeTodo() {
    this.todoClosed.emit();
  }
}

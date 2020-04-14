import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../models/todo-item.interface';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Input()
  todoItem: TodoItem;

  @Output()
  descriptionChanged = new EventEmitter<string>();

  onDescriptionChanged(description: string) {
    this.descriptionChanged.emit(description);
  }
}

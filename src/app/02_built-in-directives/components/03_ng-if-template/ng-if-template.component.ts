import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/app/01_databinding/models/todo-item.interface';

@Component({
  selector: 'app-ng-if-template',
  templateUrl: './ng-if-template.component.html',
  styleUrls: ['./ng-if-template.component.css']
})
export class NgIfTemplateComponent {

  @Input()
  todos: TodoItem[];
}

import { Component } from '@angular/core';
import { Todo, Severity } from '../models/todo.interface';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  todos: Todo[] = [
    {
      id: 1,
      text: 'Teach TypeScript',
      targetDate: new Date(2020, 5, 12),
      severity: Severity.CRITICAL,
      completed: false,
      amountPenalizedIfNotCompleted: 12
    },
    {
      id: 1,
      text: 'Teach Angular',
      targetDate: new Date(2020, 5, 20),
      severity: Severity.MAJOR,
      completed: false,
      amountPenalizedIfNotCompleted: 10
    },
    {
      id: 3,
      text: 'Teach React',
      targetDate: new Date(2020, 7, 2),
      severity: Severity.MINOR,
      completed: true,
      amountPenalizedIfNotCompleted: 4
    },
    {
      id: 4,
      text: 'Teach JavaScript',
      targetDate: new Date(2020, 6, 10),
      severity: Severity.MAJOR,
      completed: false,
      amountPenalizedIfNotCompleted: 11
    },
    {
      id: 5,
      text: 'Teach Node',
      targetDate: new Date(2020, 4, 10),
      severity: Severity.MINOR,
      completed: true,
      amountPenalizedIfNotCompleted: 9
    }
  ];
}

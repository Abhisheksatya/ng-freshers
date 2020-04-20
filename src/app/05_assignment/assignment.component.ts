import { Component } from '@angular/core';

export interface Todo {
  id: string;
  type: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  todos: Todo[] = [
    { id: 'TODO_1', type: 'Teach TypeScript', description: 'TypeScript is an awesome tech', completed: false },
    { id: 'TODO_2', type: 'Teach Angular', description: 'Angular is the future', completed: true },
    { id: 'TODO_3', type: 'Teach NodeJS', description: 'Much appreciated server-side tech', completed: true },
    { id: 'TODO_4', type: 'Teach JavaScript', description: 'A ubiquitous language in browser', completed: false }
  ];
}

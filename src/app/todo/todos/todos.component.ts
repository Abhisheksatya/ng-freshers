import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTodos();
  }

  navigateToCreateTodo() {
    this.router.navigateByUrl('/todo/new');
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id)
      .subscribe(() => {
        this.getTodos();
      });
  }

  viewTodo(todo: Todo) {
    // this.router.navigateByUrl(`/todo/${todo.id}`);
    this.router.navigate(['/todo', todo.id]);
  }

  private getTodos() {
    this.todoService.getTodos()
      .subscribe((todos: Todo[]) => {
        this.todos = todos;
      });
  }
}

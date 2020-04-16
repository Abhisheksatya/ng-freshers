import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const todoId = this.route.snapshot.paramMap.get('id');
    this.todoService.getTodoById(todoId)
      .subscribe((todo: Todo) => {
        this.todo = todo;
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('http://localhost:3001/todos');
  }

  getTodoById(id: string) {
    return this.http.get(`http://localhost:3001/todos/${id}`);
  }

  saveTodo(text: string, description: string) {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      description,
      completed: false
    };
    return this.http.post('http://localhost:3001/todos', newTodo);
  }

  deleteTodo(id: string) {
    return this.http.delete(`http://localhost:3001/todos/${id}`);
  }
}

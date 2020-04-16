import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.interface';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
  todoForm: FormGroup;
  textControl: FormControl;
  descriptionControl: FormControl;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.textControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.descriptionControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

    this.todoForm = new FormGroup({
      text: this.textControl,
      description: this.descriptionControl
    });
  }

  onFormSubmit() {
    const { text, description } = this.todoForm.value;
    this.todoService.saveTodo(text, description)
      .subscribe(() => {
        this.router.navigateByUrl('/todo');
      });
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }
}

import { PipeTransform, Pipe } from '@angular/core';
import { Severity } from '../models/todo.interface';

@Pipe({
  name: 'todoSeverity'
})
export class TodoSeverityPipe implements PipeTransform {
  transform(value: number) {
    return Severity[value] || '';
  }
}

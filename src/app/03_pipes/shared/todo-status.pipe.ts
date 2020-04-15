import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoStatus'
})
export class TodoStatusPipe implements PipeTransform {
  transform(value: boolean) {
    let transformed: string;
    if (value) {
      transformed = '<strong class="green">YES</strong>';
    } else {
      transformed = '<span class="red">NO</span>';
    }
    return transformed;
  }
}

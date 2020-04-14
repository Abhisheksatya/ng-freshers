import { Component } from '@angular/core';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {
  message = 'hello world';

  getData() {
    return 'Some sample data';
  }
}

import { Directive, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[online]'
})
export class OnlineDirective implements OnInit {
  online = true;

  @HostBinding('class.offline')
  get isOffline() {
    return !this.online;
  }

  @HostBinding('disabled')
  get disabled() {
    return !this.online;
  }

  ngOnInit() {
    setInterval(() => {
      this.online = Math.random() > 0.5;
    }, 2000);
  }
}

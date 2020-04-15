import { Directive, HostListener, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({
  selector: '[trackClick]'
})
export class ClicksDirective {

  isHover = false;

  @Input()
  trackClick: string;

  @Output()
  clicked = new EventEmitter<string>();

  @HostBinding('class.hover')
  get hover() {
    return this.isHover;
  }

  @HostListener('click')
  onClick() {
    this.clicked.emit(this.trackClick);
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.isHover = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.isHover = false;
  }
}

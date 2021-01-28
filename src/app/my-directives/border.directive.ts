import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {

  constructor(private el: ElementRef) { }



  @HostListener('mouseenter') onMouseEnter() {
  this.el.nativeElement.style.cssText = 'box-shadow: 2px 2px #888888;';

}

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.boxShadow = null;
  }

 
}



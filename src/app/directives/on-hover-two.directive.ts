import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[webOnHoverTwo]'
})
export class OnHoverTwoDirective {
  @Input('webOnHoverTwo') elNumber = 6;
  className = 'mat-elevation-z';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, this.className + this.elNumber);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, this.className + this.elNumber);
  }

}

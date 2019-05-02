import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click")onClicks(){
    this.headingHighlight("yellow");
  }

  @HostListener("dblclick")onDoubleClicks() {
    this.headingHighlight("aliceblue");
  }

  private headingHighlight(action:string){
    this.elem.nativeElement.style.backgroundColor = action;
  }

}

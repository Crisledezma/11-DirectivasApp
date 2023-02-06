import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(pColor: string) {
    this.htmlElement.nativeElement.style.color = pColor;
  }
  @Input() msg = '';
  @Input() set condicional(pCondicion: boolean) {
    this.htmlElement.nativeElement.hidden = pCondicion
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setColor();
    this.setMsg();
    this.setClass();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMsg() {
    this.htmlElement.nativeElement.innerText = this.msg
  }

  setClass() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}

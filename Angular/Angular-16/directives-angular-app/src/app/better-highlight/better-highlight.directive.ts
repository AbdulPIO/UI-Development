import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'cyan';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cyan')
  }

  @HostListener('mouseenter') mouseover(evevntData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cyan')
    this.backgroundColor = this.highlightColor // using HostBinding without the renderer
  }

  @HostListener('mouseleave') mouseleave(evevntData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor // using HostBinding without the renderer
  }
}

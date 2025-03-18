import { Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Diables styles scoping
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  label = input.required<string>();
  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);

  }

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  // Using Signal contentChild
  // private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  //Accessing host element programmatically
  private el = inject(ElementRef);
}

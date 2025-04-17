import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None / ShadowDOM
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string }
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  // constructor is called first, before ngOnInit
  constructor() { // execute everytime an instance of this component is created
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) { // called before ngOnInit
    console.log('ngOnChanges called!');
    console.log(changes); // shows thebound input property i.e., element in this case

  }

  ngOnInit() { // execute everytime an instance of this component is created
    console.log('ngOnInit called!');
  }

  ngDoCheck() { // runs on evry change detection run
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content: ' + this.paragraph.nativeElement.textContent);

  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');

  }
}

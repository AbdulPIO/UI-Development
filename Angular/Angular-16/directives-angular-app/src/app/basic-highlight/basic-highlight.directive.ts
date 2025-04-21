import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHiglightDirective implements OnInit {
    constructor(private elementRef: ElementRef) { //Reference to an element this directive is placed on

    }

    ngOnInit() {
        // getting access to the element this directive is place on, and overriding the style of the element
        this.elementRef.nativeElement.style.backgroundColor = 'coral';
    }
}
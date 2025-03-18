import { AfterViewInit, Component, ElementRef, EventEmitter, Output, OnInit, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //Using ViewChild as a function, gives signal as a value
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle = '';
  enteredText = '';

  @Output() add = new EventEmitter<{ title: string; text: string }>();

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }
  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}

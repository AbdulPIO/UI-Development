import { Component } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'materialdemo-angular-app';
  notificaions = 2;

  opened = false;

  selectedValue: string = '';

  options: string[] = ['Angular', 'React', 'Vue'];

  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' }
  ]

  displayFn(subject: { name: any; }) {
    return subject ? subject.name : undefined;
  }

  minDate = new Date();
  maxDate = new Date(2025, 5, 29);

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
}
